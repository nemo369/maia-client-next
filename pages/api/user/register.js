import axios from 'axios';

export default async function register(req, res) {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { method } = req;
  console.log(req.body);
  switch (method) {
    case 'POST':
      // Get data from your database
      await axios
        .post(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/users/register`, req.body)
        .then(({ data }) => {
          res.status(200).json({ data });
        })
        .catch(({ response }) => {
          res.status(response.status).json(response.data);
        });
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
