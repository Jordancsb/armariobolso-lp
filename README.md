# Appy Landing Page

Uma landing page moderna e responsiva construída com Next.js 14, React 18 e Tailwind CSS.

## 🚀 Características

- ⚡ Next.js 14 com App Router
- 💎 TypeScript para type safety
- 🎨 Tailwind CSS para estilização
- 📱 Design totalmente responsivo
- 🎭 Animações suaves e interativas
- ♿ Acessível e otimizado para SEO
- 🎯 Componentes reutilizáveis

## 📦 Instalação

1. **Instale as dependências:**

```bash
npm install
```

2. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

3. **Abra seu navegador:**

Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
landingPage/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/
│   ├── Header.tsx            # Cabeçalho com navegação
│   ├── Hero.tsx              # Seção hero
│   ├── Features.tsx          # Cards de features
│   ├── EssentialTools.tsx    # Seção de ferramentas
│   ├── FocusMatters.tsx      # Seção de foco
│   ├── SuccessStories.tsx    # Depoimentos
│   ├── FAQ.tsx               # Perguntas frequentes
│   ├── CTA.tsx               # Call to action
│   └── Footer.tsx            # Rodapé
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Seções da Landing Page

1. **Header**: Navegação fixa com menu responsivo
2. **Hero**: Seção principal com título impactante e CTA
3. **Features**: 3 cards destacando funcionalidades principais
4. **Essential Tools**: Apresentação de ferramentas com mockup
5. **Focus on What Matters**: Seção alternativa com conteúdo
6. **Success Stories**: Carrossel de depoimentos de clientes
7. **FAQ**: Accordion com perguntas frequentes
8. **CTA Final**: Call to action com mockup
9. **Footer**: Links e informações de contato

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🎯 Tecnologias Utilizadas

- **Next.js 14**: Framework React para produção
- **React 18**: Biblioteca JavaScript para UI
- **TypeScript**: Superset JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS utility-first
- **Lucide React**: Ícones modernos e customizáveis

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Importe o projeto no [Vercel](https://vercel.com)
3. Deploy automático!

### Outras plataformas

```bash
npm run build
npm start
```

## 📝 Personalização

### Cores

Edite o arquivo `tailwind.config.js` para customizar as cores:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        dark: '#1d4ed8',
      },
    },
  },
}
```

### Conteúdo

Edite os componentes em `components/` para modificar textos, imagens e funcionalidades.

## 📄 Licença

Este projeto foi criado para fins de demonstração.

## 🤝 Contribuindo

Sinta-se livre para contribuir com melhorias!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

Desenvolvido com ❤️ usando Next.js

