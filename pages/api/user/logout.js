import axios from 'axios';

export default async function login(req, res) {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { method } = req;

  switch (method) {
    case 'POST':
      // Get data from your database
      await axios
        .get(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/user`)
        .then(({ data }) => {
          res.status(200).json({ data });
        })
        .catch(({ err }) => {
          res.status(400).json({ err });
        });
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
