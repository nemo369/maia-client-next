// MORE OPTIONS: https://github.com/i18next/i18next-scanner

// eslint-disable-next-line no-undef
module.exports = {
  options: {
    fallbackLng: 'hem',
    debug: true,
    sort: true,
    func: {
      list: ['IllegalMoveError', 't'],
      extensions: ['.js'],
    },

    lngs: ['hem', 'hef'],

    ns: ['common'],

    defaultLng: 'hem',
    defaultNs: 'common',
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
    defaultValue: (lng, ns, key) => key,

    // Location of translation files
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 4,
    },

    nsSeparator: ':',
    keySeparator: '.',
  },
};
