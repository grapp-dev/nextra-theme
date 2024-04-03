exports.getNextraOptions = (config = {}) => {
  const { flexsearch, ...rest } = config;

  return {
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    defaultShowCopyCode: true,
    staticImage: true,
    flexsearch: {
      codeblocks: false,
      ...flexsearch,
    },
    ...rest,
  };
};

exports.getWithNextraOptions = (config = {}) => {
  const { images, transpilePackages = [], webpack, ...rest } = config;

  return {
    output: 'export',
    images: {
      unoptimized: true,
      ...images,
    },
    webpack(config) {
      const regex = /\/components\/svg\/.+\.svg$/;
      const fileLoaderRule = config.module.rules.find(rule => {
        return rule.test instanceof RegExp && rule.test.test('.svg');
      });

      fileLoaderRule.exclude = regex;

      config.module.rules.push({
        test: regex,
        use: ['@svgr/webpack'],
      });

      webpack?.(config);

      return config;
    },
    transpilePackages: ['@grapp/nextra-theme', ...transpilePackages],
    ...rest,
  };
};
