const seoObj = {
  title: 'מערכת מאי״ה',
  description: 'מערכת אבחון, ייעוץ והרשמה מבית אדם מילא',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    // url: 'https://www.nextmovies.test',
    site_name: 'מאערכת המאי״ה',
  },
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
