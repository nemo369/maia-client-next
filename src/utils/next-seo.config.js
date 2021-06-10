const seoObj = {
  title: 'מערכת מאיה |',
  description: 'We fu**ing help people yall',
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
