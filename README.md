# --------- Ignite Shop

Uma aplicação de e-commerce moderna desenvolvida durante o bootcamp Ignite da Rocketseat, focada em performance e experiência do usuário, integrada com a API de pagamentos do Stripe.

### --------- Tecnologias

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

- Framework: Next.js 15 (App Router)
- Linguagem: TypeScript
- Estilização: Stitches & Tailwind CSS
- Pagamentos: Stripe SDK
- Componentes: Radix UI (Dialog)
- Carrossel: Keen-Slider
- Ícones: Phosphor React
- Cliente HTTP: Axios

### --------- Configuração do Ambiente

Por segurança, as chaves do Stripe não são enviadas ao repositório. Para rodar o projeto, você precisa configurar o ambiente local:

1.  Crie um arquivo chamado **`.env.local`** na raiz do projeto.
2.  Preencha com as suas credenciais conforme o modelo abaixo:

```env
# APP
NEXT_URL=http://localhost:3000

# STRIPE
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

```

### --------- Como executar
1️⃣ Instale as dependências

```bash
  npm install
```

2️⃣ Execute o servidor de desenvolvimento
   
```bash
  npm run dev
```

3️⃣ Acesse no navegador

```bash
   http://localhost:3000
```

### --------- Estrutura do Projeto

```bash

04-ignite-shop/
│
├── .next/
├── node_modules/
│
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts
│   │
│   ├── assets/
│   │   ├── logo.svg 
│   │
│   ├── components/
│   │   ├── CartModal.tsx
│   │   └── Header.tsx
│   │
│   ├── context/
│   │    └── CartContext.tsx
│   │ 
│   ├── lib/
│   │   └── stripe.ts
│   │ 
│   ├── product/
│   │   └── [id]/
│   │       ├── page.tsx
│   │       ├── loading.tsx
│   │       └── BuyButton.tsx
│   │
│   ├── styles/
│   │   ├── components/
│   │   │   └── CartModal.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── home.ts
│   │   │   ├── layout.ts
│   │   │   ├── product.ts
│   │   │   └── success.ts
│   │   ├── global.ts
│   │   └── index.ts
│   │
│   ├── success/
│   │   └── page.tsx
│   │
│   ├── HomeClient.tsx
│   ├── layout.tsx
│   └── page.tsx
│ 
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json   
├── package.json   
├── postcss.config.mjs
├── tsconfig.json             

```




