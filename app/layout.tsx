import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"

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
    default: "株式会社GAMI｜365日稼働の物流・発送代行・倉庫保管",
    template: "%s｜株式会社GAMI",
  },

  description:
    "365日、物流を止めない。まず返す。すぐ動く。株式会社GAMIは大阪・福岡から全国対応。1坪からの倉庫保管、小ロット発送、検品・梱包・流通加工でスモールビジネスを支えます。ヘッドスパFC・開業支援も展開しています。",

  keywords: [
    "株式会社GAMI",
    "物流会社 大阪",
    "発送代行 大阪",
    "倉庫保管 大阪",
    "流通加工 大阪",
    "EC発送代行",
    "小ロット 発送代行",
    "小規模 倉庫保管",
    "365日 発送代行",
    "検品 梱包",
    "スポット出荷",
    "ヘッドスパFC",
    "ヘッドスパ 開業支援",
  ],

  authors: [{ name: "株式会社GAMI" }],
  creator: "株式会社GAMI",
  publisher: "株式会社GAMI",

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
    title: "株式会社GAMI｜365日稼働の物流・発送代行・倉庫保管",
    description:
      "まず返す。すぐ動く。1坪から、スモールビジネスを支える。大阪・福岡から全国へ、保管・加工・発送・輸送をサポート。",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社GAMI｜物流・発送代行・倉庫保管",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "株式会社GAMI｜365日稼働の物流・発送代行・倉庫保管",
    description:
      "まず返す。すぐ動く。1坪からの保管・小ロット発送も歓迎。大阪・福岡から全国の物流を支えます。",
    images: ["/ogp.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TJWG5GT5');
            `,
          }}
        />
      </head>

      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} bg-[#fbfaf7] font-sans text-[#111111] antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJWG5GT5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}
