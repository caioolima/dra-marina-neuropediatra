import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dramarinakeuffer.com.br"),
  title: "Dra. Marina Keuffer | Neuropediatra | Porto Alegre e Belém",
  description: "Especialista em neurologia infantil em Porto Alegre (RS) e Belém (PA). Foco em autismo, TDAH e atrasos de desenvolvimento. CRM 57561-RS | RQE 44491.",
  keywords: ["neuropediatra", "neurologia infantil", "porto alegre", "belém", "autismo", "tdah", "atraso de fala", "desenvolvimento infantil"],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Dra. Marina Keuffer | Neuropediatra",
    description: "Cuidado especializado no neurodesenvolvimento infantil em Porto Alegre e Belém.",
    url: "https://dramarinakeuffer.com.br",
    siteName: "Dra. Marina Keuffer Neuropediatria",
    images: [
      {
        url: "/marina-keuffer-sobre.jpeg",
        width: 1200,
        height: 630,
        alt: "Dra. Marina Keuffer - Neuropediatra",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Marina Keuffer | Neuropediatra",
    description: "Cuidado especializado no neurodesenvolvimento infantil em Porto Alegre e Belém.",
    images: ["/marina-keuffer-sobre.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dra. Marina Keuffer - Neuropediatra",
    "description": "Especialista em neurologia infantil em Porto Alegre e Belém.",
    "telephone": "+5591920049746",
    "url": "https://dramarinakeuffer.com.br",
    "logo": "https://dramarinakeuffer.com.br/simbolo-marina.png",
    "medicalSpecialty": "PediatricNeurology",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "128"
    },
    "location": [
      {
        "@type": "MedicalClinic",
        "name": "Clínica Cuidado Integral (Porto Alegre)",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Tenente Ary Tarragô, 267",
          "addressLocality": "Porto Alegre",
          "addressRegion": "RS",
          "addressCountry": "BR"
        }
      },
      {
        "@type": "MedicalClinic",
        "name": "Consultório Belém",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tv. Dom Romualdo de Seixas, 1698",
          "addressLocality": "Belém",
          "addressRegion": "PA",
          "addressCountry": "BR",
          "postalCode": "66055-200"
        }
      }
    ]
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
