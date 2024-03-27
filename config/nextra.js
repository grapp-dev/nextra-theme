exports.nextraOptions = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
};

exports.withNextraOptions = {
  output: 'export',
  images: {
    unoptimized: true,
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

    return config;
  },
  transpilePackages: ['@grapp/nextra-theme'],
};
