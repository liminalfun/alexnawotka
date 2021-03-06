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
    maxWidth: {
      prose: '65ch'
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};
