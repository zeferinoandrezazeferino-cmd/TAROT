export const site = {
  brand: "Ranya Cartomante",
  reader: "Ranya",
  fullName: "Ranya Cartomante",
  city: "São Paulo",
  whatsapp: "554384297499",
  themeColor: "#0e0c0a",
  defaultMessage:
    "Olá, Ranya. Vim pelo site e quero agendar uma leitura.",
} as const;

export const nav = [
  { href: "#leituras", label: "Leituras" },
  { href: "#sobre", label: "Sobre" },
  { href: "#caminho", label: "Como funciona" },
  { href: "#faq", label: "Perguntas" },
] as const;

export const readings = [
  {
    id: "clareza",
    name: "Clareza",
    duration: "30 min",
    price: "R$ 97",
    summary: "Três cartas para nomear o que está atravessando o momento.",
    details:
      "Uma sessão curta e precisa. Ideal quando você precisa de um recorte honesto — um sim, um não, um próximo passo.",
    message:
      "Olá, Ranya. Quero agendar a leitura Clareza (30 min / R$ 97).",
  },
  {
    id: "caminho",
    name: "Caminho",
    duration: "60 min",
    price: "R$ 187",
    summary: "Leitura completa para decisões, transições e o que vem depois.",
    details:
      "Espalho o mapa do assunto com calma: contexto, bloqueio, recurso e direção. A conversa dura o tempo de uma hora verdadeira.",
    message:
      "Olá, Ranya. Quero agendar a leitura Caminho (60 min / R$ 187).",
  },
  {
    id: "vinculos",
    name: "Vínculos",
    duration: "60 min",
    price: "R$ 217",
    summary: "Relações afetivas, padrões que se repetem, o que ainda cabe.",
    details:
      "Para quem está em um vínculo — ou saindo de um. Sem romance fácil: o que a dinâmica pede, o que você já sabe e o que ainda resiste.",
    message:
      "Olá, Ranya. Quero agendar a leitura Vínculos (60 min / R$ 217).",
  },
  {
    id: "ciclo",
    name: "Ciclo",
    duration: "75 min",
    price: "R$ 247",
    summary: "Uma leitura de temporada: o ano, o semestre, um capítulo novo.",
    details:
      "Para marcar uma virada. Olhamos o arco, os temas que voltam e o que pede consistência — não só o que o futuro “reserva”.",
    message:
      "Olá, Ranya. Quero agendar a leitura Ciclo (75 min / R$ 247).",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Escolha a leitura",
    body: "Leia as descrições com calma. Se ainda estiver em dúvida, me escreva — combinamos juntas o formato.",
  },
  {
    n: "02",
    title: "Agende no WhatsApp",
    body: "Mando horários disponíveis (online ou presencial em São Paulo) e a forma de pagamento. Sem formulário, sem espera.",
  },
  {
    n: "03",
    title: "Sessão, então o depois",
    body: "Cartas na mesa, conversa presente. Depois você recebe um resumo escrito do que ficou nítido — para não se perder no dia seguinte.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Saí da sessão com o corpo mais quieto. Não foi um discurso bonito — foi um recorte do que eu já sentia e não conseguia dizer.",
    name: "Ana Luiza M.",
    meta: "Leitura Caminho · São Paulo",
  },
  {
    quote:
      "Ranya não empurra destino. Ela escuta, abre as cartas e devolve pergunta boa. Foi a primeira vez que uma leitura me serviu de fato.",
    name: "Rafael S.",
    meta: "Leitura Clareza · online",
  },
  {
    quote:
      "Fui por um relacionamento que não andava. Voltei com limite, não com ilusão. Isso, para mim, é profissionalismo.",
    name: "Helena P.",
    meta: "Leitura Vínculos · São Paulo",
  },
] as const;

export const faqs = [
  {
    q: "Como funciona a sessão?",
    a: "Conversamos primeiro sobre o que te trouxe. Em seguida abro as cartas no baralho Rider–Waite e lemos juntas, com pausa e pergunta. Não é monólogo, não é show. No fim, você recebe um resumo por escrito.",
  },
  {
    q: "É presencial ou online?",
    a: "Os dois. Online por videochamada, com as cartas visíveis o tempo todo. Presencial em São Paulo, com hora marcada. O valor é o mesmo.",
  },
  {
    q: "Preciso chegar com uma pergunta?",
    a: "Ajuda, mas não é obrigatório. Muita gente chega só com um aperto no peito. A gente afunila juntas no começo da sessão.",
  },
  {
    q: "Tarot substitui terapia ou decisão médica?",
    a: "Não. A leitura é um instrumento de clareza e linguagem — não diagnóstico, não aconselhamento jurídico ou financeiro. Se você está em crise, procure também cuidado profissional da área.",
  },
  {
    q: "Como pago?",
    a: "Pix, após confirmarmos o horário. A reserva fica feita com o pagamento. Remarcação com 24h de antecedência, sem custo.",
  },
  {
    q: "Posso presentear alguém?",
    a: "Sim. Mando um voucher digital com a leitura escolhida e um prazo de 90 dias para agendar. É um presente sóbrio — e por isso costuma ser bem recebido.",
  },
] as const;

export function whatsappHref(message: string = site.defaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
