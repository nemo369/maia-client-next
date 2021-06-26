import axios from 'axios';

export default async function addToFavorites(req) {
  const { WORDPRESS_ENDPOINT } = process.env;
  //   const { method } = req;
  await axios.post(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/user/addToFavorites`, req.body);
  //   switch (method) {
  //     case 'POST':
  //       // Get data from your database
  //       break;
  //     default:
  //       res.setHeader('Allow', ['POST']);
  //       res.status(405).end(`Method ${method} Not Allowed`);
  //   }
}
