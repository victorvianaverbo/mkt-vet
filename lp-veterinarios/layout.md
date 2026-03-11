# Especificação de Layout Escandinavo/Clínico - Marketing Veterinário (Alta Conversão)

Esta é a bíblia de desenvolvimento para a Landing Page de Clínicas Veterinárias. O objetivo absoluto desta página é captar leads interessados no serviço de criação/gestão de tráfego e sites de alta performance. 

O sentimento geral que o design deve passar é: **Acolhimento Premium, Clean, Confiança Clínica e Resultados Diretos.** O design já foi validado pela demonstração do Hero. Use rigor máximo nestas especificações para evitar desvios no `/desenvolver`.

## Constantes Globais de Design System

### Paleta de Cores Exatas
- **Fundo Principal (Branco/Gelo Clean):** `#FFFFFF` (Garante respiração no design assimetrico)
- **Fundo Secundário (Off-White/Surface):** `#F8F9FA` (Usado em blocos narrativos/features para contraste macio)
- **Verde Primario (Teal Clínica/Confiável):** `#115E59` (Cor de âncora para títulos e botões principais)
- **Verde Primário Claro (Hover/Destaque):** `#14B8A6` (Cor secundária para pingos de atenção e pontilhados visuais)
- **Laranja/Âmbar (Acento Quente):** `#D97706` (Usado SOMENTE para quebrar o frio clínico, ideal para badges e callouts de atenção)
- **Texto Principal:** `#1E293B` (Slate escuro super limpo)
- **Texto Secundário (Parágrafos longos):** `#64748B`

### Tipografia Curada (Sempre usar em px/rem/clamp corretos)
- **Heading (Títulos):** `Playfair Display`, serif. (Para elegância). Peso: 400 a 700. Itálicos em destaques líricos.
- **Body (Textos/Botões):** `Source Sans 3`. Sans-serif hyper funcional para o mobile.

### Constraints Básicos de Spacing
- Asymmetric Padding predominante (Mais respiro nas laterais, cantos arredondados desiguais).
- Radius Global: Botões Full Round `100px`. Cards `16px`. Imagens `40px` com variações orgânicas. Cuidado para não deixar o site pontiagudo ou duro.

---

## Seção 1: Hero
A zona da "Demonstração Vencedora". 

### Arquétipo e Constraints
- **Arquétipo:** Grid Assimétrico (Divisão 1.1fr por 0.9fr favorecendo o texto e respiro em branco).
- **Constraints:**
  1. *[Tipografia]* Mixed Fonts (Playfair dramático + Source Sans ultra limpo).
  2. *[Mídia]* Imagem com Border Radius Orgânico Assimétrico (`border-top-right: 120px, border-bottom-left: 80px`).
  3. *[Efeitos]* Glassmorphism Flutuante (Card semi-transparente voando na frente da foto).
- **Justificativa:** É a "boas-vindas" mais moderna e acolhedora do que um site em caixa engessada. O grid assimétrico prende a atenção enquanto os contornos redondos acolhem o psicológico de nicho da saúde.

### Conteúdo
[Conferir arquivo copy.md para os dados textuais exatos].
- **Credibilidade Superior:** Mais de 13.000 tutores enviados ao WhatsApp de clínicas veterinárias. Custo médio por contato: R$1,17.
- **H1:** Pare de depender de indicações. Preencha a agenda da sua clínica veterinária todos os dias.
- **P:** Descubra como um site...
- **Botão:** Quero lotar minha clínica

### Layout
- Fundo `radial-gradient` sutil vindo da direita iluminando a seção. 
- Alinhamento Vertical Center entre as duas colunas do CSS Grid.
- GAP entre elas de `4rem`. Em mobile, caem para pilha em flex column invertido (imagem sobe).
- Card Glassmorphism em position Absolute na Imagem Base, bottom `-30px`, left `-40px`.
- Linha de Credibilidade Superior: Fonte menor (0.875rem), todo uppercase, espaçada (`letter-spacing: 1px`), cor Verde Primário Claro (`#14B8A6`), colocada *acima* do H1 de forma isolada, como um topo selo.

### Elementos Visuais e Interatividade
- Botão "Elevate" via Hover Lift `transform: translateY(-4px)` e aumento dramático de Box Shadow Verde.
- Pulse pontilhado em verde claro ao lado do micro-copy de segurança no botão CTA.
- Imagem com slowly pan zoom de entrada (Duração 10s no Transform Infinity Loop de .hover).

---

## Seção 2: O Problema (A Realidade)
A estória das "Salas vazias em terça-feira".

