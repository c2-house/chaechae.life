import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: 'oklch(0.985 0 0)',
        'sidebar-border': 'oklch(0.922 0 0)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            filter: 'blur(10px)',
            transform: 'translateY(10px)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
        'bounce-lower': {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'move-right': {
          '0%, 100%': { left: '0' },
          '38%': {
            left: 'calc(50% - 100px)',
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '41%': {
            transform: 'translateY(-30%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '44%': {
            left: 'calc(50% - 100px)',
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '47%': {
            transform: 'translateY(-30%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '53%': {
            transform: 'translateY(-30%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '56%': {
            left: 'calc(50% - 100px)',
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '59%': {
            transform: 'translateY(-30%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '62%': {
            left: 'calc(50% - 100px)',
            transform: 'translateY(0)',
          },
        },
        'move-left': {
          '0%, 100%': { right: '0' },
          '38%': {
            right: 'calc(50% - 100px)',
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '41%': {
            transform: 'translateY(-30%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '44%': {
            right: 'calc(50% - 100px)',
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '47%': {
            transform: 'translateY(-30%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '53%': {
            transform: 'translateY(-30%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '56%': {
            right: 'calc(50% - 100px)',
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '59%': {
            transform: 'translateY(-30%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '62%': {
            right: 'calc(50% - 100px)',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out backwards',
        'bounce-fast': 'bounce-lower 0.5s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'move-right': 'move-right 10s ease-in-out infinite',
        'move-left': 'move-left 10s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
