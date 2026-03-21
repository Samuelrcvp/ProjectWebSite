import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#9932CC",
};

export const metadata: Metadata = {
  title: "Carapuça Presentes",
  description:
    "Presentes personalizados exclusivos para momentos inesquecíveis.",
  keywords:
    "balões personalizados, balões bubble, gás hélio, arranjos, cestas, topo de bolo, box, personalizados, caneca, Belo Horizonte",
  authors: [{ name: "Carapuça Presentes Personalizados" }],
  robots: "index, follow",
  icons: {
    icon: "/imgs/LogoCara.ico",
    shortcut: "/imgs/LogoCara.ico",
  },
  openGraph: {
    title: "Carapuça Presentes",
    description:
      "Celebre com presentes personalizados: cestas, box's e balões bubble exclusivos.",
    url: "https://carapucapresentes.com.br/",
    siteName: "Carapuça Presentes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://carapucapresentes.com.br/imgs/LogoCarapuca.png",
      },
    ],
  },
  twitter: { card: "summary" },
  verification: { google: "08lj_EAHxDmJ3tPP86QnFRq1ERShGsXdoZFHMA2pCSc" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
        <link rel="icon" href="/imgs/LogoCara.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/imgs/LogoCara.ico" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
