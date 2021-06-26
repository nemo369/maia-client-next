import axios from 'axios';

export default async function moreProfessions() {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { data } = await axios.get(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/vendor/professions`);

  return data;
  //   const { method } = 'GET';
  //   switch (method) {
  //     case 'GET':
  //       // Get data from your database
  //       await axios
  //         .get(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/vendor/professions`)
  //         .then(({ data }) => {
  //           res.status(200).json({ data });
  //         })
  //         .catch(({ response }) => {
  //           res.status(response.status).json(response.data);
  //         });
  //       break;
  //     default:
  //     //   res.setHeader('Allow', ['POST']);
  //     //   res.status(405).end(`Method ${method} Not Allowed`);
  //   }
}
