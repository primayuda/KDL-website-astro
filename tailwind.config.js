/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', // Adjust if needed
    './components/**/*.{astro,html,js,ts,jsx,tsx}',
    './layouts/**/*.{astro,html,js,ts,jsx,tsx}',
    './pages/**/*.{astro,html,js,ts,jsx,tsx,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

