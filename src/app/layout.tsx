import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: [
    "400",
    "700",
  ]
})

export const metadata: Metadata = {
  title: "Brazil Japan - E-commerce",
  description: "Sistema de gerenciamento de e-commerce",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
