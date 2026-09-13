import React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"

import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "700"],
  display: "swap",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["400", "500", "700"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111111",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://gamigami.net"),

  title: {
    default: "株式会社GAMI｜大阪の物流会社・発送代行・倉庫保管",
    template: "%s｜株式会社GAMI",
  },

  description:
    "株式会社GAMIは大阪を拠点に、物流運送事業を中心として倉庫保管・発送代行・流通加工・スポット出荷に対応。スピードと現場対応力で、企業の物流を支えます。",

  keywords: [
    "株式会社GAMI",
    "物流会社 大阪",
    "大阪 物流会社",
    "発送代行 大阪",
    "倉庫保管 大阪",
    "流通加工 大阪",
    "EC発送代行",
    "物流運送",
    "スポット出荷",
    "利用運送",
    "ヘッドスパ事業",
    "ヘッドスパFC",
    "車事業",
  ],

  authors: [{ name: "株式会社GAMI" }],
  creator: "株式会社GAMI",
  publisher: "株式会社GAMI",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://gamigami.net",
    siteName: "株式会社GAMI",
    title: "株式会社GAMI｜大阪の物流会社・発送代行・倉庫保管",
    description:
      "大阪を拠点に、倉庫保管・発送代行・流通加工・スポット出荷まで対応する株式会社GAMI。スピードと現場対応力で企業の物流を支えます。",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社GAMI｜大阪の物流会社・発送代行・倉庫保管",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "株式会社GAMI｜大阪の物流会社・発送代行・倉庫保管",
    description:
      "倉庫保管・発送代行・流通加工・スポット出荷まで対応する大阪の物流会社、株式会社GAMI。",
    images: ["/ogp.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} bg-[#fbfaf7] font-sans text-[#111111] antialiased`}
      >
        {children}
      </body>

      <GoogleTagManager gtmId="GTM-TJWG5GT5" />
    </html>
  )
}
