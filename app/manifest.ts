import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamigami.net'

  return {
    name: '株式会社GAMI',
    short_name: 'GAMI',
    description: '大阪を拠点に、物流運送事業・ドライヘッドスパ事業・整理買取事業を展開する株式会社GAMI。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
