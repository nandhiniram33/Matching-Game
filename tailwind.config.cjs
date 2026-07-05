module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#7c5cff',
        glass: 'rgba(255,255,255,0.06)'
      },
      backgroundImage: {
        'jungle-gradient': 'linear-gradient(180deg,#021022 0%,#04202a 100%)'
      }
    }
  },
  plugins: []
}
