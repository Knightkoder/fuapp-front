import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      greenF: '#00A19B',
      // Primary
      'marine-blue': 'hsl(213, 96%, 18%)',
      'purplish-blue': 'hsl(243, 100%, 62%)',
      'pastel-blue': 'hsl(228, 100%, 84%)',
      'light-blue': 'hsl(206, 94%, 87%)',
      'strawberry-red': 'hsl(354, 84%, 57%)',
      // Neutral
      'cool-gray': 'hsl(231, 11%, 63%)',
      'light-gray': 'hsl(229, 24%, 87%)',
      magnolia: 'hsl(217, 100%, 97%)',
      alabaster: 'hsl(231, 100%, 99%)',
      white: 'hsl(0, 0%, 100%)',
      // Other
      transparent: 'rgba(0,0,0,0)',
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        'home-bg': "url('/images/bg-masthead.jpg')",
      }
    },
  }
} satisfies Config

export default config