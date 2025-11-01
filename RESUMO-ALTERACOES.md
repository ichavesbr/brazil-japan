####  TASK 5 - O QUE FOI FEITO:


- criei uma rota app/partners e a view features/partners/PartnersListView, para exibir ao cliente informações dos nomes das empresas cadastradas. Link foi inserido no Footer como "Empresas Parceiras":
  - lib/publicData.ts - o serviço getCompanies em publicData.ts extrai de Company apenas informações públicas de cada empresa existente;
  - partners/usePartners.ts obtém os dados públicos de Company para uso na view de PartnersListView;

- Transferi os componentes Header e Footer inserindo-os no layout. Header e children dentro de AuthProvider. Obs: para corrigir um problema do Footer sobrepondo o conteúdo da página indevidamente, inseri um elemento <main classname="pb-32"> envolvendo children;

- Alterei o Header para receber os links de forma dinâmica por meio de /constants/productsCategories.ts, para facilitar o controle dos respectivos slugs (terminações das urls);

- Criei /products/types/client.types.ts para configurar o AuthContext.tsx
- Criei /context/AuthContext.tsx para teste do login/logout;

- alterei opções no menu: atualizei mensagem do menu de acordo com a situação de login, e visibilidade de opções:
  - produtos e mensagem de "olá, faça seu login" (deslogado)
  - meu perfil, meus pedidos, produtos, mensagem de "olá, usuário" (logado)

- inseri o link da home no título do Header (nome da empresa);
- Home carrega lista de produtoS, separada por "destaques", "promoções", "favoritos" e "todos os produtos";

- configurei temporariamente o next.config.mjs para aceitar imagem do domínio placehold.com, para testar o tamanho de imagem dos cards de produtos;

- Deixei os métodos services em uma const apenas por questões visuais bater o olho e ver que é um service;

PRODUCTS

- Criadas as rotas:
  - /products/category[category]/page.tsx   (para exibição de lista por categoria);
  - /products/[id]/edit/page.tsx   (para edição de produtos, apenas para teste, pois o cliente não precisa ter acesso a esta funcionalidade);
  - /products/create/page.tsx     (para criação de produto, apenas para testar, pois o cliente não precisa ter acesso a esta funcionalidade);
  - /products/list/page.tsx     (para exibição de todos os produtos);

- Criada a feature /products com:
  - /components/ProductCard.tsx 
  - /components/ProductForm.tsx     (para uso na criação e edição de produtos),
  - /constants/productsCategories.ts     (para associar nome da tag com o slug apropriado. Estes serão usados para o nome da sessão correspondente e para a rota, permitindo um controle mais fácil e correto);
  - /hooks/useProducts.ts     (para o gerenciamento de produtos);
  - /services/products.services.ts     (para acesso aos dados armazenados em localStorage);
  - /views/ProductCreatView.tsx     (conteúdo da página de criação de produto);
  - /views/ProductDetailView.tsx     (conteúdo de exibição de detalhes de produto selecionado);
  - /views/ProductEditView.tsx     (conteudo de página de edição de produto);
  - /views/ProductsListView.tsx     (conteúdo de página de exibição de produtos);


ORDERS

- Criados:
  /app/orders/[id]/page.tsx     (sem conteúdo);
  /app/orders/create/page.tsx     (sem conteúdo);
  /app/orders/list/page.tsx     (sem implementação);

- Criada a pasta feature/Orders com:
  - /views/OrdersListView.tsx     (sem implementação);

CLIENT

- Criados:
  -app/client/create/page.tsx     (sem conteúdo);
  - app/edit/page.tsx     (sem conteúdo);
  - app/client/page.tsx    (sem implementação);