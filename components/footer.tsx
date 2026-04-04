"use client"

import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <img
                src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
                alt="GAMI"
                width={32}
                height={32}
                onError={() => setLogoError(true)}
              />
              <span className="font-serif text-lg tracking-widest">GAMI</span>
            </Link>
            <p className="text-sm leading-7 tracking-wide text-muted-foreground">
  大阪・福岡で物流会社をお探しなら<br />
  <span className="font-semibold text-white">
    発送代行・内職・軽作業まで一括対応の株式会社GAMI
  </span>
</p>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-gold">
              事業内容
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/logistics" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  物流運送事業
                </Link>
              </li>
              <li>
                <Link href="/school" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  ヘッドスパ事業
                </Link>
              </li>
              <li>
                <Link href="/seihin" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  整理買取事業
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/company#contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-gold">
              お問い合わせ
            </h3>
            <p className="text-sm leading-8 tracking-wide text-muted-foreground">
              お気軽にご連絡ください。
            </p>
            <a
              href="mailto:k_fuchigami@gamigami.email"
              className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              k_fuchigami@gamigami.email
            </a>
            <div className="mt-2 text-sm text-muted-foreground">
              <p>TEL: <a href="tel:06-6115-9935" className="transition-colors hover:text-primary">06-6115-9935</a></p>
              <p>FAX: 06-6115-9936</p>
            </div>
            <Link
              href="/company#contact"
              className="mt-4 inline-block w-full text-center aurora-gradient rounded-lg px-6 py-2.5 text-xs font-medium tracking-widest text-white transition-all active:scale-95 sm:w-auto sm:hover:scale-105 sm:hover:shadow-glass-hover touch-manipulation"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center sm:mt-16 sm:pt-8">
          <p className="text-xs text-muted-foreground">
            © 株式会社GAMI
          </p>
        </div>
      </div>
    </footer>
  )
}
