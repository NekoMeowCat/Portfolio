import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        anton: ['"Anton"'],
        bueno: ['"Bueno"', "sans-serif"],
      },
      boxShadow: {
        "3d": "2px 2px 0 #000, 4px 4px 0 #555, 6px 6px 0 #999", // 3D shadow
      },
    },
  },
  plugins: [require("preline/plugin")],
} satisfies Config;
