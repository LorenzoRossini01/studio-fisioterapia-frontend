module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#545454",
            h1: {
              color: "#333",
              fontWeight: "700",
            },
            h2: {
              color: "#444",
              marginTop: "1.5em",
            },
            p: {
              marginBottom: "1em",
              lineHeight: "1.75",
            },
            img: {
              borderRadius: "1rem",
              margin: "2rem 0",
            },
            a: {
              color: "#64A69D",
              textDecoration: "underline",
              "&:hover": {
                color: "#477771",
              },
            },
          },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
