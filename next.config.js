const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withImages = require('next-images');

const localeSubpaths = {};

module.exports = withImages({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});
