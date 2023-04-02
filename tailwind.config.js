module.exports = {
    mode: 'jit',
    purge: [
     './*.html',
     './*.{js,jsx,ts,tsx,vue}',
   ],
    theme: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'rgba_background-img': 'rgb(64 102 59 / 47%)',
      },
      fontFamily: {
        // sans: ['Graphik', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
      dropShadow: {
        'sha': '10px 10px 15px rgba(0, 0, 0, 0.05)',
        'sha_before' : '10px 10px 15px rgba(0, 0, 0, 0.05);',
      }
    },
    plugins: [
        require('tailwind-scrollbar'),
    ]
  }