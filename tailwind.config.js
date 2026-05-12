/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        somcit: {
          navy: '#0F0E47',
          blue: '#2F80ED',
          sky: '#EAF3FF',
          ink: '#17172F',
          mist: '#F7FAFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(15, 14, 71, 0.13)',
        soft: '0 16px 44px rgba(15, 14, 71, 0.08)',
        card: '0 18px 48px rgba(47, 128, 237, 0.11)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 15% 16%, rgba(47, 128, 237, 0.16), transparent 28%), radial-gradient(circle at 85% 12%, rgba(15, 14, 71, 0.10), transparent 28%), linear-gradient(135deg, #FFFFFF 0%, #F7FAFF 52%, #EEF5FF 100%)',
      },
    },
  },
  plugins: [],
};
