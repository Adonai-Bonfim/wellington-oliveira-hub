# Catálogo de arquivos do projeto

Este documento apresenta os arquivos versionados do projeto **Wellington Oliveira — Links Oficiais**. Pastas geradas automaticamente, como `node_modules/`, `.git/`, `.output/` e caches, não fazem parte do catálogo.

## Raiz do projeto

| Arquivo | Finalidade |
| --- | --- |
| `README.md` | Documentação principal, com visão geral, tecnologias, instalação, scripts e orientações de contribuição. |
| `ARQUIVOS.md` | Este catálogo da estrutura e da finalidade dos arquivos. |
| `package.json` | Metadados, scripts e dependências npm do projeto. |
| `package-lock.json` | Trava as versões exatas das dependências instaladas pelo npm. |
| `bun.lock` | Trava as versões das dependências para instalações feitas com Bun. |
| `bunfig.toml` | Configuração do ambiente e do gerenciador Bun. |
| `components.json` | Configuração dos componentes shadcn/ui e dos aliases de importação. |
| `eslint.config.js` | Regras de análise estática e padronização do código. |
| `tsconfig.json` | Configuração do TypeScript, compilação e aliases de caminhos. |
| `vite.config.ts` | Configuração do Vite, TanStack Start, React e Tailwind CSS. |

## Arquivos públicos

| Arquivo | Finalidade |
| --- | --- |
| `public/favicon.ico` | Ícone exibido pelo navegador para o site. |
| `public/robots.txt` | Orientações de rastreamento para mecanismos de busca. |

## Aplicação (`src/`)

| Arquivo | Finalidade |
| --- | --- |
| `src/router.tsx` | Cria o TanStack Router, seu contexto e o cliente do React Query. |
| `src/routeTree.gen.ts` | Árvore de rotas gerada automaticamente pelo TanStack Router; não deve ser editada manualmente. |
| `src/server.ts` | Entrada SSR do servidor e normalização de erros catastróficos. |
| `src/start.ts` | Configura os middlewares globais de erro e proteção CSRF. |
| `src/styles.css` | Estilos globais, tema, tokens visuais e integração com Tailwind CSS. |

## Rotas

| Arquivo | Finalidade |
| --- | --- |
| `src/routes/__root.tsx` | Layout raiz, metadados, estrutura HTML e limites globais de erro. |
| `src/routes/index.tsx` | Página inicial com hero, logomarca, cards e links oficiais. |
| `src/routes/README.md` | Documenta as convenções de roteamento baseado em arquivos. |

## Bibliotecas internas

| Arquivo | Finalidade |
| --- | --- |
| `src/lib/error-capture.ts` | Captura e disponibiliza erros usados pelo tratamento global. |
| `src/lib/error-page.ts` | Gera a página HTML exibida em falhas internas do servidor. |
| `src/lib/utils.ts` | Utilitários compartilhados, incluindo composição de classes CSS. |

## Hooks

| Arquivo | Finalidade |
| --- | --- |
| `src/hooks/use-mobile.tsx` | Hook responsivo para identificar visualizações em dispositivos móveis. |

## Imagens e identidade visual

| Arquivo | Finalidade |
| --- | --- |
| `src/assets/apoio.jpg` | Imagem do card ou conteúdo relacionado ao apoio à campanha. |
| `src/assets/autoescola.jpg` | Imagem relacionada à Autoescola Aliança. |
| `src/assets/hero-bg.jpg` | Plano de fundo alternativo do hero. |
| `src/assets/hero-institucional-bg.png` | Fundo institucional usado na identidade visual. |
| `src/assets/hero-wellington-completo.png` | Imagem completa exibida no hero principal. |
| `src/assets/logo-wellington-oliveira.png` | Logomarca oficial exibida na página e usada como ícone. |
| `src/assets/numero-40888.png` | Arte com o número eleitoral 40888. |
| `src/assets/pl.jpg` | Imagem do card relacionado ao projeto de lei. |
| `src/assets/profile.jpg` | Fotografia de perfil. |
| `src/assets/propostas.jpg` | Imagem do card de propostas. |
| `src/assets/wellington-capa.png` | Arte de capa de Wellington Oliveira. |

