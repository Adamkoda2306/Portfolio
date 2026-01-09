/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)', /* cyan-400 */
          foreground: 'var(--color-primary-foreground)', /* gray-950 */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* gray-800 */
          foreground: 'var(--color-secondary-foreground)', /* gray-200 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* green-400 */
          foreground: 'var(--color-accent-foreground)', /* gray-950 */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-800 */
          foreground: 'var(--color-muted-foreground)', /* gray-400 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* gray-900 */
          foreground: 'var(--color-card-foreground)', /* gray-200 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* gray-900 */
          foreground: 'var(--color-popover-foreground)', /* gray-200 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* green-400 */
          foreground: 'var(--color-success-foreground)', /* gray-950 */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)', /* gray-950 */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        code: ['Fira Code', 'monospace'],
        cta: ['Space Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        // 'card': '0 4px 16px rgba(0, 212, 255, 0.1)',
        // 'card-hover': '0 8px 32px rgba(0, 212, 255, 0.15)',
        // 'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 16px rgba(8, 145, 178, 0.1)',
        'card-hover': '0 8px 32px rgba(8, 145, 178, 0.15)',
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'terminal-blink': 'terminal-blink 1s infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'terminal-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}