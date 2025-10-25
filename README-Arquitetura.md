# 🧭 Arquitetura Baseada em Features (Feature-Based)

Este projeto utiliza **Next.js com TypeScript** seguindo uma **arquitetura modular e escalável**, organizada por **funcionalidades (features)**.

O objetivo dessa estrutura é permitir **alta coesão**, **baixo acoplamento** e **facilidade de manutenção**, de modo que qualquer desenvolvedor (junior, pleno ou sênior) consiga localizar, entender e evoluir partes do sistema com segurança e clareza.

---

## 📂 Estrutura do Projeto

### Arquivos de Configuração (Raiz)

| Arquivo/Pasta        | Descrição                                                         |
| -------------------- | ----------------------------------------------------------------- |
| `components.json`    | Configuração do **shadcn/ui** (biblioteca de componentes UI)      |
| `eslint.config.mjs`  | Regras de **ESLint** para padronização e qualidade de código      |
| `next-env.d.ts`      | Tipagens automáticas do Next.js (gerado automaticamente)          |
| `next.config.mjs`    | Configurações do framework **Next.js**                            |
| `package.json`       | Dependências e scripts do projeto                                 |
| `postcss.config.mjs` | Configuração do **PostCSS** (processador CSS usado pelo Tailwind) |
| `tsconfig.json`      | Configuração do **TypeScript** (tipos, paths, módulos)            |
| `public/`            | Arquivos estáticos públicos (imagens, ícones, SVGs)               |
| `src/`               | 📁 **Código-fonte principal** (ver detalhamento abaixo)           |

### Estrutura `src/` (Código-Fonte)

| Pasta         | Propósito                        | Responsabilidade                                                                             |
| ------------- | -------------------------------- | -------------------------------------------------------------------------------------------- |
| `app/`        | 🚪 **Rotas públicas**            | Define as rotas da aplicação (Next.js App Router). Cada `page.tsx` é uma rota acessível      |
| `components/` | 🎨 **UI compartilhada**          | Componentes genéricos reutilizáveis (buttons, inputs, cards, etc) da biblioteca shadcn/ui    |
| `features/`   | ⭐ **Módulos de funcionalidade** | Cada feature é um módulo **auto-contido** com seus próprios components, hooks, services, etc |
| `hooks/`      | 🪝 **Hooks globais**             | Hooks customizados reutilizáveis entre diferentes features (ex: `useMobile`, `useAuth`)      |
| `lib/`        | 🔧 **Utilitários globais**       | Funções auxiliares genéricas (helpers, formatadores, validadores)                            |

### Visão Geral da Árvore

```
📦 projeto/
├── 📄 components.json           # Config shadcn/ui
├── 📄 eslint.config.mjs         # Regras de lint
├── 📄 next.config.mjs           # Config Next.js
├── 📄 postcss.config.mjs        # Config PostCSS
├── 📄 tsconfig.json             # Config TypeScript
├── 📄 package.json              # Dependências
│
├── 📁 public/                   # Arquivos estáticos
│   ├── file.svg
│   ├── globe.svg
│   └── ...
│
└── 📁 src/                      # Código-fonte
    ├── 📁 app/                  # Rotas Next.js
    ├── 📁 components/           # UI compartilhada (shadcn/ui)
    ├── 📁 features/             # Módulos auto-contidos
    ├── 📁 hooks/                # Hooks globais
    └── 📁 lib/                  # Utilitários globais
```

### 🗂️ Detalhamento de `src/` (Código-Fonte)

#### 🚪 **app/** - Rotas Públicas (Next.js App Router)

Define as URLs acessíveis da aplicação. Cada `page.tsx` vira uma rota.

```

app/
├── layout.tsx               # Layout raiz (envolve todas as páginas)
├── page.tsx                 # Página inicial: /
├── globals.css              # Estilos globais (Tailwind CSS)
└── company/                 # Rotas /company/*
    ├── list/
    │   └── page.tsx         # Rota: /company/list
    ├── create/
    │   └── page.tsx         # Rota: /company/create
    └── [id]/
        └── edit/
            └── page.tsx     # Rota: /company/[id]/edit
```