### Arquétipo e Constraints
- **Arquétipo:** Split Vertical (50/50 reverso). Imagem à esquerda, Módulo Crítico à direita.
- **Constraints:**
  1. *[Layout]* Negative Margin Overlap (O bloco de texto arrasta-se para cima da imagem roubando espaço negativo).
  2. *[Cor]* Fundo da Section inteira em `#F8F9FA` para separar logicamente do fundo Hero.
- **Justificativa:** Overlaping eleva a leitura do bloco central (onde o alerta crucial está), tirando-o de uma caixa plana. 

### Conteúdo
- "Você investiu anos estudando, mas a sala de espera continua vazia em alguns dias?" + Parágrafos Narrativos do arquivo `copy.md`. (Oponente buscando "veterinário de urgência perto de mim").

### Layout e Formatação Gráfica
- Lado esquerdo (Imagem): Wrapper de foto da clínica em tons acinzentados, sem ressalto, servindo apenas para situar o clima de melancolia do texto. `box-shadow` pra debaixo de 5%.
- Lado diretio (Conteúdo): Card enorme com o conteúdo textual, `margin-left: -100px` roubando o topo/lateral da imagem, `background-color: #FFFFFF`. Padding imenso `clamp(2rem, 5vw, 4rem)`.
- O Box de Alerta do oponente recebe formatação chamativa: `background: rgba(217,119,6,0.05)`, border esquerdo sólido no tom de Acento Âmbar (`#D97706`).

### Animacoes
- Um Fade-Left ou Reveal-Right lendo o bloco de texto para dentro da tela quando no Viewport 15% (intersection Observer native).

---

## Seção 3: A Virada de Chave (A Solução)
Para sair da melancolia do slide passado, entregamos a resposta estrutural do que vendemos.

### Arquétipo e Constraints
- **Arquétipo:** Bento Box Assimétrica Suave. Não é um grid quadriculado, são duas caixas fluídas com alturas diferentes para mostrar "Site + Anúncios" na coluna principal.
- **Constraints:**
  1. *[Tipografia]* Outline Text Huge Background: Cada placa do Bento leva no fundo um número ("01" ou "02") gigante (`font-size: 200px`), só o Outline (webkit-text-stroke de 1px), como Background tipográfico decorativo.
  2. *[Decorativo]* Ícone Glass (Os ícones ficam soltos flutuando nas caixas).
- **Justificativa:** É a forma mais tecnológica, clara e premium de desenhar "Features". Separa Sites e Ads de forma mastigável para os donos entenderem os dois lados do maquinário.

### Conteúdo Principal
- "O sistema que os grandes hospitais usam (e que agora está ao seu alcance)".
- Bento Direito Maior: Construímos um Site de Alta Conversão...
- Bento Esquerdo Inferior: Direcionamos as pessoas via Google Ads...

### Layout e Componentes
- Volta para Base `Branca` no Background da ROW e os grids do bento ganham Fundo cinza OffWhite `#F8F9FA`. 
- Box Shadow só aparece ao realizar `.hover` no box Bento inteiro, o card sobe `transform: scale(1.02)` e puxamos a Shadow Teal em `rgba(17,94,89, 0.1)`. Transição lenta elegante de `.5s`.

---

## Seção 4: Por que nós (Autoridade / Posicionamento) - NOVO!
Explicando a dedicação exclusiva ao nicho veterinário.

### Arquétipo e Constraints
- **Arquétipo:** Grid Tipográfico e Métricas em Bloco Solitário (Large Typography & Stat Grid). 
- **Constraints:**
  1. *[Tipografia]* Numerais Gigantes (`[+2 anos]`, `[+15 clínicas]`, `[+13.000 tutores]`, `[R$1,17]`) escritos em uma fonte mono ou serif em tamanho brutal, com cor Primary (`#115E59`).
  2. *[Layout]* Texto introdutório ocupando `max-width: 700px` e as estatísticas em um Grid CSS de 2x2.
- **Justificativa:** Sem imagens, apenas pura tipografia e números para fixar na cabeça do usuário que somos a agência número 1 (autoridade brutal que transmite a mensagem sem encher linguiça).

### Conteúdo
- Heading: Especialistas em clínicas veterinárias. Não em "marketing digital para tudo".
- Parágrafos de copy (Existem dezenas de agências... Nós fazemos uma coisa só...).
- 4 Estatísticas (+2 anos, +15 clínicas, +13.000 tutores, R$1,17 por contato).

### Layout
- Background da seção: Clean Off-White `#F8F9FA`. Fica em respiro total.
- Grade CSS 2x2 para as métricas, cada célula contendo o número dominante `font-size: 3rem` em `Playfair Display` e logo abaixo um body text super limpo, linha fina e cinza escuro. Borda esquerda fina (`1px solid var(--color-primary-light)`) em cada bloco métrico.

