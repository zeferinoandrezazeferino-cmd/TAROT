# HANDOFF — Site Andreza Zeferino (Tarot)

Cole este arquivo inteiro na outra IA. É o spec completo do que já foi feito.

Data: 18/09/2026  
Pedido original: site profissional e moderno para divulgar o trabalho de uma amiga tarotista, com descrições e botão para WhatsApp.

---

## 1. Quem é

- Nome completo: **Andreza Zeferino dos Santos**
- Nome público / marca: **Andreza Zeferino**
- Primeiro nome nas mensagens: **Andreza**
- Cidade: **São Paulo**
- Ofício: leituras de tarot contemporâneo, presenciais e online
- Baralho: Rider–Waite, spreads clássicos
- Sem login, sem banco, sem cadastro. Landing de uma página.

### Ainda é PLACEHOLDER (trocar)

- WhatsApp: `5511912345678` (falso). Link: `https://wa.me/5511912345678?text=...`
- Foto do rosto no site: modelo gerada, **não é a Andreza**. Ela pediu still life de tarot no Instagram, sem pessoa.
- Preços das leituras: inventados.
- Depoimentos: fictícios. Trocar por reais.
- Instagram / e-mail: ainda não criados de fato neste handoff.
- Gmail sugerido: `andreza.zeferino.tarot@gmail.com` (se estiver livre)

---

## 2. Tom e visual (não mudar o espírito)

**Não é** místico genérico: sem roxo, sem galáxia, sem glitter, sem cristal empilhado, sem emoji.

**É** editorial, spa/revista, sóbrio, adulto.

Paleta (tokens):

| Token | Hex | Uso |
|---|---|---|
| background | `#0e0c0a` | fundo ink quente |
| surface / card | `#161310` | cards |
| foreground | `#f3eee6` | pergaminho |
| muted | `#a89f93` | texto secundário |
| subtle | `#6f675e` | meta |
| primary / accent | `#d8cfc3` | osso/champagne — botão e detalhe |
| primary-foreground | `#0e0c0a` | texto no botão |
| border | branco 12% | hairline |

Tipografia:

- Display / títulos: **Cormorant Garamond** (serif)
- Corpo / UI: **Outfit**
- Kickers em caixa alta, tracking largo, tamanho ~0.7rem

Motion: fade + translateY 12px + blur 4px, 500ms, stagger. Respeitar `prefers-reduced-motion`.

Ícones: Lucide, monocromáticos. Sem emoji.

CTA principal: botão sólido `primary` “Agendar no WhatsApp” com ícone ArrowUpRight. Abre `wa.me` em nova aba. No mobile, barra fixa no rodapé.

---

## 3. Estrutura da página (uma rota `/`)

1. Header sticky — logo lua + “Andreza Zeferino” + nav âncora + CTA WhatsApp (hamburger no mobile)
2. Hero — kicker `TAROT · SÃO PAULO` / H1 **“O que pede para ser visto.”** / lead / CTA + “Ver leituras” / bullets (presencial, online, resumo escrito) / grid de fotos
3. Faixa de 3 valores: Presença / Linguagem clara / Depois da mesa
4. `#leituras` — 4 cards
5. `#sobre`
6. `#caminho` — 3 passos + foto da mesa
7. Depoimentos (3)
8. `#faq` — accordion
9. Fecho + CTA
10. Footer + disclaimer legal

Marca gráfica: círculo + crescente (SVG), não ilustração desenhada.

---

## 4. Copy (usar como está, em pt-BR)

**Title SEO:** Andreza Zeferino — Tarot contemporâneo em São Paulo  
**Description:** Andreza Zeferino — leituras de tarot em São Paulo. Sessões presenciais e online com escuta, clareza e cuidado.

**Hero lead:**  
Leituras presenciais e online com Andreza. Um espaço de escuta, cartas na mesa e clareza para o próximo passo — sem teatro, sem pressa.

**Sobre:**  
Meu nome é Andreza Zeferino. Trabalho com tarot em sessões individuais: um espaço pequeno, uma mesa, atenção inteira. Procuro o que eu mesma procurava — uma leitura adulta, bem feita, que não promete milagre e não trata carta como sentença.

Uso o Rider–Waite e spreads clássicos. A sessão é conversa: você fala, eu escuto, as cartas abrem o que estava fora de foco. Sirvo quem está em transição — trabalho, vínculo, um ciclo que acabou e ainda não tem nome.

**Citação:**  
“Não leio o futuro como destino. Leio o presente com mais nitidez — e isso já muda o que vem depois.”

**Fecho:**  
Quando estiver pronta, a mesa está posta.  
Me escreva com o que trouxe você até aqui. Respondo em horário comercial, com calendário na mão — não com automação.

**Disclaimer:**  
A leitura de tarot é instrumento de reflexão. Não substitui acompanhamento terapêutico, médico, jurídico ou financeiro.

### Leituras

1. **Clareza** — 30 min — R$ 97  
   Três cartas para nomear o que está atravessando o momento.  
   Uma sessão curta e precisa. Ideal quando você precisa de um recorte honesto — um sim, um não, um próximo passo.

2. **Caminho** — 60 min — R$ 187  
   Leitura completa para decisões, transições e o que vem depois.  
   Espalho o mapa do assunto com calma: contexto, bloqueio, recurso e direção. A conversa dura o tempo de uma hora verdadeira.

