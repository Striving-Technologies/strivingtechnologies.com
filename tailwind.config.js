/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        gold: "var(--gold)",
        "mono-grey": "var(--mono-grey)",
        "mono-grey-dark": "var(--mono-grey-dark)",
      },
      screens: {
        "sm-laptop": { max: "1200px" },
        // => @media (max-width: 1200px) { ... }

        "lg-tab": { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        tab: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        "sm-tab": { max: "540px" },
        // => @media (max-width: 540px) { ... }

        phone: { max: "500px" },
        // => @media (max-width: 500px) { ... }
      },
    },
  },
  plugins: [],
};
