export default async function StreeEndPoint() {
  const { WORDPRESS_ENDPOINT } = process.env;
  const res = await fetch(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/info/street`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { streets: data }, // will be passed to the page component as props
  };
}
