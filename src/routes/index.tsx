import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Users, MapPin, ShieldCheck } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import heroWellingtonCompleto from "@/assets/hero-wellington-completo.png";
import logoWellingtonOliveira from "@/assets/logo-wellington-oliveira.png";
import propostasImg from "@/assets/propostas.jpg";
import apoioImg from "@/assets/apoio.jpg";
import autoescolaImg from "@/assets/autoescola.jpg";
import plImg from "@/assets/pl.jpg";

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
    titulo: "Conheça\nnossas propostas",
    descricao: "Veja as ideias e os compromissos para construir uma Bahia mais forte e justa.",
    imagem: propostasImg,
    posicaoImagem: "center 17%",
    imagemInvertida: true,
    imagemDeslocadaDireita: false,
    alt: "Wellington Oliveira apresentando propostas e conversando com a população",
    link: "https://wellingtonoliveira.com.br/wellington",
  },
  {
    selo: "FAÇA PARTE",
    titulo: "Ajude a caminhada de\nWellington Oliveira",
    descricao: "Participe, mobilize sua comunidade e venha construir esse projeto com a gente.",
    imagem: apoioImg,
    posicaoImagem: "center",
    imagemInvertida: false,
    imagemDeslocadaDireita: false,
    alt: "Caminhada política com apoiadores, bandeiras e presença popular",
    link: "https://queroapoiar.com.br/wellingtonoliveira",
  },
  {
    selo: "NOSSA HISTÓRIA",
    titulo: "Autoescola Aliança",
    descricao:
      "Conheça uma trajetória marcada por educação, responsabilidade e compromisso com o trânsito.",
    imagem: autoescolaImg,
    posicaoImagem: "center",
    imagemInvertida: false,
    imagemDeslocadaDireita: false,
    alt: "Veículo de autoescola, volante e cena de formação de condutores",
    link: "https://www.instagram.com/autoescolaaliancaonline?igsi=MWl4Y3R2d3QwNXZiNg==",
  },
  {
    selo: "ATUAÇÃO POLÍTICA",
    titulo: "PL 1452/2025",
    descricao: "Conheça o projeto, seus objetivos e os benefícios que ele propõe para a sociedade.",
    imagem: plImg,
    posicaoImagem: "center 20%",
    imagemInvertida: false,
    imagemDeslocadaDireita: true,
    alt: "Plenário, documento legislativo e atuação política de Wellington Oliveira",
    link: "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2494375",
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
          className="h-full w-full object-cover opacity-35"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf1]/90 via-[#fffaf1]/86 to-[#fff7e8]/95" />
        {/* Brilhos radiais vermelhos nas laterais */}
        <div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: "#fef00b" }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full opacity-15 blur-[120px]"
          style={{ backgroundColor: "#fef00b" }}
          aria-hidden="true"
        />
      </div>

      <main className="relative z-10 mx-auto flex max-w-[520px] flex-col px-4 pb-8 pt-0 sm:px-6 sm:py-8">
        {/* Cabeçalho */}
        <header className="mb-8 flex flex-col items-center text-center">
          <div className="relative -mx-4 mb-7 aspect-[1.28] min-h-[313px] w-[calc(100%+2rem)] overflow-hidden bg-white shadow-xl shadow-red-950/10 sm:mx-0 sm:min-h-0 sm:w-full sm:rounded-3xl">
            <img
              src={heroWellingtonCompleto}
              alt=""
              className="pointer-events-none absolute inset-0 z-0 h-full w-full translate-x-[2%] scale-[1.04] object-cover"
              aria-hidden="true"
            />

            <div className="absolute left-4 top-4 z-30 text-left sm:left-6 sm:top-5">
              <div className="h-5" aria-hidden="true" />

              <h1 className="sr-only">Wellington Oliveira — candidato a deputado estadual</h1>
              <img
                src={logoWellingtonOliveira}
                alt="Wellington Oliveira — candidato a deputado estadual"
                className="mt-3 h-auto w-[212px] origin-left -translate-x-[7%] -translate-y-[2%] scale-[1.02] object-contain sm:mt-4 sm:w-[263px]"
              />
            </div>

            {/* Curvas da identidade PSB passam atrás do candidato */}
            <svg
              className="pointer-events-none absolute bottom-0 left-0 z-40 h-24 w-full sm:h-28"
              viewBox="0 0 520 150"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 148 C100 148 180 147 234 143 C350 137 440 78 520 16 L520 32 C440 91 350 145 234 148 C180 150 100 150 0 150 Z"
                fill="#fef00b"
              />
              <path
                d="M0 150 C100 150 180 150 234 148 C350 145 440 91 520 32 L520 65 C440 111 350 150 234 150 C180 150 100 150 0 150 Z"
                fill="#ed1f25"
              />
            </svg>

            <div className="absolute bottom-[4.2rem] left-4 z-30 flex max-w-[46%] -translate-y-[2%] items-stretch gap-2.5 text-left sm:bottom-[5.2rem] sm:left-6 sm:max-w-[220px]">
              <span className="w-[3px] min-w-[3px] rounded-full bg-[#ffc400]" aria-hidden="true" />
              <p className="origin-left scale-[0.92] font-['Montserrat',sans-serif] text-[clamp(12.1px,2.98vw,15.8px)] font-medium leading-[1.15] tracking-[-0.01em] text-[#d71920]">
                Trabalho que <strong className="font-bold">transforma.</strong>
                <span className="mt-0.5 block text-[#d71920]">
                  Futuro que <strong className="font-bold">inspira.</strong>
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-2xl font-bold leading-tight text-[#281719] sm:text-3xl">
              Juntos por uma nova história.
            </p>
            <p
              className="text-2xl font-extrabold leading-tight sm:text-3xl"
              style={{ color: "#ed1f25" }}
            >
              A Bahia pode mais.
            </p>
          </div>

          {/* Faixa de diferenciais */}
          <div className="mt-8 grid w-full grid-cols-3 gap-2 rounded-2xl border border-red-600/15 bg-white/75 p-3 shadow-lg shadow-red-950/5 backdrop-blur-md sm:gap-3 sm:p-4">
            {diferenciais.map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-2 text-center">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(237, 31, 37, 0.1)" }}
                >
                  <item.icon className="h-4 w-4" style={{ color: "#ed1f25" }} strokeWidth={2.5} />
                </div>
                <span className="text-[0.64rem] font-semibold leading-tight text-[#281719]/85 sm:text-xs">
                  {item.text}
                </span>
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
              className="group relative block h-[220px] w-full overflow-hidden rounded-3xl border bg-white shadow-xl shadow-red-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/15 focus-visible:rounded-3xl"
              style={{ borderColor: "#fef00b" }}
            >
              {/* Imagem de fundo */}
              <img
                src={card.imagem}
                alt={card.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  objectPosition: card.posicaoImagem,
                  transform: card.imagemInvertida
                    ? "translate(8%, 12%) scaleX(-1) scale(1.28)"
                    : card.imagemDeslocadaDireita
                      ? "translate(8%, 5%) scale(1.16)"
                      : undefined,
                }}
              />
              {/* Gradiente escuro da esquerda para direita */}
              <div className="overlay-left absolute inset-0" />
              {/* Hover glow vermelho */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: "inset 0 0 60px rgba(237, 31, 37, 0.35)" }}
                aria-hidden="true"
              />

              {/* Conteúdo do card */}
              <div className="relative flex h-full flex-col justify-between p-5">
                <div>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider"
                    style={{ backgroundColor: "#fef00b", color: "#0a0a0a" }}
                  >
                    {card.selo}
                  </span>
                  <h2 className="mt-3 whitespace-pre-line text-xl font-bold leading-tight text-white text-shadow-dark sm:text-2xl">
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
                    style={{ borderColor: "#fef00b" }}
                  >
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: "#fef00b" }}
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
          <p className="text-xs font-medium text-[#281719]/55">
            © 2026 Wellington Oliveira. Todos os direitos reservados.
          </p>
          <div
            className="mt-3 h-0.5 w-16 rounded-full"
            style={{
              backgroundColor: "#ed1f25",
              boxShadow: "0 0 12px rgba(237, 31, 37, 0.6)",
            }}
            aria-hidden="true"
          />
        </footer>
      </main>
    </div>
  );
}
