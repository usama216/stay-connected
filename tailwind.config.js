/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        brand: {
          red: '#dc2626',
          'red-light': '#f87171',
          'red-dark': '#b91c1c',
          blue: '#3b82f6',
          'blue-light': '#93c5fd',
          'blue-dark': '#2563eb',
          gray: '#374151',
          'gray-light': '#6b7280',
        }
      },
    },
  },
  plugins: [],
}
