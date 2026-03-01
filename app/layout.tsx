import React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"

import "./globals.css"
import { FloatingCta } from "@/components/floating-cta"

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
})

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  title: {
    default: "株式会社GAMI | 繋ぐ・癒す・想う | 大阪の物流運送・ヘッドスパ・整理買取",
    template: "%s | 株式会社GAMI | 大阪の物流・スパ・整理買取",
  },
  description:
    "大阪を拠点に、物流運送事業・ドライヘッドスパ事業・整理買取事業を展開する株式会社GAMI。「繋ぐ。癒す。想う。」をコンセプトに、お客様一人ひとりの生活に寄り添う確かなサービスをご提供します。",
  keywords: [
    "株式会社GAMI",
    "物流運送",
    "ヘッドスパ",
    "整理買取",
    "生前整理",
    "物流業務",
    "EC支援",
    "大阪",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: '/',
    siteName: "株式会社GAMI（ガミ）",
    title: "株式会社GAMI | 繋ぐ・癒す・想う | 大阪の物流運送・ヘッドスパ・整理買取",
    description:
      "大阪を拠点に、物流運送事業・ドライヘッドスパ事業・整理買取事業を展開する株式会社GAMI。「繋ぐ。癒す。想う。」をコンセプトに、お客様一人ひとりの生活に寄り添う確かなサービスをご提供します。",
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: '株式会社GAMI',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社GAMI | 繋ぐ・癒す・想う | 大阪の物流運送・ヘッドスパ・整理買取",
    description:
      "大阪を拠点に、物流運送事業・ドライヘッドスパ事業・整理買取事業を展開する株式会社GAMI。「繋ぐ。癒す。想う。」をコンセプトに、お客様一人ひとりの生活に寄り添う確かなサービスをご提供します。",
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}
      >
        {children}
        <FloatingCta />
      </body>
    </html>
  )
}
