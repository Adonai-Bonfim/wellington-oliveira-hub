# Wellington Oliveira — Links Oficiais

Landing page oficial de Wellington Oliveira, criada para reunir propostas, canais de apoio, trajetória profissional e atuação política em uma experiência rápida e otimizada para dispositivos
móveis.

O projeto apresenta uma interface moderna e responsiva, alinhada à identidade visual da campanha, com navegação direta para os principais conteúdos e canais oficiais.

## Funcionalidades

- Layout mobile-first, responsivo e limitado a uma coluna para facilitar a navegação.
- Hero institucional com identidade visual da campanha.
- Cards com acesso aos principais conteúdos:
  - propostas e plano de governo;
  - página de apoio à campanha;
  - perfil da Autoescola Aliança;
  - tramitação do PL 1452/2025 na Câmara dos Deputados.
- Links externos abertos com segurança em uma nova aba.
- Metadados para mecanismos de busca e compartilhamento em redes sociais.
- Renderização no servidor com TanStack Start.
- Tratamento global de erros no cliente e no servidor.
- Proteção CSRF para funções executadas no servidor.
- Acessibilidade com foco visível, textos alternativos e respeito à preferência de      redução de movimento.

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)
- [Nitro](https://nitro.build/)

## Estrutura do projeto

```text
.
├── public/                    # Arquivos públicos
├── src/
│   ├── assets/                # Imagens e elementos visuais
│   ├── components/ui/         # Componentes reutilizáveis de interface
│   ├── hooks/                 # Hooks personalizados
│   ├── lib/                   # Utilitários e tratamento de erros
│   ├── routes/
│   │   ├── __root.tsx         # Layout raiz, metadados e error boundaries
│   │   └── index.tsx          # Página principal
│   ├── router.tsx             # Configuração do roteador
│   ├── server.ts              # Entrada SSR e tratamento de erros do servidor
│   ├── start.ts               # Middlewares da aplicação
│   └── styles.css             # Tema, tokens e estilos globais
├── package.json
├── tsconfig.json
└── vite.config.ts
```

> `src/routeTree.gen.ts` é gerado automaticamente pelo TanStack Router e não deve ser editado
> manualmente.

## Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm

### Instalação

```bash
git clone <URL_DO_REPOSITORIO>
cd wellington-oliveira-hub
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O terminal exibirá o endereço local da aplicação, normalmente `http://localhost:3000`.

## Scripts disponíveis

| Comando             | Descrição                                            |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Inicia o ambiente de desenvolvimento com Vite.       |
| `npm run build`     | Gera a versão otimizada para produção.               |
| `npm run build:dev` | Gera uma build utilizando o modo de desenvolvimento. |
| `npm run preview`   | Executa localmente a build de produção.              |
| `npm run lint`      | Verifica o código com ESLint.                        |
| `npm run format`    | Formata os arquivos com Prettier.                    |

## Build de produção

```bash
npm run build
npm run preview
```

Os artefatos de produção são gerados em `.output/`. A configuração atual utiliza Nitro com destino padrão para Cloudflare.

## Links integrados

- [Propostas de Wellington Oliveira](https://wellingtonoliveira.com.br/wellington)
- [Apoie Wellington Oliveira](https://queroapoiar.com.br/wellingtonoliveira)
- [Autoescola Aliança no Instagram](https://www.instagram.com/autoescolaaliancaonline)
- [PL 1452/2025 na Câmara dos Deputados](https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2494375)

## Qualidade e acessibilidade

Antes de publicar alterações, execute:

```bash
npm run lint
npm run build
```

Ao contribuir, preserve:

- contraste adequado entre texto e imagens;
- navegação por teclado e indicadores de foco;
- textos alternativos relevantes;
- experiência responsiva em telas pequenas;
- suporte a `prefers-reduced-motion`.

## Autor

Projeto desenvolvido para **Wellington Oliveira**.

---

© 2026 Wellington Oliveira. Todos os direitos reservados.
