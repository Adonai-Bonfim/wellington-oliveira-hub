import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Users, MapPin, ShieldCheck } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import propostasImg from "@/assets/propostas.jpg";
import apoioImg from "@/assets/apoio.jpg";
import autoescolaImg from "@/assets/autoescola.jpg";
import plImg from "@/assets/pl.jpg";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wellington Oliveira - Links Oficiais" },
      {
        name: "description",
        content:
          "Wellington Oliveira. Trabalho, compromisso e presença ao lado do povo. Juntos por uma nova história. A Bahia pode mais.",
      },
      { property: "og:title", content: "Wellington Oliveira - Links Oficiais" },
      {
        property: "og:description",
        content:
          "Wellington Oliveira. Trabalho, compromisso e presença ao lado do povo. Juntos por uma nova história. A Bahia pode mais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

const diferenciais = [
  { icon: Users, text: "Compromisso com as pessoas" },
  { icon: MapPin, text: "Desenvolvimento para a Bahia" },
  { icon: ShieldCheck, text: "Trabalho com transparência" },
];

const cards = [
  {
    selo: "PLANO DE GOVERNO",
    titulo: "Conheça nossas propostas",
    descricao:
      "Veja as ideias e os compromissos para construir uma Bahia mais forte e justa.",
    imagem: propostasImg,
    alt: "Wellington Oliveira apresentando propostas e conversando com a população",
    link: "#propostas",
  },
  {
    selo: "FAÇA PARTE",
    titulo: "Ajude a caminhada de Wellington Oliveira",
    descricao:
      "Participe, mobilize sua comunidade e venha construir esse projeto com a gente.",
    imagem: apoioImg,
    alt: "Caminhada política com apoiadores, bandeiras e presença popular",
    link: "#apoio",
  },
  {
    selo: "NOSSA HISTÓRIA",
    titulo: "Autoescola Aliança",
    descricao:
      "Conheça uma trajetória marcada por educação, responsabilidade e compromisso com o trânsito.",
    imagem: autoescolaImg,
    alt: "Veículo de autoescola, volante e cena de formação de condutores",
    link: "#autoescola",
  },
  {
    selo: "ATUAÇÃO POLÍTICA",
    titulo: "PL 1452/2025",
    descricao:
      "Conheça o projeto, seus objetivos e os benefícios que ele propõe para a sociedade.",
    imagem: plImg,
    alt: "Plenário, documento legislativo e atuação política de Wellington Oliveira",
    link: "#pl-1452-2025",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Background cinematográfico */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/85 to-[#0a0a0a]/95" />
        {/* Brilhos radiais vermelhos nas laterais */}
        <div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full opacity-40 blur-[120px]"
          style={{ backgroundColor: "#ec2024" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full opacity-35 blur-[120px]"
          style={{ backgroundColor: "#ec2024" }}
          aria-hidden="true"
        />
      </div>

      <main className="relative z-10 mx-auto flex max-w-[520px] flex-col px-4 py-8 sm:px-6">
        {/* Cabeçalho */}
        <header className="mb-8 flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div className="absolute inset-0 rounded-full blur-md" style={{ backgroundColor: "#ec2024" }} />
            <img
              src={profileImg}
              alt="Wellington Oliveira"
              className="relative h-28 w-28 rounded-full border-2 object-cover shadow-xl"
              style={{ borderColor: "#fef101" }}
            />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white text-shadow-dark sm:text-4xl">
            Wellington Oliveira
          </h1>

          <p className="mt-3 max-w-xs text-sm font-medium text-white/80 text-shadow-dark">
            Trabalho, compromisso e presença ao lado do povo.
          </p>

          <div className="mt-6 space-y-1">
            <p className="text-2xl font-bold leading-tight text-white text-shadow-dark sm:text-3xl">
              Juntos por uma nova história.
            </p>
            <p
              className="text-2xl font-extrabold leading-tight text-shadow-dark sm:text-3xl"
              style={{ color: "#fef101" }}
            >
              A Bahia pode mais.
            </p>
          </div>

          {/* Faixa de diferenciais */}
          <div className="mt-8 flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            {diferenciais.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 text-left"
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(254, 241, 1, 0.12)" }}
                >
                  <item.icon className="h-4 w-4" style={{ color: "#fef101" }} strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold text-white/90">{item.text}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Cards de links */}
        <section className="flex flex-col gap-5" aria-label="Links oficiais">
          {cards.map((card) => (
            <a
              key={card.titulo}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-[220px] w-full overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 focus-visible:rounded-3xl"
              style={{ borderColor: "#ec2024" }}
            >
              {/* Imagem de fundo */}
              <img
                src={card.imagem}
                alt={card.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradiente escuro da esquerda para direita */}
              <div className="overlay-left absolute inset-0" />
              {/* Hover glow vermelho */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: "inset 0 0 60px rgba(236, 32, 36, 0.35)" }}
                aria-hidden="true"
              />

              {/* Conteúdo do card */}
              <div className="relative flex h-full flex-col justify-between p-5">
                <div>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider"
                    style={{ backgroundColor: "#fef101", color: "#0a0a0a" }}
                  >
                    {card.selo}
                  </span>
                  <h2 className="mt-3 text-xl font-bold leading-tight text-white text-shadow-dark sm:text-2xl">
                    {card.titulo}
                  </h2>
                  <p className="mt-2 max-w-[75%] text-sm leading-relaxed text-white/75 text-shadow-dark">
                    {card.descricao}
                  </p>
                </div>

                {/* Botão circular */}
                <div className="absolute bottom-5 right-5">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-lg"
                    style={{ borderColor: "#fef101" }}
                  >
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: "#fef101" }}
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Rodapé */}
        <footer className="mt-10 flex flex-col items-center text-center">
          <p className="text-xs font-medium text-white/60">
            © 2026 Wellington Oliveira. Todos os direitos reservados.
          </p>
          <div
            className="mt-3 h-0.5 w-16 rounded-full"
            style={{
              backgroundColor: "#ec2024",
              boxShadow: "0 0 12px rgba(236, 32, 36, 0.6)",
            }}
            aria-hidden="true"
          />
        </footer>
      </main>
    </div>
  );
}
