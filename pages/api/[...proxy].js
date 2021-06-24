import axios from 'axios';

export default async function proxy(req, res) {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { method, url, headers } = req;
  const endpoint = url.replace(/^\/api/, '');

  switch (method) {
    case 'GET':
      await axios
        .get(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2${endpoint}`, { headers })
        .then(({ data }) => {
          res.status(200).json({ data });
        })
        .catch(({ response }) => {
          res.status(response.status).json(response.data);
        });
      break;
    case 'POST':
      await axios
        .post(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2${endpoint}`, req.body, { headers })
        .then(({ data }) => {
          res.status(200).json({ data });
        })
        .catch(({ response }) => {
          res.status(response.status).json(response.data);
        });
      break;
    case 'PUT':
      await axios
        .put(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2${endpoint}`, req.body, { headers })
        .then(({ data }) => {
          res.status(200).json({ data });
        })
        .catch(({ response }) => {
          res.status(response.status).json(response.data);
        });
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
