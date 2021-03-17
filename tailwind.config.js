module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      sans: ['Public Sans'],
      body: ['Public Sans']
    },
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        prose: '65ch'
      },
      colors: {
        'light': '#e2dfd0'
      },

      typography: {
        important: true,
        DEFAULT: {
          prose: {
            color: '#e2dfd0',
            a: {
              color: '#d5ccee',
              '&:hover': {
                color: '#b7add4',
              },
            },
          },
        },
      },
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};
