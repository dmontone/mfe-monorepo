# Mock Server para Desenvolvimento Local

Este diretório contém os arquivos de mock para simular o ambiente de desenvolvimento da arquitetura de microfrontends.

## Arquivos

- `api-server.js` - Servidor Express que simula a API de configuração
- `remote-manifest.json` - Manifesto de microfrontends para Module Federation
- `tenant-config.json` - Configuração de tenant com tema, i18n e features

## Como usar

1. Instale as dependências:
```bash
cd mocks
npm install
```

2. Inicie o servidor mock:
```bash
npm start
```

O servidor rodará em `http://localhost:3002` e servirá:
- `/api/config` - Configurações do tenant baseadas no header `x-tenant-id`

## Endpoints

### GET /api/config
Retorna a configuração do tenant baseada no header `x-tenant-id`.

**Headers:**
- `x-tenant-id` (opcional): ID do tenant (padrão: "dev-tenant-001")

**Response:** JSON com configuração completa do tenant incluindo tema, i18n e features.
