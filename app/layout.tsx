import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "NEFEDOFF TH — это не блог. Это движение.",
  description:
    "Официальный сайт NEFEDOFF TH. Подписывайтесь на YouTube, VK Видео, Дзен, Telegram, Instagram и Facebook. Контент-креатор, блогер, инфлюенсер.",
  keywords: "NEFEDOFF TH, блог, YouTube, контент, видео, влогер, инфлюенсер",
  authors: [{ name: "NEFEDOFF TH" }],
  openGraph: {
    title: "NEFEDOFF TH — это не блог. Это движение.",
    description: "Официальный сайт NEFEDOFF TH. Подписывайтесь на все платформы!",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEFEDOFF TH",
    description: "— это не блог. Это движение.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
