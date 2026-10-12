"use client"

import Link from "next/link"
import { useState } from "react"

const menuLinks = [
  { href: "/logistics", label: "物流サービス" },
  { href: "/warehouse", label: "倉庫紹介" },
  { href: "/company", label: "会社概要" },
  { href: "/company#contact", label: "物流の相談" },
]

const linkClass =
  "flex min-h-[48px] min-w-0 items-center justify-between gap-2 rounded-xl border border-black/10 bg-white px-3 py-3 text-sm font-semibold leading-6 text-zinc-800 transition hover:border-amber-400"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-black/10 bg-[#f8f8f6] text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="rounded-2xl bg-zinc-950 p-5 text-white sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] text-amber-300">
                LOGISTICS CONTACT
              </p>

              <h2 className="mt-2 text-[23px] font-bold leading-[1.5] tracking-tight sm:text-3xl">
                <span className="inline-block">物流で困ったら、</span>
                <span className="inline-block">まずGAMIへ。</span>
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/80">
                365日、物流を止めない。まず返す。すぐ動く。
                1坪からの保管、小ロット発送もご相談ください。
              </p>
            </div>

            <div className="min-w-0">
              <div className="grid grid-cols-[1.35fr_1fr] gap-2">
                <Link
                  href="/company#contact"
                  className="flex min-h-[48px] items-center justify-center rounded-full bg-amber-500 px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600"
                >
                  見積り・物流相談
                </Link>

                <a
                  href="tel:0661159935"
                  className="flex min-h-[48px] items-center justify-center rounded-full border border-white/40 px-3 py-3 text-center text-sm font-bold transition hover:bg-white/10"
                >
                  電話で相談
                </a>
              </div>

              <p className="mt-3 text-[11px] leading-5 text-white/65">
                ※365日対応は、作業内容・出荷条件を事前にご相談ください。
              </p>
            </div>
          </div>
        </section>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-8">
          <section>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="GAMI トップページ"
            >
              <img
                src={
                  logoError
                    ? "/placeholder-logo.svg"
                    : "/images/logo.png"
                }
                alt="GAMI"
                width={38}
                height={38}
                onError={() => setLogoError(true)}
                className="h-[38px] w-[38px] rounded-full object-cover"
              />
              <span className="text-xl font-bold tracking-[0.18em]">
                GAMI
              </span>
              <span className="text-[11px] font-semibold text-zinc-500">
                〜上へ、前へ。〜
              </span>
            </Link>

            <p className="mt-3 text-sm leading-7 text-zinc-600">
              大阪・福岡から全国へ。
              保管・発送代行・検品・流通加工で、
              スモールビジネスを支えます。
            </p>

            <address className="mt-3 text-sm not-italic leading-6 text-zinc-600">
              <span className="font-semibold text-zinc-800">
                大阪物流センター
              </span>
              <span className="mt-1 block">
                〒570-0003 大阪府守口市大日町1-8-18
              </span>
            </address>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <a
                href="tel:0661159935"
                className="inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4"
              >
                06-6115-9935
              </a>
              <a
                href="mailto:k_fuchigami@gamigami.email"
                className="inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4"
              >
                メールで相談
              </a>
            </div>
          </section>

          <nav aria-label="フッターの物流メニュー">
            <h3 className="text-sm font-bold">
              物流サービス・会社案内
            </h3>

            <ul className="mt-3 grid grid-cols-2 gap-2">
              {menuLinks.map((link) => (
                <li key={link.href} className="min-w-0">
                  <Link href={link.href} className={linkClass}>
                    <span>{link.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/international"
              className="mt-2 inline-flex min-h-[44px] items-center text-xs font-semibold tracking-wide text-zinc-600 underline underline-offset-4"
            >
              ENGLISH / JAPAN FULFILLMENT
            </Link>
          </nav>

          <nav aria-label="フッターのヘッドスパメニュー">
            <h3 className="text-sm font-bold">
              ヘッドスパ・開業支援
            </h3>

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
                  <span>ヘッドスパ専門店ゆう 公式サイト</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>

            <p className="mt-3 text-xs leading-6 text-zinc-500">
              施術メニュー・店舗情報・ご予約は、
              ゆうの公式サイトをご覧ください。
            </p>
          </nav>
        </div>

        <div className="mt-5 border-t border-black/10 pt-4">
          <p className="text-center text-[11px] text-zinc-500">
            © GAMI INC.
          </p>
        </div>
      </div>
    </footer>
  )
}
