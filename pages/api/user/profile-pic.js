import axios from 'axios';
import formidable from 'formidable';

export default async function handler(req, res) {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { method } = req;
  const { headers } = req;
  const authorization = headers.authorization ? headers.authorization : '';

  //https://stackoverflow.com/questions/60020241/next-js-file-upload-via-api-routes-formidable-not-working
  const promise = new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './';
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  const { fields, files } = await promise;
  console.log(files);
  console.log(fields);
  switch (method) {
    case 'POST':
      // Get data from your database
      try {
        const { data: image } = await axios.post(
          `${WORDPRESS_ENDPOINT}/wp-json/wp/v2/media`,
          files,
          {
            headers: {
              ...headers,
              authorization,
              'content-disposition': headers['content-disposition'],
            },
          }
        );

        if (!image || !Number(image.id)) {
          throw new Error('No image :(');
        }
        const newProfile = {
          profile: {
            avatar: Number(image.id),
          },
        };
        await axios
          .put(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/profile`, newProfile, {
            headers: { authorization },
          })
          .then(({ data }) => {
            res.status(200).json({ ...data });
          });
      } catch ({ response }) {
        res.status(response.status).json(response.data);
      }

      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
export const config = {
  api: {
    bodyParser: false,
  },
};
