import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dusty-violet': '#C7C0D9',
        'dark-grey': '#3C3D3E',
        'light-grey': '#C7D0D9',
      },
      keyframes: {
        move: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
        gallery: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
      },
      animation: {
        move: 'move 50s linear infinite',
        gallery: 'gallery 50s linear infinite',
      },
      boxShadow: {
        'custom-gallery': '0px 20px 41px 0px #0000001F',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.hide-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }],
};
export default config;