3. **Vínculos** — 60 min — R$ 217  
   Relações afetivas, padrões que se repetem, o que ainda cabe.  
   Para quem está em um vínculo — ou saindo de um. Sem romance fácil: o que a dinâmica pede, o que você já sabe e o que ainda resiste.

4. **Ciclo** — 75 min — R$ 247  
   Uma leitura de temporada: o ano, o semestre, um capítulo novo.  
   Para marcar uma virada. Olhamos o arco, os temas que voltam e o que pede consistência — não só o que o futuro “reserva”.

Todas incluem conversa + tiragem + resumo escrito.  
Cada “Agendar” abre WhatsApp com mensagem pronta, ex.:  
`Olá, Andreza. Quero agendar a leitura Clareza (30 min / R$ 97).`

### Como funciona

1. Escolha a leitura  
2. Agende no WhatsApp  
3. Sessão, então o depois (resumo escrito)

### FAQ

- Como funciona a sessão? Conversamos primeiro sobre o que te trouxe. Em seguida abro as cartas no baralho Rider–Waite e lemos juntas, com pausa e pergunta. Não é monólogo, não é show. No fim, você recebe um resumo por escrito.
- É presencial ou online? Os dois. Online por videochamada, com as cartas visíveis o tempo todo. Presencial em São Paulo, com hora marcada. O valor é o mesmo.
- Preciso chegar com uma pergunta? Ajuda, mas não é obrigatório. Muita gente chega só com um aperto no peito. A gente afunila juntas no começo da sessão.
- Tarot substitui terapia ou decisão médica? Não.
- Como pago? Pix, após confirmarmos o horário. Reserva com pagamento. Remarcação com 24h, sem custo.
- Posso presentear alguém? Sim. Voucher digital, 90 dias para agendar.

---

## 5. Instagram

Bio do **perfil** (cabe em 150 caracteres — o Instagram não aceita 150 palavras):

```
Tarot contemporâneo · SP e online
O que pede para ser visto.
Agende no WhatsApp
```

Nome: Andreza Zeferino  
User sugerido: `andreza.zeferino.tarot`

Texto longo (destaque “Sobre” / primeiro post):

Meu nome é Andreza Zeferino. Trabalho com tarot em sessões individuais, presenciais em São Paulo e online.

Não leio o futuro como sentença. Leio o presente com mais nitidez: o que está atravessando o momento, o que se repete, o que pede um próximo passo honesto.

A sessão é conversa. Você fala, eu escuto, as cartas abrem o que estava fora de foco. Sem teatro, sem pressa, sem resposta pronta.

Atendo quem está em transição — trabalho, vínculo, um ciclo que acabou e ainda não tem nome. Todas as leituras incluem resumo escrito, para a clareza continuar no dia seguinte.

Para agendar, é só chamar no WhatsApp.

Fotos Instagram (still life, **sem pessoa**), na pasta `instagram/`:

- `perfil.jpg` — 1:1, carta da lua + vela (foto de perfil)
- `feed-baralho.jpg` — 1:1, baralho empilhado
- `feed-mesa.jpg` — 2:3, mesa com vela e cartas
- `feed-leque.jpg` — 2:3, cartas em leque

Agendamento: Meta Business Suite (conta profissional). Grok **não** conecta no Meta. Buffer foi tentado e não autenticou. Conteúdo se agenda manualmente no Meta: terça / quinta / sábado, ~12h ou 19h.

---

## 6. Stack do site atual (se for recriar o código)

- React 19 + TanStack Start/Router + Tailwind v4
- Sem auth, sem database
- Landing em `src/routes/index.tsx`
- Conteúdo centralizado em `src/lib/site.ts`
- Header: `src/components/site-header.tsx`
- CTA: `src/components/whatsapp-cta.tsx`
- Marca lua: `src/components/mark.tsx`
- UI: `src/components/ui/button.tsx`, `accordion.tsx`
- Tokens: `src/styles.css` (`@theme`)
- Imagens do site em `public/images/`:
  - `portrait.jpg` (modelo gerada — substituir se Andreza mandar foto)
  - `spread.jpg`, `hands.jpg`, `studio.jpg`, `table.jpg`

---

## 7. Prompt curto para a outra IA reconstruir

```
Reconstrua um site landing one-page profissional para Andreza Zeferino, tarotista em São Paulo.

Visual editorial dark: fundo #0e0c0a, texto #f3eee6, acento osso #d8cfc3. Fontes Cormorant Garamond + Outfit. Sem roxo, sem emoji, sem estética mística genérica.

Uma página: header sticky, hero “O que pede para ser visto.”, 3 valores, 4 leituras (Clareza 97 / Caminho 187 / Vínculos 217 / Ciclo 247), sobre, 3 passos, depoimentos, FAQ accordion, fecho, footer. CTA único: WhatsApp (placeholder 5511912345678) com mensagem pronta. Barra fixa de WhatsApp no mobile.

Copy em português brasileiro, tom adulto, sóbrio. Sem login. Mobile-first, tap 44px.

Use as imagens anexadas (still lifes de tarot + fotos de mesa). Não invente foto da Andreza como se fosse ela — a portrait atual é modelo gerada.

Quando eu mandar WhatsApp real, foto real, Instagram e preços, só substitua os placeholders.
```

---

## 8. Próximos dados que o dono ainda vai mandar

1. WhatsApp com DDD  
2. Foto real da Andreza (se quiser no site)  
3. Instagram criado  
4. Preços reais  
5. Presencial / online / bairro  
6. Depoimentos reais
