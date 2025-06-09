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
        'primary': {
          DEFAULT: '#007AFF', // A common blue, adjust as needed
          light: '#3395FF',
          dark: '#005CE6',
        },
        'secondary': {
          DEFAULT: '#4CD964', // A common green
          light: '#6FFF84',
          dark: '#36A84C',
        },
        'neutral': {
          50: '#F9FAFB',
          100: '#F3F4F6', // Light gray for backgrounds
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', // Medium gray for text
          600: '#4B5563',
          700: '#374151', // Darker gray for text, borders
          800: '#1F2937', // Very dark gray for backgrounds (dark mode)
          900: '#111827', // Almost black
        },
        'accent': {
          DEFAULT: '#FF9500', // Orange for accents
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
