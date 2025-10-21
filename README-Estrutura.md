# 🏢 Feature: Company

Este projeto implementa uma SPA modular (Single Page Application) no Next.js (App Router), organizada com o padrão **Feature-Based Architecture**.
A feature **company** é responsável por cadastrar, listar e editar empresas utilizando LocalStorage como persistência local.

Este README explica com detalhes a **organização do código**, responsabilidades de cada pasta/arquivo, convenções e instruções para executar e testar localmente. Sirva como base e exemplo na criação de outras Features.

---

## 📂 Visão Geral da Estrutura

```
.
├── app/                           # Define as rotas públicas da aplicação (Next.js App Router). Cada página importa o conteúdo da feature correspondente.
│   ├── company/
│   │   ├── [id]/edit/page.jsx     # proxy => importa src/features/company/pages/edit.jsx
│   │   ├── create/page.jsx        # proxy => importa src/features/company/pages/create.jsx
│   │   └── list/page.jsx          # proxy => importa src/features/company/pages/list.jsx
│   ├── layout.js
│   ├── globals.css
│   └── page.js
├── src/
│   └── features/
│       └── company/                       # Implementa toda a lógica, interface e regras da feature “Company”.
│           ├── components/                # Componentes visuais reutilizáveis da feature (Form, List, Container).
│           │   ├── CompanyContainer.jsx   # SPA container: controla views (list/create/edit)
│           │   ├── CompanyForm.jsx
│           │   └── CompanyList.jsx
│           ├── constants/                 # Valores fixos e chaves padronizadas, como status e storage keys.
│           │   ├── companyStatus.js
│           │   ├── defaultValues.js
│           │   └── storageKeys.js
│           ├── hooks/                     # Hooks personalizados que centralizam a lógica de negócio (useCompany).
│           │   └── useCompany.js          # hook central que expõe CRUD e state
│           ├── model/                     # Modelos de dados que representam a entidade (CompanyModel).
│           │   └── CompanyModel.js
│           ├── pages/                     # Páginas de alto nível que conectam o container aos componentes.
│           │   ├── list.jsx               # view que exporta CompanyContainer(defaultView='list')
│           │   ├── create.jsx             # view que exporta CompanyContainer(defaultView='create')
│           │   └── edit.jsx               # view que exporta CompanyContainer(defaultView='edit', companyId)
│           ├── services/                  # Camada responsável por salvar e ler dados do LocalStorage.
│           │   └── companyStorage.js      # camada de persistência (localStorage)
│           └── utils/                     # Funções utilitárias, como formatadores e normalizadores de dados.
│               └── formatCompany.js
```

> **Nota:** arquivos dentro de `src/features/.../pages` não são rotas do Next.js automaticamente. Os arquivos em `app/company/.../page.jsx` funcionam como _proxies_ — eles importam e re-exportam as views que residem na pasta da feature. Isso preserva a organização por feature sem perder compatibilidade com o App Router.

---

## 🧭 Organização e a explicação detalhada

Abaixo explico a responsabilidade, regras e convenções adotadas em cada pasta/arquivo da feature `company`.

### `app/` (App Router)

- Guarda as rotas reais reconhecidas pelo Next.js (cada `page.jsx` aqui é uma rota).
- Usamos arquivos _proxy_ em `app/company/.../page.jsx` que **importam** e re-exportam as views localizadas em `src/features/company/pages/*.jsx`.
- Exemplo de proxy (app/company/list/page.jsx):

```jsx
"use client";
import CompanyListPage from "../../../src/features/company/pages/list";
export default CompanyListPage;
```

### `src/features/company/pages/` (Views da feature)

- Contém as _views_ específicas da feature (list, create, edit).
- Cada arquivo exporta um componente React que geralmente é uma simples invocação do `CompanyContainer` com `defaultView` apropriado.
- Permite manter todo o código da feature agrupado e portátil.

### `src/features/company/components/` (UI & Container)

- **CompanyContainer.jsx**: Componente central (SPA container). Ele decide que subview mostrar com base em `defaultView` e/ou `companyId`. Não deve conter lógica de persistência — apenas coordenação de UI e chamadas aos hooks.
- **CompanyList.jsx**: Responsável por exibir a lista de empresas.
- **CompanyForm.jsx**: Formulário de criação/edição.

