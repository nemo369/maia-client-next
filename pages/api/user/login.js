import axios from 'axios';

export default async function login(req, res) {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { method } = req;

  switch (method) {
    case 'POST':
      // Get data from your database
      await axios
        .post(`${WORDPRESS_ENDPOINT}/wp-json/jwt-auth/v1/token`, req.body)
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
