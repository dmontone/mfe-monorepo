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
        // CSS Variables para whitelabel com formato hexadecimal
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        tertiary: 'var(--color-tertiary)',
        'tertiary-foreground': 'var(--color-tertiary-foreground)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        'input-foreground': 'var(--color-input-foreground)',
        ring: 'var(--color-ring)',
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
