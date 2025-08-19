import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        selise: {
          // Primary Colors (60% usage)
          blue: '#0066B2',
          'blue-hover': '#0052a3',
          'blue-light': '#e6f2ff',
          'blue-dark': '#004080',
          
          // Supporting Colors (30% usage)
          grey: '#7B7C7F',
          'grey-light': '#f5f5f6',
          'grey-dark': '#5a5b5e',
          
          // Oxford Blue for deep backgrounds/contrast
          oxford: '#001F35',
          'oxford-light': '#e6eaed',
          
          // Text Colors
          black: '#1B2021',
          white: '#FFFFFF',
          
          // Secondary Colors (10% usage) - Use sparingly for highlights
          'poly-green': '#2A4D14',
          'poly-green-light': '#e8f0e4',
          mauveine: '#791E94',
          'mauveine-light': '#f2e6f5',
          lavender: '#BC63D7',
          'lavender-light': '#f7f0fb',
          'lime-green': '#7BC950',
          'lime-green-light': '#f1f9ec',
          crimson: '#D80032',
          'crimson-light': '#fbe6ec',
          'pantone-red': '#EF233C',
          'pantone-red-light': '#fde8ea',
        },
        // Enhanced gray scale for better contrast
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        // Primary: Bahnschrift for main headings
        heading: ['Bahnschrift', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        // Secondary: Aptos for sub-headings  
        subhead: ['Aptos', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        // Body: Open Sans for paragraphs
        body: ['Open Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        // Brand-compliant spacing following generous whitespace principles
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      lineHeight: {
        'comfortable': '1.75',
      },
    },
  },
  plugins: [],
}
export default config