**Regra prática:** Componentes que usam estado React local ou hooks (useState/useEffect) precisam ter `"use client";` no topo do arquivo. Server Components devem ficar sem essa diretiva.

### `src/features/company/hooks/useCompany.js` (Hook central)

- Ponto único para o estado da feature: mantém a lista de empresas, fornece funções `getCompany(id)`, `saveCompany(company)`, `addCompany(company)`, `updateCompany(id, data)` e `deleteCompany(id)`.
- O hook usa os serviços (`companyStorage`) para persistência, e `formatCompany` para normalizar dados antes de atualizar o state.
- Deve ser escrito como hook "use" (começa com `use`) e exportar funções puras que manipulam o estado.

### `src/features/company/services/companyStorage.js` (Service)

- Camada que encapsula `localStorage` (ou futura API). Funções sugeridas:
  - `getCompanies()` → retorna array cru do storage
  - `saveCompany(company)` → cria ou atualiza
  - `deleteCompany(id)` → remove
  - `getCompanyById(id)` → retorna um item
- **Motivo:** Ao trocar storage para API real depois exige apenas alterar este arquivo — o restante do sistema usa o contrato do serviço.

### `src/features/company/utils/formatCompany.js` (Utils)

- Funções puras para formatar nomes, datas, status e mapear DTO ⇄ model.
- Nunca modifique o state aqui — apenas transforme dados recebidos e retorne o resultado.

### `src/features/company/constants/`

- Valores constantes usados pela feature: enums de status, chaves de localStorage, valores padrão do formulário.
- Convenção de nomes:
  - Enums: `PascalCase` (ex: `CompanyStatus.ACTIVE`)
  - Constantes: `UPPER_SNAKE_CASE` ou `camelCase` conforme o contexto

### `src/features/company/model/CompanyModel.js`

- Define a estrutura de um `Company`. Em JS usamos JSDoc; em TS, usar `interface`/`type`.
- Fornece função de factory `createCompanyModel(data)` para construir objetos com campos padrão (`id`, `createdAt`, etc.).

---

## 🛠️ Convenções e boas práticas (adotadas)

- **Feature-based**: tudo relacionado a um domínio fica em `src/features/<feature>`.
- **Client vs Server Components**: marque componentes interativos com `"use client";`. Mantenha lógica leve no Server Components quando possível.
- **Imports via aliases**: configure `jsconfig.json` ou `tsconfig.json` para usar `@/` → `src/`. Ex:

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": { "@/*": ["src/*"] }
    }
  }
  ```

- **Nomes e extensões**:
  - UI components: `.jsx`
  - Services / utils / hooks: `.js`
  - Pages (views): `.jsx`
- **Side effects controlados**: apenas os hooks e containers lidam com efeitos (useEffect). Services devem ser puros (retornam valores / Promises).
- **Testabilidade**: funções em `utils/` e `services/` são puras para facilitar testes unitários.
- **Implementar API futuramente**: Ao migrar localStorage → API, altere apenas `services/companyStorage.js` e, se necessário, adicione adaptadores.

---

# Acessar: http://localhost:3000/company/list

```

1. Fluxo básico de verificação:
- Criar empresa na rota `/company/create`
- Verificar listagem em `/company/list`
- Editar via `/company/{id}/edit`

2. Debug:
- Console do browser para erros de import ou runtime
- Verificar se proxies em `app/company/.../page.jsx` foram implementados com `use client`

---

## 🔀 Evoluções sugeridas (próximos passos)

- Adicionar validation com `Zod`/`Yup` nos formulários.
- Converter para TypeScript para tipagem forte (`.tsx`, `types/`).
- Implementar Context/global store se várias features precisarem acessar empresas.

---

## ✅ Checklist de verificação antes de rodar

- [ ] `app/company/.../page.jsx` existe para cada rota (list, create, edit)
- [ ] Cada proxy tem `"use client"` e importa a view dentro de `src/features/.../pages`
- [ ] `CompanyContainer.jsx` está marcando `"use client"` e usa `useCompany`
- [ ] `useCompany.js` exporta as funções `getCompany`, `saveCompany`, `add`, `update`, `delete`
- [ ] `companyStorage.js` lida com JSON parse/stringify com try/catch
- [ ] `formatCompany.js` contém funções puras
- [ ] `jsconfig.json` ou `tsconfig.json` tem alias `@/` para `src/` (opcional, recomendado)
```