**⚠️ Importante:** Estes arquivos são **proxies** que apenas importam views de `features/`.

```tsx
// ✅ Exemplo de proxy
// app/company/list/page.tsx
import { CompanyListView } from "@/features/company/views/CompanyListView";

/**
 * Rota para /company/list
 * Responsabilidade: Apenas carregar e renderizar a View correspondente.
 */
export default function CompanyListPage() {
  return <CompanyListView />;
}
```

---

#### 🎨 **components/** - Componentes UI Compartilhados

Biblioteca de componentes genéricos reutilizáveis (shadcn/ui).

```
components/
└── ui/                      # 50+ componentes prontos
    ├── button.tsx           # Botões (variants, sizes, loading)
    ├── input.tsx            # Inputs com validação visual
    ├── card.tsx             # Cards com header/content/footer
    ├── form.tsx             # Forms com react-hook-form integrado
    ├── table.tsx            # Tabelas responsivas
    ├── dialog.tsx           # Modais/Diálogos
    ├── select.tsx           # Dropdowns customizáveis
    └── ...                  # Badge, Skeleton, Toast, etc
```

**Características:**

- ✅ Estilizados com Tailwind CSS
- ✅ Totalmente acessíveis (ARIA, keyboard navigation)
- ✅ TypeScript com tipos completos
- ✅ Variants via `class-variance-authority`

---

#### ⭐ **features/** - Módulos Auto-Contidos (CORAÇÃO DO PROJETO)

Cada feature é **independente** e contém **tudo** relacionado a uma funcionalidade.

```
features/
└── company/                 # 📌 Feature de referência (USE COMO TEMPLATE)
    │
    ├── components/          # Componentes visuais específicos
    │   ├── CompanyForm.tsx  # Formulário create/edit
    │   └── CompanyList.tsx  # Tabela com ações (edit, delete)
    │
    ├── constants/           # Valores fixos e enumerações
    │   └── status.ts        # COMPANY_STATUS, labels, cores
    │
    ├── hooks/               # Lógica de estado React
    │   └── useCompany.ts    # Hook principal (CRUD + state management)
    │
    ├── schemas/             # Validações com Zod
    │   └── company.schema.ts# Schema + tipos TypeScript inferidos
    │
    ├── services/            # Camada de acesso a dados
    │   └── company.service.ts # CRUD no localStorage
    │
    ├── utils/               # Funções auxiliares puras
    │   └── formatCompany.ts # Formatação CNPJ, telefone, datas
    │
    └── views/               # Views completas (páginas montadas)
        ├── CompanyListView.tsx   # Listagem com filtros
        ├── CompanyCreateView.tsx # Formulário de criação
        └── CompanyEditView.tsx   # Formulário de edição
```

**📋 Responsabilidade de Cada Camada:**

