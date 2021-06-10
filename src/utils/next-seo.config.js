const seoObj = {
  title: 'Adam-Milo',
  description: 'We help people',
};
export const seoMerge = (seo) => ({
  ...seoObj,
  title: `${seoObj.title} | ${seo.title ? seo.title : ''}`,
  description: `${seoObj.description} | ${seo.description ? seo.description : ''}`,
  openGraph: {
    title: `${seoObj.title} | ${seo.title ? seo.title : ''}`,
    description: `${seoObj.title}`,
  },
});
