import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";

const ProductsSection = dynamic(
  () => import("@/components/products/ProductsSection"),
  { loading: () => <ProductGridSkeleton /> },
);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="Home"
        className={[
          "w-full h-screen relative grid grid-cols-1 items-center",
          "px-[10%] max-[1110px]:px-[3%]",
          "bg-cover bg-center",
          "bg-[url('/imgs/FundoSite.jpg')]",
          "max-[630px]:bg-[url('/imgs/fundo-site-celular.jpg')]",
        ].join(" ")}
      >
        <div>
          <h5 className="text-[#9932cc] text-base font-semibold">
            Personalizados e Únicos
          </h5>
          <h1 className="text-black text-[4rem] max-[630px]:text-[50px] font-semibold capitalize leading-[1.1] mt-1.5 mb-2.5">
            Surpreenda
            <br />
            quem gosta!
          </h1>
          <p className="text-[#333c56] text-xl italic mb-5">
            Presentes exclusivos para momentos inesquecíveis.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5531997379997&text&type=phone_number&app_absent=0"
            className="inline-block text-[#111] text-base font-semibold capitalize border-2 border-[#111] px-6 py-3 transition-all duration-[420ms] hover:bg-black hover:text-white"
          >
            Faça seu pedido <i className="bx bx-right-arrow-alt align-middle" />
          </a>
        </div>

        {/* WhatsApp flutuante — oculto em mobile ≤630px */}
        <div className="absolute top-[85%] left-[4%] max-[630px]:hidden">
          <a
            href="https://api.whatsapp.com/send/?phone=5531997379997&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-whatsapp text-[45px] text-[#2c2c2c] border-2 border-[#2c2c2c] rounded-full p-1 hover:bg-black hover:text-white transition-all" />
          </a>
        </div>

        {/* Seta para baixo — direita em desktop, esquerda em mobile */}
        <div className="absolute top-[85%] right-[4%] max-[630px]:right-auto max-[630px]:left-[4%]">
          <a href="#Produtos">
            <i className="bx bx-down-arrow-alt text-[30px] text-[#2c2c2c] border-2 border-[#2c2c2c] rounded-full p-[12px] hover:bg-black hover:text-white transition-all" />
          </a>
        </div>
      </section>

      {/* ── Heading produtos ─────────────────────────────────── */}
      <div className="py-12 px-[10%] max-[1110px]:px-[3%] text-center">
        <h2 className="text-[#111] text-[28px] capitalize font-normal">
          Nossos produtos{" "}
          <span className="font-bold capitalize text-[#9932cc]">em alta</span>
        </h2>
      </div>

      {/* ── Grade de produtos (client component) ────────────── */}
      <ProductsSection />

      {/* ── Sobre ────────────────────────────────────────────── */}
      <section
        id="Sobre"
        className="bg-[#f3f0f6] px-[10%] max-[1110px]:px-[3%] py-16"
      >
        <div className="text-center flex flex-col items-center gap-4">
          <h3 className="text-black text-3xl capitalize font-bold">
            Sobre mim
          </h3>
          <Image
            src="/imgs/Giselle.png"
            alt="Foto Giselle"
            width={100}
            height={100}
            style={{ width: 100, height: "auto" }}
            className="rounded-full"
          />
          <div className="max-w-[600px]">
            <p className="text-[#707070] text-sm leading-[25px]">
              Sempre fui apaixonada por presentes e, especialmente, por
              presentes personalizados. A expectativa de receber algo especial,
              embrulhado com carinho e com um toque pessoal sempre me encantou.
              Com o tempo, decidi transformar essa paixão em negócio e criei
              Carapuça Presentes. Cada detalhe é pensado com cuidado, desde a
              seleção dos produtos até a embalagem e a personalização. Ver a
              alegria e gratidão nos olhos das pessoas ao receberem um presente
              personalizado é algo que me enche de felicidade. É incrível poder
              fazer parte desses momentos especiais na vida das pessoas e ajudar
              a criar memórias duradouras.
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-[25px] text-[#000000b4] capitalize font-bold">
              Giselle Rodrigues Van Petten
            </h2>
            <p className="text-[#707070] text-sm">
              Socia Administradora da{" "}
              <strong className="text-[rgba(153,50,204,0.637)]">
                Carapuça Presentes
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Contato ──────────────────────────────────────────── */}
      <section id="Contato" className="px-[10%] max-[1110px]:px-[3%] py-16">
        <h3 className="text-black text-3xl capitalize text-center font-bold mb-10">
          Como você prefere falar com a gente?
        </h3>
        <article className="flex justify-center gap-6 max-[855px]:flex-col max-[855px]:items-center">
          {[
            {
              key: "instagram",
              href: "https://www.instagram.com/carapucapresentes/",
              icon: "bxl-instagram",
              title: <span className="font-bold">Instagram</span>,
              desc: "Confira nossas últimas postagens!",
            },
            {
              key: "whatsapp",
              href: "https://api.whatsapp.com/send/?phone=5531997379997&text&type=phone_number&app_absent=0",
              icon: "bxl-whatsapp",
              title: <span className="font-bold">Whatsapp</span>,
              desc: "clique e abra o chat.",
            },
            {
              key: "email",
              href: "mailto:contato@carapucapresentes.com.br",
              icon: "bx-envelope",
              title: <span className="font-bold">Email</span>,
              desc: "Tem alguma dúvida?",
            },
          ].map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="block py-14 px-8 min-w-[16rem] w-full max-w-[22rem] min-[1110px]:max-w-[30rem] text-center rounded-[20px] bg-[#f3f0f6] leading-[40px] transition-all duration-[400ms] shadow-[1px_1px_15px_#ccc] hover:scale-110 max-[855px]:max-w-full"
            >
              <i className={`bx ${item.icon} text-[#000000b4] text-[40px]`} />
              <h2 className="text-[30px] text-[#000000b4] capitalize mb-[1px]">
                {item.title}
              </h2>
              <p className="text-[#00000085] leading-5">{item.desc}</p>
            </a>
          ))}
        </article>
      </section>

    </>
  );
}
