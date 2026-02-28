/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../apps/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Forçar geração das classes customizadas
    'bg-primary',
    'text-primary-foreground',
    'bg-secondary',
    'text-secondary-foreground',
    'bg-tertiary',
    'text-tertiary-foreground',
    'bg-background',
    'text-foreground',
    'bg-muted',
    'text-muted-foreground',
    'border-border',
    'bg-input',
    'text-input-foreground',
    'ring-ring',
  ],
  theme: {
    extend: {
      colors: {
        // CSS Variables para whitelabel com formato RGB sem alpha
        primary: 'rgb(var(--color-primary))',
        'primary-foreground': 'rgb(var(--color-primary-foreground))',
        secondary: 'rgb(var(--color-secondary))',
        'secondary-foreground': 'rgb(var(--color-secondary-foreground))',
        tertiary: 'rgb(var(--color-tertiary))',
        'tertiary-foreground': 'rgb(var(--color-tertiary-foreground))',
        background: 'rgb(var(--color-background))',
        foreground: 'rgb(var(--color-foreground))',
        muted: 'rgb(var(--color-muted))',
        'muted-foreground': 'rgb(var(--color-muted-foreground))',
        border: 'rgb(var(--color-border))',
        input: 'rgb(var(--color-input))',
        'input-foreground': 'rgb(var(--color-input-foreground))',
        ring: 'rgb(var(--color-ring))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
