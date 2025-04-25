import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Microplàstics: Un Risc Invisible | microplastics.cat",
  description: "Informació essencial sobre l'impacte dels microplàstics en el nostre medi ambient i la nostra salut.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
