/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-header": "#f9fafb",
        "text-content": "#e5e7eb",
        "text-gray": "#9ca3af",
        "tab-border": "#3f3f46",
        "close-border": "#312e81",
        "slide-border": "#3f3f46",
        "slide-bg": "#27272a",
        "slide-icon": "#09090b",

        "button-bg": "#18181b",
        "button-bg-hover": "#27272a",
        "button-border": "#27272a",
        "screen-bg": "#09090b",
        "input-bg": "#09090b",
        "close-bg": "#09090b",
        "close-hover": "#3f3f46",
        "nav-border": "#27272a",

        // DARKMODE COLORS
        "dark-text-header": "#030712", // Dark mode text-header
        "dark-text-content": "#1f2937", // Dark mode text-content
        "dark-text-gray": "#374151",
        "dark-tab-border": "#e7e5e4", // Dark mode tab-border
        "dark-close-border": "#a8a29e", // Dark mode close-border
        "dark-slide-border": "#f5f5f5", // Dark mode slide-border

        "dark-slide-bg": "#fafafa", // Dark mode slide-bg
        "dark-slide-icon": "#a8a29e", // Dark mode slide-bg

        "dark-button-bg": "#d6d3d1", // Dark mode button-bg
        "dark-button-bg-hover": "#e5e5e5", // Dark mode button-bg-hover
        "dark-button-border": "#a8a29e", // Dark mode button-border
        "dark-button-border-hover": "#d6d3d1", // Dark mode button-border

        "dark-close-hover": "#e5e5e5",

        "dark-screen-bg": "#a3a3a3", // Dark mode screen-bg
        "dark-input-bg": "#f5f5f4", // Dark mode input-bg
        "dark-input-border": "#a8a29e", // Dark mode input-bg

        "dark-close-bg": "#f5f5f5", // Dark mode close-bg
        "dark-nav-border": "#a8a29e", // Dark mode nav-border
      },
      backgroundImage: theme => ({
        "gradient-projects":
          "linear-gradient(90deg, #be185d 0%, #3b0764 20%, #09090b 100%)",
        "gradient-about":
          "linear-gradient(270deg, #be185d 0%, #3b0764 20%, #09090b 100%)",
        "gradient-contact":
          "linear-gradient(0deg, #be185d 0%, #3b0764 20%, #09090b 100%)",
        "mobile-home": "#",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        hdr: "2rem",
        info: "1rem",
        btn: "1.5rem",
      },
      content: {},
    },
    screens: {
      xs: "480px",
      "bt-bp": "600px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",

      se: { raw: "(max-width: 376px) and (max-height: 700px)" },

      "landscape-mobile": {
        raw: "(max-height: 440px) and (orientation: landscape)",
      },
      "se-mobile": {
        raw: "(max-height: 376px) and (orientation: landscape)",
      },
    },
  },
  plugins: [],
}
