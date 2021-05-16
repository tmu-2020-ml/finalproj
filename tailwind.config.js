const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: production,
  },
  theme: {
    backgroundColor: (_) => ({
      primary: '#DCFFFD',
      secondary: '#0B3C49',
      danger: '#F9C22E',
    }),
    textColor: {
      primary: '#2E0F15',
      secondary: '#DCFFFD',
      danger: '#F9C22E',
      link: '#FF729F',
    },
  },
};
