import axios from 'axios';

export default async function profile(req, res) {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { method } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      try {
        const profileData = await axios.get(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/profile`);
        const profilee = profileData.data;
        res.send(profilee);
      } catch (error) {
        res.send(error);
        // res.status(response.status).json(response.data);
      }

      break;
    default:
  }
}
