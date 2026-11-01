"use client"

import Link from "next/link"
import { useState } from "react"

const menuLinks = [
  { href: "/", label: "トップ" },
  { href: "/company", label: "会社概要" },
  { href: "/company#contact", label: "お問い合わせ" },
  { href: "/international", label: "ENGLISH" },
]

const linkClass =
  "flex min-h-[48px] min-w-0 items-center justify-between gap-2 rounded-xl border border-black/10 bg-white px-3 py-3 text-sm font-semibold leading-6 text-zinc-800 transition hover:border-amber-400 hover:bg-amber-50"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-black/10 bg-[#f7f7f5] text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-8 sm:px-6 sm:pt-12">

        {/* CONTACT */}
        <section className="relative overflow-hidden rounded-2xl bg-zinc-950 p-5 text-white sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-amber-400">
                CONTACT GAMI
              </p>

              <h2 className="mt-3 text-[25px] font-bold leading-[1.45] tracking-tight sm:text-3xl">物流のご相談・お見積りはこちら。</h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                商品・数量・希望時期を、分かる範囲でお知らせください。
                教材発送やダンボールだけのお見積りも歓迎です。
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/company#contact"
                  className="flex min-h-[50px] items-center justify-center rounded-full bg-amber-500 px-3 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
                >
                  見積り・物流相談
                </Link>

                <a
                  href="tel:0661159935"
                  aria-label="電話で相談"
                  className="flex min-h-[50px] items-center justify-center rounded-full border border-white/30 px-3 py-3 text-center text-sm font-bold transition hover:bg-white/10"
                >
                  電話で相談
                </a>
              </div>

              <p className="mt-3 text-xs leading-6 text-white/55">
                小ロット・スポット案件から継続的な物流業務までご相談ください。
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CONTENT */}
        <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-8">

          {/* COMPANY */}
          <section>
            <Link
              href="/"
              className="inline-flex flex-wrap items-center gap-3"
              aria-label="GAMI トップページ"
            >
              <img
                src={
                  logoError
                    ? "/placeholder-logo.svg"
                    : "/images/logo.png"
                }
                alt="GAMI"
                width={42}
                height={42}
                onError={() => setLogoError(true)}
                className="h-[42px] w-[42px] rounded-full object-cover"
              />

              <div>
                <span className="block text-xl font-black tracking-[0.18em]">
                  GAMI
                </span>

                <span className="block text-[10px] font-semibold tracking-wide text-zinc-500">
                  〜上へ、前へ。〜
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              大阪の自社倉庫を主軸に、福岡・神戸と連携。
              保管・検品・加工・発送まで、物流を支えます。
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              <a
                href="tel:0661159935"
                className="inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4"
              >
                電話で相談
              </a>

              <a
                href="mailto:k_fuchigami@gamigami.email"
                className="inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4"
              >
                メールで相談
              </a>
            </div>
          </section>

          {/* LOGISTICS MENU */}
          <nav aria-label="サイト案内">
            <h3 className="text-sm font-bold">
              SITE MENU
            </h3>

            <ul className="mt-3 grid grid-cols-2 gap-2">
              {menuLinks.map((link) => (
                <li key={link.href} className="min-w-0">
                  <Link
                    href={link.href}
                    className={linkClass}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>


          </nav>

          {/* OTHER BUSINESS */}
          <nav aria-label="その他の事業">
            <h3 className="text-sm font-bold">
              OTHER BUSINESS
            </h3>

            <p className="mt-2 text-xs leading-6 text-zinc-500">
              ヘッドスパ事業・フランチャイズ支援
            </p>

            <ul className="mt-3 grid grid-cols-2 gap-2">
              <li className="min-w-0">
                <Link
                  href="/headspa-franchise"
                  className={linkClass}
                >
                  <span>FC・開業支援</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>

              <li className="min-w-0">
                <Link
                  href="/franchise-contact"
                  className={linkClass}
                >
                  <span>FCの相談</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>

              <li className="col-span-2">
                <a
                  href="https://www.yuheadspa.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <span>ヘッドスパ専門店ゆう</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-5 sm:flex-row">
          <p className="text-[11px] text-zinc-500">
            © GAMI INC. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-400">
            OSAKA · FUKUOKA · KOBE
          </p>
        </div>
      </div>
    </footer>
  )
}
