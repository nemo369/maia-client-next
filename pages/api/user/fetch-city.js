// scripts/data/1309.json
import axios from 'axios';

export default async function fetchCity(req, res) {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { method } = req;
  const { cityid } = req.query;

  switch (method) {
    case 'GET':
      // Get data from your database
      try {
        const { data } = await axios.get(`${WORDPRESS_ENDPOINT}/scripts/data/${cityid}.json`);
        if (!data) {
          throw new Error('No data :(');
        }

        res.status(200).json(data);
      } catch ({ response }) {
        res.status(404).json('No data :(');
      }

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
