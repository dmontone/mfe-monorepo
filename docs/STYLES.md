# Configuração Tailwind CSS - Whitelabel & MFEs

```
packages/tailwind-config/
├── tailwind.config.js     # Configuração base com cores e safelist
├── globals.css           # CSS variables + @tailwind directives
├── postcss.config.base.js # Configuração PostCSS compartilhada
├── index.js              # Export centralizado
└── package.json           # Dependências e exports
```

```css
:root {
  --color-primary: #000000;           /* slate-800 */
  --color-primary-foreground: #FFFFFF; /* slate-50 */
  --color-secondary: #FFFFFF;         /* slate-50 */
  --color-secondary-foreground: #000000; /* slate-600 */
}
```

### Light/Dark Mode
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #FFFFFF;           /* slate-50 */
    --color-primary-foreground: #000000;   /* slate-800 */
  }
}
```

## Configuração Tailwind

### Cores com CSS Variables
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        'primary-foreground': 'rgb(var(--color-primary-foreground))',
        secondary: 'rgb(var(--color-secondary))',
        'secondary-foreground': 'rgb(var(--color-secondary-foreground))',
        // ... outras cores
      },
    },
  },
}
```

### Consistência
Força geração de classes customizadas mesmo que não sejam detectadas no content:

```javascript
safelist: [
  'bg-primary',
  'text-primary-foreground',
  'bg-secondary',
  'text-secondary-foreground',
  // ... todas as classes customizadas
],
```

## Implementação nos Apps
### 1. Dependência
```json
// package.json
{
  "dependencies": {
    "@repo/tailwind-config": "workspace:*"
  }
}
```

### 2. Tailwind Config Compartilhada
```javascript
// tailwind.config.js
const { tailwindConfig } = require('@repo/tailwind-config');

module.exports = {
  ...tailwindConfig,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // ... outros paths
  ],
}
```

### 3. PostCSS Config Compartilhada
```javascript
// postcss.config.js
const { postcssConfig } = require('@repo/tailwind-config');

module.exports = postcssConfig;
```

### 4. Global Styles Compartilhado
```typescript
// pages/_app.tsx
import '@repo/tailwind-config/globals.css'

const App: AppComponent = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)
```

## Classes Semânticas

### Paleta Slate
- **Primary**: slate-800/slate-50 (alto contraste)
- **Secondary**: slate-50/slate-600 (médio contraste)
- **Tertiary**: slate-600/slate-50 (médio contraste)
- **Muted**: slate-100/slate-500 (baixo contraste)

### Uso
```jsx
<div className="bg-primary text-primary-foreground p-4">
  Conteúdo com alto contraste
</div>

<div className="bg-secondary text-secondary-foreground p-4">
  Conteúdo secundário
</div>

<div className="bg-muted text-muted-foreground p-4">
  Conteúdo sutil
</div>
```

## Injeção SSR (Whitelabel)

### getServerSideProps
```typescript
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const tenantId = req.cookies.tenant_id;
  const tenant = await getTenantConfig(tenantId);

  const cssVariables = `
<style>
:root {
  --color-primary: ${tenant.primaryColor};
  --color-primary-foreground: ${tenant.primaryForegroundColor};
  --color-secondary: ${tenant.secondaryColor};
  --color-secondary-foreground: ${tenant.secondaryForegroundColor};
}
</style>`;

  return { props: { cssVariables } }
}
```

## Performance
### Build Time
- CSS variables não afetam build time
- Classes geradas uma única vez
- Hot reload funciona normalmente

## Boas Práticas
### Novos MFEs
1. Adicione dependência `@repo/tailwind-config`
2. Configure tailwind.config.js extendendo config base
3. Importe globals.css em _app.tsx
4. Use classes semânticas padrão

### Manutenção
1. Mantenha safelist atualizada
2. Documente cores customizadas
3. Teste contraste WCAG regularmente
4. Versione mudanças de tema

### Performance
1. Mínimo de CSS variables dinâmicas
2. Prefira classes estáticas sobre inline styles
3. Monitore tamanho do bundle CSS