## Componentes de interface

Os arquivos abaixo são componentes React reutilizáveis localizados em `src/components/ui/`.

| Arquivo | Componente fornecido |
| --- | --- |
| `accordion.tsx` | Acordeão com seções expansíveis. |
| `alert.tsx` | Mensagem de alerta contextual. |
| `alert-dialog.tsx` | Diálogo modal para confirmações importantes. |
| `aspect-ratio.tsx` | Contêiner que preserva uma proporção visual. |
| `avatar.tsx` | Avatar com imagem e conteúdo alternativo. |
| `badge.tsx` | Selo compacto para estados ou categorias. |
| `breadcrumb.tsx` | Navegação hierárquica em trilha. |
| `button.tsx` | Botão com variantes visuais e tamanhos. |
| `calendar.tsx` | Calendário e seleção de datas. |
| `card.tsx` | Contêiner de conteúdo em formato de cartão. |
| `carousel.tsx` | Carrossel navegável de conteúdo. |
| `chart.tsx` | Estrutura e estilos para gráficos. |
| `checkbox.tsx` | Caixa de seleção. |
| `collapsible.tsx` | Região de conteúdo recolhível. |
| `command.tsx` | Menu pesquisável de comandos e opções. |
| `context-menu.tsx` | Menu contextual acionado pelo usuário. |
| `dialog.tsx` | Janela modal genérica. |
| `drawer.tsx` | Painel deslizante semelhante a uma gaveta. |
| `dropdown-menu.tsx` | Menu suspenso de ações. |
| `form.tsx` | Integração e elementos auxiliares para formulários. |
| `hover-card.tsx` | Cartão informativo mostrado ao passar o ponteiro. |
| `input.tsx` | Campo de entrada de texto. |
| `input-otp.tsx` | Entrada segmentada para códigos de uso único. |
| `label.tsx` | Rótulo acessível para campos. |
| `menubar.tsx` | Barra de menus. |
| `navigation-menu.tsx` | Menu principal de navegação. |
| `pagination.tsx` | Controles de paginação. |
| `popover.tsx` | Conteúdo flutuante ancorado a um elemento. |
| `progress.tsx` | Indicador de progresso. |
| `radio-group.tsx` | Grupo de opções exclusivas. |
| `resizable.tsx` | Painéis com dimensões ajustáveis. |
| `scroll-area.tsx` | Área de rolagem personalizada. |
| `select.tsx` | Campo de seleção de opções. |
| `separator.tsx` | Separador visual horizontal ou vertical. |
| `sheet.tsx` | Painel lateral sobreposto. |
| `sidebar.tsx` | Estrutura responsiva de barra lateral. |
| `skeleton.tsx` | Estado visual temporário de carregamento. |
| `slider.tsx` | Controle deslizante para valores. |
| `sonner.tsx` | Configuração de notificações temporárias. |
| `switch.tsx` | Interruptor para estados ligado/desligado. |
| `table.tsx` | Elementos estilizados para tabelas. |
| `tabs.tsx` | Conteúdo organizado em abas. |
| `textarea.tsx` | Campo de texto com múltiplas linhas. |
| `toggle.tsx` | Botão alternável. |
| `toggle-group.tsx` | Grupo de botões alternáveis. |
| `tooltip.tsx` | Dica contextual exibida ao foco ou ponteiro. |

## Observações de manutenção

- Não edite `src/routeTree.gen.ts` manualmente; ele é regenerado pelas ferramentas do TanStack Router.
- Mantenha `package-lock.json` ou `bun.lock` atualizado de acordo com o gerenciador de pacotes adotado pela equipe.
- Imagens em `src/assets/` passam pelo pipeline de build; arquivos em `public/` são servidos diretamente.
- Execute `npm run lint` e `npm run build` antes de publicar alterações.
