import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue-Green Gradient Theme with Subtle Violet Accent
        'infra-sky': '#4A9FD8',        // Soft sky blue (main)
        'infra-blue': '#3B82F6',       // Medium blue (primary)
        'infra-deep-blue': '#2563EB',  // Deep blue (strong)
        'infra-teal': '#14B8A6',       // Teal/green accent
        'infra-navy': '#0F172A',       // Dark navy (text/base)
        // Subtle Accents (use sparingly)
        'infra-violet': '#8B5CF6',     // Softer violet (subtle accent)
        'infra-lime': '#84CC16',       // Success/highlight
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

export default config
