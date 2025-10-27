# Brazil Japan - E-commerce Management System

Sistema de gerenciamento de e-commerce construído com Next.js 15, TypeScript, Tailwind CSS v4 e shadcn/ui.

## 👥 Membros da Equipe

- Igor Chaves Donega
- Jhonatan Serafim
- Carlos Machado
- Matheus Henrique
- Erika Massao
- Peres Julião

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/ichavesbr/brazil-japan.git
cd brazil-japan
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📜 Scripts Disponíveis

| Script                 | Descrição                                          |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento               |
| `npm run build`        | Cria build de produção                             |
| `npm start`            | Inicia o servidor de produção                      |
| `npm run lint`         | Executa ESLint                                     |
| `npm run lint:fix`     | Executa ESLint e corrige problemas automaticamente |
| `npm run format`       | Formata código com Prettier                        |
| `npm run format:check` | Verifica formatação sem modificar arquivos         |
| `npm run type-check`   | Valida tipos TypeScript sem gerar arquivos         |

## 🏗️ Estrutura do Projeto

```
brazil-japan/
├── src/
│   ├── app/                    # Rotas Next.js (App Router)
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── page.tsx            # Página inicial
│   │   ├── produtos/           # Rota /produtos
│   │   ├── clientes/           # Rota /clientes
│   │   ├── pedidos/            # Rota /pedidos
│   │   └── company/            # Rota /company
│   │
│   ├── components/
│   │   ├── layout/             # Header, Footer, Menu, Cart
│   │   └── ui/                 # Componentes shadcn/ui
│   │
│   ├── features/               # Módulos feature-based
│   │   └── company/            # Feature de empresas
│   │       ├── components/     # Componentes da feature
│   │       ├── constants/      # Constantes (status, etc)
│   │       ├── hooks/          # Hooks customizados
│   │       ├── schemas/        # Schemas Zod
│   │       ├── services/       # Lógica de negócio
│   │       ├── utils/          # Utilitários da feature
│   │       ├── views/          # Views (páginas montadas)
│   │       └── index.ts        # Barrel export
│   │
│   ├── hooks/                  # Hooks globais
│   │   ├── useLocalStorage.ts  # Hook para localStorage
│   │   └── use-mobile.ts       # Detector de mobile
│   │
│   └── lib/                    # Utilitários globais
│       ├── storage.ts          # Wrapper localStorage
│       └── utils.ts            # Função cn() e helpers
│
├── public/                     # Assets estáticos
├── .husky/                     # Git hooks
├── .prettierrc                 # Config Prettier
├── .editorconfig               # Config EditorConfig
├── tsconfig.json               # Config TypeScript
└── package.json                # Dependências e scripts
```

Documentação detalhada da arquitetura: [README-Arquitetura.md](./README-Arquitetura.md)

## 🎨 Stack Tecnológica

- **Framework**: Next.js 15.5.4 (App Router)
- **Linguagem**: TypeScript 5.9.3
- **Estilização**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui (estilo New York)
- **Ícones**: Lucide React
- **Validação**: Zod v4
- **Formulários**: React Hook Form
- **Gerenciamento de Estado**: React Hooks + localStorage

## 📝 Convenções de Código

### Commits (Conventional Commits)

```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

**Tipos:**

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `chore`: Tarefas de manutenção
- `docs`: Documentação
- `refactor`: Refatoração de código
- `style`: Formatação, ponto e vírgula, etc
- `test`: Adição/correção de testes

**Exemplos:**

```bash
feat(company): adiciona filtro por status
fix(storage): corrige erro ao salvar dados vazios
chore(deps): atualiza dependências
docs(readme): adiciona seção de contribuição
```

### Estrutura de Features

Cada feature segue o padrão **feature-based** com esta estrutura:

```
features/[nome-da-feature]/
├── components/       # Componentes React específicos
├── constants/        # Constantes e enums
├── hooks/            # Hooks customizados
├── schemas/          # Validação Zod + tipos TS
├── services/         # Lógica de negócio e persistência
├── utils/            # Funções auxiliares
├── views/            # Views completas (páginas)
└── index.ts          # Barrel export
```

### Imports

Use **path aliases** para imports limpos:

```typescript
// ✅ Correto
import { Button } from '@/components/ui/button'
import { CompanyListView } from '@/features/company'
import { storage } from '@/lib/storage'

// ❌ Evite
import { Button } from '../../components/ui/button'
import { CompanyListView } from '../features/company/views/CompanyListView'
```

### Estilização

Use o utilitário `cn()` para mesclar classes condicionalmente:

```typescript
import { cn } from '@/lib/utils'

<div className={cn(
  'base-class',
  isActive && 'active-class',
  className
)} />
```

## 🔧 Padrões de Qualidade

### Pre-commit Hooks

O projeto usa **Husky + lint-staged** para garantir qualidade:

- ESLint automático em arquivos `.ts`/`.tsx`
- Prettier automático em todos os arquivos
- Validação antes de cada commit

### Code Review

Ao abrir um PR, certifique-se de:

- [ ] Build passa sem erros (`npm run build`)
- [ ] Lint passa (`npm run lint`)
- [ ] Formatação está correta (`npm run format:check`)
- [ ] Tipos estão corretos (`npm run type-check`)
- [ ] Código auto-revisado
- [ ] Commit messages seguem Conventional Commits

## 📚 Documentação Adicional

- [Arquitetura do Projeto](./README-Arquitetura.md)

## 🤝 Contribuindo

1. Crie uma branch a partir de `main`:

   ```bash
   git checkout -b feature/sua-feature
   ```

2. Faça suas alterações seguindo as convenções

3. Commit suas mudanças:

   ```bash
   git commit -m "feat(scope): descrição"
   ```

4. Push para sua branch:

   ```bash
   git push origin feature/sua-feature
   ```

5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e pertence à equipe Brazil Japan.