| Camada          | O que FAZ                          | O que NÃO faz                                     |
| --------------- | ---------------------------------- | ------------------------------------------------- |
| **views/**      | Orquestra UI, usa hooks, navegação | ❌ Lógica de negócio, acesso direto a dados       |
| **components/** | Renderiza UI, emite eventos        | ❌ Chamadas a API, gerenciamento de estado global |
| **hooks/**      | Estado React, side effects         | ❌ Renderização JSX, lógica de UI                 |
| **services/**   | CRUD, acesso localStorage/API      | ❌ Estado React, UI                               |
| **schemas/**    | Validação runtime (Zod)            | ❌ Lógica de negócio                              |
| **utils/**      | Funções puras auxiliares           | ❌ Side effects, estado                           |
| **constants/**  | Valores fixos, enums               | ❌ Lógica executável                              |

---

#### 🪝 **hooks/** - Hooks Globais Reutilizáveis

Hooks customizados compartilhados entre features.

```
hooks/
└── use-mobile.ts            # Detecta se é dispositivo móvel
```

**Quando criar um hook global:**

- ✅ Usado por 3+ features diferentes
- ✅ Lógica genérica (não específica de domínio)
- ✅ Exemplos: `useAuth`, `useTheme`, `useDebounce`, `useLocalStorage`

---

#### 🔧 **lib/** - Utilitários Globais

Funções puras auxiliares sem dependência de React.

```
lib/
└── utils.ts                 # Helpers: cn(), formatDate(), etc
```

**Características:**

- ✅ Funções puras (mesma entrada = mesma saída)
- ✅ Sem side effects
- ✅ Facilmente testáveis
- ✅ Sem dependências de React/Next.js

---

## 💡 Conceitos Fundamentais

### 1. **Features Auto-Contidas**

Uma **feature** é um módulo independente que contém **tudo** relacionado a uma funcionalidade específica.

**Princípio:** Se você apagar a pasta `features/company`, tudo relacionado a empresas deve desaparecer do sistema.

### 2. **Separação de Responsabilidades**

Cada camada tem uma responsabilidade específica:

| Camada          | Responsabilidade                  | Exemplo                                          |
| --------------- | --------------------------------- | ------------------------------------------------ |
| **views/**      | Composição de UI, orquestração    | `CompanyListView` monta a página com componentes |
| **components/** | Renderização visual, apresentação | `CompanyForm` exibe o formulário                 |
| **hooks/**      | Lógica de estado e side effects   | `useCompany` gerencia estado e ações             |
| **services/**   | Acesso a dados (API/localStorage) | `company.service.ts` salva/busca dados           |
| **schemas/**    | Validação de dados                | `company.schema.ts` valida inputs                |
| **utils/**      | Funções puras auxiliares          | `formatCompany` formata CNPJ                     |
| **constants/**  | Valores fixos, enums              | `COMPANY_STATUS` define estados                  |

### 3. **Fluxo de Dados Unidirecional**

```
┌─────────────────────────────────────────────────────┐
│                    USER ACTION                       │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│              View (CompanyListView)                  │
│  - Orquestra componentes                             │
│  - Não tem lógica de negócio                         │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│           Component (CompanyList)                    │
│  - Renderiza UI                                      │
│  - Emite eventos (onClick, onSubmit)                 │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│              Hook (useCompany)                       │
│  - Gerencia estado                                   │
│  - Chama services                                    │
│  - Trata erros                                       │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│           Service (company.service)                  │
│  - Acessa localStorage                               │
│  - Parse/Stringify JSON                              │
│  - Try/Catch                                         │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────┐
│               LOCALSTORAGE                           │
└─────────────────────────────────────────────────────┘
```

### 4. **Padrão Proxy nas Rotas**

As rotas em `app/company/...` são **proxies** que apenas importam as views da feature:

```tsx
// ❌ NÃO faça assim (lógica na rota):
// app/company/list/page.tsx
export default function CompanyListPage() {
  const [companies, setCompanies] = useState([]);
  // ... lógica aqui
}

// ✅ Faça assim (proxy):
// app/company/list/page.tsx
import { CompanyListView } from "@/features/company/views/CompanyListView";
export default CompanyListView;
```

**Por quê?**

- ✅ Toda lógica fica na feature (portabilidade)
- ✅ Feature pode ser movida/reutilizada facilmente
- ✅ Testes ficam na feature, não nas rotas

---

## 🏢 Feature Company (Exemplo de Referência)

A feature **Company** serve como **template de referência** para todas as outras features. Copie sua estrutura ao criar novas funcionalidades.

### Estrutura da Feature Company

```
src/features/company/
├── components/              # Componentes visuais
│   ├── CompanyForm.tsx      # Formulário (create/edit)
│   └── CompanyList.tsx      # Lista com tabela
├── constants/               # Valores fixos
│   └── status.ts            # Status, labels, cores
├── hooks/                   # Lógica de estado
│   └── useCompany.ts        # Hook principal
├── schemas/                 # Validações
│   └── company.schema.ts    # Zod schema
├── services/                # Persistência
│   └── company.service.ts   # CRUD localStorage
├── utils/                   # Helpers
│   └── formatCompany.ts     # Formatação
└── views/                   # Views completas
    ├── CompanyListView.tsx  # Página de listagem
    ├── CompanyCreateView.tsx# Página de criação
    └── CompanyEditView.tsx  # Página de edição
```
