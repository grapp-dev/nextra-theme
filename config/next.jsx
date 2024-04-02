import { useRouter } from 'next/router';

export const getDefaultConfig = options => {
  const { logo, footer, github, discord, title, description, docs, hue, saturation, ...rest } =
    options;

  const config = {
    ...rest,
    docsRepositoryBase: `${github}/blob/main/docs`,
    head: () => {
      return (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={docs} />
          <meta property="og:image" content={`${docs}/og-slogan.png`} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`${docs}/og-slogan.png`} />
        </>
      );
    },
    logo,
    footer: {
      text: footer,
    },
    feedback: {
      content: null,
    },
    gitTimestamp: null,
    project: {
      link: github,
    },
    chat: {
      link: discord,
    },
    useNextSeoProps() {
      const { asPath } = useRouter();
      return {
        titleTemplate: asPath !== '/' ? `%s – ${title}` : title,
      };
    },
  };

  if (hue) {
    config.primaryHue = hue;
  }

  if (saturation) {
    config.primarySaturation = saturation;
  }

  return config;
};
