/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design Tokens — Truemind UI / Chuks Kitchen
        primary: {
          DEFAULT: '#FF7A18',
          light: '#FFB066',
          dark: '#E06000',
        },
        accent: {
          DEFAULT: '#1E88E5',
          light: '#E3F2FD',
        },
        dark: {
          DEFAULT: '#1F2937',
          deep: '#0A0D13',
          body: '#292535',
        },
        neutral: {
          text: '#3B4758',
          muted: '#616161',
          placeholder: '#BDBBC1',
          border: '#E5E7EB',
          bg: '#F3F4F6',
        },
      },
      fontFamily: {
        display: ['"Island Moments"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
        'card-lg': '0 8px 40px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