---

## Seção 5: Nossos Resultados (Cases de Sucesso)
Aqui é a quebra final, usamos Dados em vez de promessas. Os "Cases 1 e 2" reais descritos na Copy.

### Arquétipo e Constraints
- **Arquétipo:** Dark Mode Seccionado com Split Assimetrico Duplo e Dados Destacados. 
- **Constraints:**
  1. *[Cor]* Inversão total temática: Background profundo, `#062A27`. Textos brancos / opacidade cinza claro. A quebra chama 90% da atenção do usuário pra prova empírica.
  2. *[Media]* Gráficos enquadrados em Mockups Minimalistas (Safari/App header Frame) atrelados a um Intersection Observer `skewed`.
  3. *[Micro Interação]* As métricas de dados (282.330 tutores, R$3,67, etc.) em Badges flutuantes ou destaque `<strong>` fluorescente (`#14B8A6`).
- **Justificativa:** É a estação de trabalho de Big Data.

### Conteúdo
- Case 1 (Aceleração e Escala) com números exatos explícitos: 282.330 tutores, 5.010 cliques, R$3,67 de custo médio.
- Case 2 (Consistência Longo Prazo) com números: 255.093 tutores, 8.095 cliques, R$1,17 por contato.
- Imagens dos gráficos (`case-x-serie-temporal.png` e `case-x-palavras-chave.png`).

### Layout de Dashboards
- Subdivida esse bloco Negro em 2 grandes faixas verticais. O texto esquerdo detalha o Case e a mini-lista de métricas, e à direita os Mockups da tela.
- A Lista de números das métricas devem receber destaque: Fonte mono-espaçada na cor verde claro secundário, criando foco na credibilidade. 

---

## Seção 6: Plano / Pacote Customizado
Aceleramos no CTA com as DUAS rotas lógicas com "Só o Motor" e a "A Máquina Completa".

### Arquétipo e Constraints
- **Arquétipo:** Pricing Cards de Contraste Absoluto (O Plano Maior "Esmaga" visualmente o pacote menor).
- **Constraints:**
  1. *[Cor / Foco]* High Contrast Selector. O pacote Simples "Só o Motor" é uma caixa transparente com bordas `#E2E8F0` e detalhes em texto prateado. O Pacote "A Máquina Completa" é preenchido com Fundo Verde Primário (`#115E59`) iluminado, sombra de peso e botão de cor quente Acento (`#D97706`).
  2. *[Lista]* Lista de entregáveis com Checkmarks verdes exatos, muito limpos.
- **Justificativa:** Conduz sutilmente a intuição visual do médico para que o pacote Completo seja a única saída premium (diferença de 1.000 reais inicial vale o site inteiro).

### Conteúdo
[Consulte a copy para nomes "Só o Motor", "A Máquina Completa" e os Preços exatos (R$950/mês e R$1.950 no 1º mês -> R$950 a partir do 2º)]. Lembrete aos bullets do "Para quem é" e "O que entregamos".

### Layout
- Tabela de preços disposta lado-a-lado.
- Pacote Simples: Sem sombra, visual clean minimalista. 
- Pacote Completo (Rei): `transform: scale(1.05)` no card, badge laranja no topo: "Sugestão Premium/Destaque", preços com `font-size: 2.5rem` negritados em branco puro. 

---

## Seção 7: Quebras de objeção "FAQ"
Fechamento informacional hiper limpo.

### Arquétipo e Constraints
- **Arquétipo:** Masonry List Duas Colunas Open Expand. 
- **Constraints:**
  1. *[Funcional]* Todas as 3 perguntas abertas SEMPRE, sem acordeões. Mostre de uma vez em Colunas. Fontes de Peso misturado (H3 negrito clássico c/ P leve).

---

## Seção 8: Contato Botão Final
Checkmate final.

### Arquétipo e Constraints
- **Arquétipo:** Foco Isolado Minimalista (Isolation Minimal). 
- **Constraints:** 
  1. *[Layout]* Full Width Centralizado c/ Container Estreito `max-width: 600px` em Flex Column.
  2. *[Movimento]* Hover Reveal Pulse verde brutal nas margens do botão.
- Botão "Whatsapp" Gigante verde do próprio APP nativo `#25D366`.

---
### Observações de Assets & Deployment
Nenhuma tag `<img>` no index.html final deverá utilizar formatações de query nativa que quebre o Parse. As classes GSAP/ThreeJS estão proibidas para não pesar a conversão Mobile, manter o site na estrutura do InteractionObserver script leve. O `style.css` já baseou a fundação corretamente, atentar aos novos blocos numéricos.
