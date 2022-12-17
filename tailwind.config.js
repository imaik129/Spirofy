/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'spotifyGreen': { DEFAULT: "#1DB954" },
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    }
  },
  plugins: [],
}


