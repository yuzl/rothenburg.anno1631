/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0f0e0c',
          surface: '#141310',
          elev: '#1b1915',
          border: '#2a261f',
          text: '#e9e6dc',
          muted: '#b7ae98',
          accent: '#c3a86b',
          accent2: '#9a7e44',
        },
        // Medieval Dark Theme
        medieval: {
          50: '#f8f6f2',
          100: '#e8e0d4',
          200: '#d4c4b0',
          300: '#b8a088',
          400: '#9c7c60',
          500: '#8b6b4a',
          600: '#7a5a3d',
          700: '#6b4d35',
          800: '#5a412e',
          900: '#4a3626',
          950: '#2d2218',
        },
        // Dark Earthy Tones
        earth: {
          50: '#faf8f5',
          100: '#f0e8e0',
          200: '#e0d0c0',
          300: '#c8b090',
          400: '#b09070',
          500: '#9a7a5a',
          600: '#8a6a4a',
          700: '#745a3d',
          800: '#5f4a32',
          900: '#4f3d2a',
          950: '#2a2115',
        },
        // Grungy Dark Colors
        grunge: {
          50: '#f7f6f3',
          100: '#e8e4d8',
          200: '#d1c7b0',
          300: '#b3a484',
          400: '#958060',
          500: '#7d6a4a',
          600: '#6a5a3d',
          700: '#5a4a32',
          800: '#4a3d2a',
          900: '#3d3322',
          950: '#1f1a11',
        },
        // Medieval Accent Colors
        accent: {
          gold: '#d4af37',
          'gold-light': '#f4d03f',
          'gold-dark': '#b8941f',
          copper: '#cd7f32',
          'copper-light': '#daa520',
          'copper-dark': '#a0522d',
          iron: '#4a4a4a',
          'iron-light': '#6a6a6a',
          'iron-dark': '#2a2a2a',
          parchment: '#f4f1e8',
          'parchment-dark': '#e8e0d0',
          ink: '#1a1a1a',
          'ink-light': '#2a2a2a',
        }
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Garamond', 'serif'],
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        ui: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
        medieval: ['Cinzel', 'Times New Roman', 'serif'],
        'medieval-body': ['Crimson Text', 'Georgia', 'serif'],
        'medieval-decorative': ['UnifrakturMaguntia', 'Cinzel', 'serif'],
        'medieval-script': ['MedievalSharp', 'Crimson Text', 'serif'],
      },
      backgroundImage: {
        'parchment': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23noise)\" opacity=\"0.1\"/%3E%3C/svg%3E')",
        'wood': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"wood\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.6\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3CfeColorMatrix type=\"saturate\" values=\"0.8\"/%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23wood)\" opacity=\"0.3\"/%3E%3C/svg%3E')",
        'stone': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"stone\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3CfeColorMatrix type=\"saturate\" values=\"0.5\"/%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23stone)\" opacity=\"0.2\"/%3E%3C/svg%3E')",
      },
      boxShadow: {
        'medieval': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'medieval-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'medieval-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
        'inner-medieval': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'flicker': 'flicker 3s infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 30px rgba(212, 175, 55, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
