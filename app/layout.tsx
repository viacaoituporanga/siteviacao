import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"

const geist = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Viação Ituporanga - SuperBus Turismo | Transporte Rodoviário de Qualidade",
  description:
    "Transporte rodoviário de qualidade com conforto e segurança. Fretamento, turismo e viagens especiais no Alto Vale do Itajaí. Double Decker premium com internet Starlink.",
  keywords:
    "fretamento, ônibus leito, viagens, transporte rodoviário, turismo SC, Alto Vale do Itajaí, SuperBus, Double Decker, Ituporanga, Rio do Sul",
  authors: [{ name: "Viação Ituporanga" }],
  creator: "Viação Ituporanga",
  publisher: "Viação Ituporanga",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://viacaoituporanga.com.br",
    title: "Viação Ituporanga - SuperBus Turismo",
    description: "Transporte rodoviário de qualidade com conforto e segurança no Alto Vale do Itajaí.",
    siteName: "Viação Ituporanga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viação Ituporanga - SuperBus Turismo",
    description: "Transporte rodoviário de qualidade com conforto e segurança no Alto Vale do Itajaí.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
