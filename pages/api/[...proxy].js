import axios from 'axios';

export default async function proxy(req, res) {
  const { WORDPRESS_ENDPOINT, NODE_ENV } = process.env;
  const { method, url } = req;
  const { headers } = req;
  const endpoint = url.replace(/^\/api/, '');
  const authorization = headers.authorization ? headers.authorization : '';

  switch (method) {
    case 'GET':
      await axios
        .get(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2${endpoint}`, {
          headers: { authorization },
        })
        .then(({ data }) => {
          // console.log(data);
          res.status(200).json({ data });
        })
        .catch(({ response }) => {
          // console.log(response);

          if ([401, 403].includes(response?.status) && 'production' === NODE_ENV) {
            res.writeHead(307, { Location: `/user/login?error=${response.status}` });
            res.end();
            return;
          }
          res.status(response.status).json(response.data);
        });
      break;
    case 'POST':
      await axios
        .post(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2${endpoint}`, req.body, {
          headers: { authorization },
        })
        .then(({ data }) => {
          // console.log(data);
          res.status(200).json({ data });
        })
        .catch((err) => {
          console.log(err);
          if (!err) {
            res.status(500).json('Server Error');
          }
          const { response } = err;
          if ([401, 403].includes(response?.status) && 'production' === NODE_ENV) {
            res.writeHead(307, { Location: `/user/login?error=${response.status}` });
            res.end();
            return;
          }
          res.status(response?.status ? response.status : 500).json(response?.data);
        });
      break;
    case 'PUT':
      await axios
        .put(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2${endpoint}`, req.body, { headers })
        .then(({ data }) => {
          res.status(200).json({ data });
        })
        .catch(({ response }) => {
          if ([401, 403].includes(response?.status) && 'production' === NODE_ENV) {
            res.writeHead(307, { Location: `/user/login?error=${response.status}` });
            res.end();
            return;
          }
          res.status(response.status).json(response.data);
        });
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
