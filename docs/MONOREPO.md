# Operação do Monorepo: Guia de Configurações e Ferramentas

Este documento descreve como funciona o monorepo e as vantagens de uso do Turborepo.

## Turborepo

A gestão das dependências e o orquestramento de tarefas são feitos via Turborepo pela capacidade de resolver o grafo de dependências entre `apps` e `packages`.

### Vantagens de produtividade:
* Reaproveitamento de artefatos de build e resultados de testes para evitar execuções repetidas.
* Execução paralela de tarefas (`lint`, `build`, `test`)
* Capacidade filtrar apps para executar comandos com pouco esforço.

## Estrutura de Arquivos

```
challenge/
├── apps/
│   ├── shell/                  # Host Principal (Next.js Pages Router)
│   └── {{REMOTE}}/              # Microfrontend (Remote App)
├── packages/
│   ├── ui/                     # Design System (Tailwind + Storybook + Axe-core)
│   ├── eslint-config/          # Configuração ESLint global
│   ├── typescript-config/      # Configuração TypeScript global
│   └── utils/                  # Helpers, Adapters e lógica de i18n global
├── docs/                       # Documentação
└── turbo.json                  # Configuração do Turborepo
```

## Comandos úteis (CLI)

| Comando | Descrição |
| :--- | :--- |
| `npx turbo build` | Builda todas apps e packages do monorepo. |
| `npx turbo dev --filter=shell` | Inicia apenas o shell em modo desenvolvimento. |
| `npx turbo build --filter=payments...` | Builda o app de pagamentos e todas as suas dependências (ui, utils, etc). |
| `npx turbo lint --filter=[origin/main]` | Roda o lint apenas nos arquivos modificados desde a branch principal. |
| `npx turbo check-types` | Valida a tipagem estática de todo o projeto em paralelo. |

## 3. Variáveis de Ambiente e Cache

Para garantir que o cache do Turborepo seja confiável, o arquivo `turbo.json` está configurado para invalidar artefatos caso haja mudanças em variáveis críticas de ambiente, evitando que um build gerado para um ambiente (ex: Homolog) seja reaproveitado indevidamente em outro (ex: Produção).

**Variáveis rastreadas:**
* `REMOTE_MANIFEST_URL`: URL do Service Discovery de Microfrontends.
* `NEXT_PUBLIC_*`: Qualquer variável exposta ao navegador.
* `NODE_ENV`: Contexto de execução (development/production).

## 4. Governança e Padronização
O monorepo centraliza as regras de negócio e estilo para garantir consistência entre os times.

* **TypeScript:** Um arquivo global é disponibilizado em `packages/typescript-config` podendo ou não ser usado por apps externos via `extends`.
* **Lint:** Um arquivo global é disponibilizado em `packages/eslint-config` podendo ou não ser usado por apps externos via `extends`.
* **Design System:** Conteúdo em `packages/ui` servindo como codebase, porém o deploy deve ser feito à parte em um registro privado respeitando semantic versioning.
* **Utils:** Helpers compartilhados em `packages/utils` para adapters e lógica de i18n global.
* **Prefixos de Estilo:** Cada aplicação em `apps/` deve obrigatoriamente definir um `prefix` único no seu `tailwind.config.js` para garantir o isolamento de escopo CSS.

## 5. Service Discovery Local
Para o desenvolvimento local das funcionalidades federadas, o shell consome o manifesto de remotos definido via variável de ambiente. Isso permite que o desenvolvedor aponte o shell para remotos rodando localmente ou em ambientes de desenvolvimento remoto conforme a necessidade.