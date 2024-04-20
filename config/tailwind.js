module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx',
    './node_modules/@grapp/nextra-theme/src/**/*.{ts,tsx}',
    './node_modules/@grapp/nextra-theme/lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', 'html[class~="dark"]'],
};
