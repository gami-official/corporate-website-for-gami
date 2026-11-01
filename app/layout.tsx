import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111111",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gamigami.net"),
  title: "大阪の発送代行・倉庫保管｜365日対応の株式会社GAMI",
  description: "大阪の自社倉庫を拠点に、発送代行・倉庫保管・教材発送・検品・セット組みをサポート。土日祝・年末年始を含む365日対応、全国チャーター、ダンボール単体見積りもご相談ください。",
  keywords: ["株式会社GAMI", "物流会社 大阪", "発送代行 大阪", "倉庫保管 大阪", "流通加工 大阪", "EC発送代行", "小ロット 発送代行", "365日 発送代行", "教材発送", "化粧品 検品 セット組み", "全国チャーター", "ダンボール 見積り"],
  authors: [{ name: "株式会社GAMI" }],
  creator: "株式会社GAMI",
  publisher: "株式会社GAMI",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png", shortcut: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.gamigami.net/",
    siteName: "株式会社GAMI",
    title: "大阪の発送代行・倉庫保管｜365日対応の株式会社GAMI",
    description: "1坪からの保管・小ロット発送から、教材発送・化粧品の検品・セット組み・全国チャーターまで。大阪を拠点に物流を支えます。",
    images: [{ url: "/ogp.jpg", width: 1200, height: 630, alt: "株式会社GAMI｜大阪の物流・発送代行・倉庫保管" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "大阪の発送代行・倉庫保管｜365日対応の株式会社GAMI",
    description: "大阪の自社倉庫を拠点に、保管・加工・発送・輸送をサポート。365日対応もご相談ください。",
    images: ["/ogp.jpg"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
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
        ` }} />
      </head>
      <body className="bg-[#fbfaf7] font-sans text-[#111111] antialiased">
        <noscript><iframe title="Google Tag Manager" src="https://www.googletagmanager.com/ns.html?id=GTM-TJWG5GT5" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        {children}
      </body>
    </html>
  )
}
