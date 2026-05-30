/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lake: {
          50: '#eef6fb',
          100: '#d6e9f3',
          200: '#aed3e7',
          300: '#79b4d4',
          400: '#4a92bd',
          500: '#2f76a3',
          600: '#235d85',
          700: '#1d4c6c',
          800: '#1a3f59',
          900: '#0f2a3d',
        },
        forest: {
          50: '#eef4ef',
          100: '#d6e6d9',
          200: '#aecdb4',
          300: '#7eae89',
          400: '#548c63',
          500: '#3b7049',
          600: '#2d5839',
          700: '#26482f',
          800: '#1f3a27',
          900: '#152a1c',
        },
        sky: {
          soft: '#cfe6f4',
        },
        sand: {
          50: '#fbf8f1',
          100: '#f4ecdb',
          200: '#e9d9b8',
          300: '#dcc18d',
          400: '#cda866',
        },
        pine: {
          brown: '#6b4f3a',
          dark: '#4a3527',
        },
        mist: {
          50: '#f6f7f8',
          100: '#eceef0',
          200: '#d9dde1',
          300: '#bcc3ca',
          400: '#929ca6',
        },
        sunset: {
          400: '#f5a35c',
          500: '#ed8636',
          600: '#d86d1d',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        rustic: ['"Fraunces"', 'Georgia', 'serif'],
      },
      fontSize: {
        base: ['17px', '1.7'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        natural: '0 10px 30px -12px rgba(15, 42, 61, 0.25)',
        soft: '0 6px 20px -8px rgba(15, 42, 61, 0.18)',
      },
      backgroundImage: {
        'lake-fade': 'linear-gradient(180deg, rgba(15,42,61,0) 0%, rgba(15,42,61,0.55) 100%)',
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slow-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
        'slow-pan': 'slow-pan 18s ease infinite',
        'fade-in': 'fade-in 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
