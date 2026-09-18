import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock3, MapPin, Video, Instagram } from "lucide-react";
import { Mark } from "@/components/mark";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  faqs,
  readings,
  site,
  steps,
  testimonials,
  whatsappHref,
} from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="topo" className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Strip />
        <Readings />
        <About />
        <Path />
        <Voices />
        <Faq />
        <Close />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-6 lg:pb-6">
          <p
            className="animate-rise text-kicker font-medium uppercase tracking-kicker text-muted-foreground"
            style={{ animationDelay: "40ms" }}
          >
            Tarot · {site.city}
          </p>
          <h1
            className="animate-rise mt-5 font-serif text-hero font-medium tracking-tight text-foreground sm:text-6xl lg:text-display"
            style={{ animationDelay: "90ms" }}
          >
            O que pede para ser visto.
          </h1>
          <p
            className="animate-rise mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            Leituras presenciais e online com {site.reader}. Um espaço de
            escuta, cartas na mesa e clareza para o próximo passo — sem teatro,
            sem pressa.
          </p>
          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "190ms" }}
          >
            <WhatsAppCta />
            <a
              href="#leituras"
              className="inline-flex h-12 items-center justify-center px-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              Ver leituras
            </a>
          </div>
          <ul
            className="animate-rise mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-subtle"
            style={{ animationDelay: "240ms" }}
          >
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-3.5" aria-hidden />
              Presencial em {site.city}
            </li>
            <li className="inline-flex items-center gap-2">
              <Video className="size-3.5" aria-hidden />
              Sessões online
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3 className="size-3.5" aria-hidden />
              Resumo escrito
            </li>
          </ul>
        </div>

        <div
          className="animate-rise relative lg:col-span-6"
          style={{ animationDelay: "120ms" }}
        >
          <div className="grid grid-cols-12 grid-rows-6 gap-3 sm:gap-4">
            <figure className="col-span-8 row-span-6 overflow-hidden rounded-2xl bg-card">
              <img
                src="/images/portrait.jpg"
                alt={`${site.fullName}, tarotista`}
                className="h-full w-full object-cover object-[center_15%] aspect-[3/4] sm:aspect-auto sm:min-h-[520px]"
              />
            </figure>
            <figure className="col-span-4 row-span-3 overflow-hidden rounded-xl bg-card">
              <img
                src="/images/spread.jpg"
                alt="Tiragem de três cartas sobre linho"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="col-span-4 row-span-3 overflow-hidden rounded-xl bg-card">
              <img
                src="/images/hands.jpg"
                alt="Mãos sobre o baralho"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
          <p className="mt-3 font-serif text-sm italic text-muted-foreground">
            {site.fullName} · Tarot
          </p>
        </div>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 md:py-16">
        {[
          {
            k: "Presença",
            v: "Uma hora é uma hora. Sem áudio gravado, sem texto automático, sem fila de espera espiritual.",
          },
          {
            k: "Linguagem clara",
            v: "Saio da metáfora quando ela não serve. O tarot aqui é ferramenta de conversa, não de espetáculo.",
          },
          {
            k: "Depois da mesa",
            v: "Você leva um resumo escrito. A leitura continua útil na segunda-feira, não só na hora da carta.",
          },
        ].map((item) => (
          <article key={item.k}>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              {item.k}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.v}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Readings() {
  return (
    <section id="leituras" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl">
          <p className="text-kicker font-medium uppercase tracking-kicker text-muted-foreground">
            Leituras
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Quatro formatos, um mesmo cuidado.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha pelo tempo e pela pergunta — não pelo mistério. Todas as
            sessões incluem conversa, tiragem e resumo escrito.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {readings.map((reading) => (
            <article
              key={reading.id}
              className="flex flex-col rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 sm:p-8 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-3xl font-medium">
                  {reading.name}
                </h3>
                <p className="text-sm tabular-nums text-muted-foreground">
                  {reading.duration}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {reading.summary}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                {reading.details}
              </p>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
                <p className="font-serif text-2xl">{reading.price}</p>
                <a
                  href={whatsappHref(reading.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary transition-opacity duration-150 hover:opacity-80"
                >
                  Agendar
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
        <figure className="overflow-hidden rounded-2xl bg-card lg:col-span-6">
          <img
            src="/images/studio.jpg"
            alt="Sala de leitura em São Paulo"
            className="aspect-[16/10] w-full object-cover lg:aspect-[4/3]"
          />
        </figure>
        <div className="lg:col-span-6 lg:pl-4">
          <p className="text-kicker font-medium uppercase tracking-kicker text-muted-foreground">
            Sobre
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Um estúdio pequeno, uma mesa, atenção inteira.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Meu nome é {site.fullName}. Trabalho com tarot em sessões
              individuais: um espaço pequeno, uma mesa, atenção inteira.
              Procuro o que eu mesma procurava — uma leitura adulta, bem
              feita, que não promete milagre e não trata carta como sentença.
            </p>
            <p>
              Uso o Rider–Waite e spreads clássicos. A sessão é conversa:
              você fala, eu escuto, as cartas abrem o que estava fora de
              foco. Sirvo quem está em transição — trabalho, vínculo, um
              ciclo que acabou e ainda não tem nome.
            </p>
          </div>
          <blockquote className="mt-8 border-l border-primary/40 pl-5 font-serif text-xl italic leading-snug text-foreground">
            “Não leio o futuro como destino. Leio o presente com mais
            nitidez — e isso já muda o que vem depois.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Path() {
  return (
    <section
      id="caminho"
      className="scroll-mt-20 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl">
          <p className="text-kicker font-medium uppercase tracking-kicker text-muted-foreground">
            Como funciona
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Três passos. Sem cadastro.
          </h2>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.n}>
              <p className="font-serif text-sm tracking-mark text-primary">
                {step.n}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-14 overflow-hidden rounded-2xl">
          <img
            src="/images/table.jpg"
            alt="Mesa de leitura com velas e cartas"
            className="aspect-video w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-kicker font-medium uppercase tracking-kicker text-muted-foreground">
          Quem já sentou à mesa
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          A leitura serve quando continua fazendo sentido depois.
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] sm:p-8"
            >
              <blockquote className="flex-1 font-serif text-xl leading-snug text-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-kicker font-medium uppercase tracking-kicker text-muted-foreground">
            Perguntas
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight">
            Antes de escrever.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Se a sua dúvida não está aqui, o WhatsApp é o caminho mais curto.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Mark className="mx-auto size-10 text-primary" />
        <h2 className="mt-8 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          Quando estiver pronta, a mesa está posta.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Me escreva com o que trouxe você até aqui. Respondo em horário
          comercial, com calendário na mão — não com automação.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppCta />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#topo" className="flex items-center gap-2.5">
            <Mark className="size-6" />
            <span className="font-serif text-lg tracking-wide">{site.brand}</span>
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Leituras de tarot em {site.city} e online.
          </p>
          <a
            href="https://instagram.com/ranya.cartomante"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="size-4" />
            @ranya.cartomante
          </a>
        </div>
        <p className="text-xs leading-relaxed text-subtle">
          A leitura de tarot é instrumento de reflexão. Não substitui
          acompanhamento terapêutico, médico, jurídico ou financeiro.
        </p>
      </div>
    </footer>
  );
}

function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <WhatsAppCta className="w-full" />
    </div>
  );
}
