"use client"

import Link from "next/link"
import { useState } from "react"

const logisticsServices = [
  "発送代行",
  "倉庫保管",
  "流通加工",
  "検品・梱包",
  "小ロット対応",
  "スポット対応",
]

const linkClass =
  "flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-white px-4 py-4 text-sm font-semibold text-black/75 transition hover:border-amber-300 hover:text-black"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-black/5 bg-[#f8f8f6] text-black">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl bg-zinc-950 px-6 py-8 text-white sm:px-10 sm:py-10">
          <p className="text-xs font-bold tracking-[0.18em] text-amber-300">
            LOGISTICS PARTNER
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-relaxed sm:text-3xl">
            365日、物流を止めない。
            <br />
            まず返す。すぐ動く。
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
            1坪から、スモールビジネスを支える。
            段ボール数箱の保管、少量の発送、検品・梱包だけのご依頼も、
            まずはお気軽にご相談ください。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/company#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-amber-600"
            >
              物流の見積り・相談をする
            </Link>

            <a
              href="tel:0661159935"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              電話で相談：06-6115-9935
            </a>
          </div>

          <p className="mt-4 text-xs leading-6 text-white/55">
            ※365日対応をご希望の案件は、出荷内容・作業内容・運用条件を事前にご相談ください。
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
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

              <span className="text-2xl font-bold tracking-[0.18em]">
                GAMI
              </span>
            </Link>

            <p className="mt-4 text-xs font-bold tracking-[0.16em] text-amber-600">
              〜上へ、前へ。〜
            </p>

            <p className="mt-4 text-sm leading-7 text-black/65">
              大阪・福岡の物流拠点から全国へ。
              倉庫保管・発送代行・検品・流通加工・輸送手配まで、
              事業の規模に合わせて物流を支えます。
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {logisticsServices.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-black/5 bg-white px-3 py-2 text-xs text-black/65"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white p-5">
              <p className="text-xs font-bold tracking-[0.14em] text-amber-600">
                大阪物流センター
              </p>
              <address className="mt-3 text-sm not-italic leading-7 text-black/65">
                〒570-0003
                <br />
                大阪府守口市大日町1-8-18
              </address>
              <p className="mt-2 text-xs text-black/50">
                約100坪の倉庫・1坪から相談可能
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black">
              物流サービス・会社案内
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/logistics" className={linkClass}>
                  <span>物流サービス</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
              <li>
                <Link href="/warehouse" className={linkClass}>
                  <span>倉庫紹介</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
              <li>
                <Link href="/company" className={linkClass}>
                  <span>会社概要</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
              <li>
                <Link href="/company#contact" className={linkClass}>
                  <span>物流の見積り・相談</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>

            <a
              href="mailto:k_fuchigami@gamigami.email"
              className="mt-4 inline-block text-sm font-medium text-black/65 underline underline-offset-4 hover:text-black"
            >
              メールで物流を相談する
            </a>

            <Link
              href="/international"
              className="mt-4 block text-xs font-semibold tracking-wider text-black/55 hover:text-black"
            >
              ENGLISH / JAPAN FULFILLMENT
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black">
              ヘッドスパ事業・開業支援
            </h3>

            <p className="mt-4 text-sm leading-7 text-black/65">
              ヘッドスパ専門店ゆうの技術と、
              GAMIの経営・集客支援を組み合わせ、
              開業から店舗運営までサポートします。
            </p>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/headspa-franchise"
                  className={linkClass}
                >
                  <span>ヘッドスパFC・開業支援</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/franchise-contact"
                  className={linkClass}
                >
                  <span>FCの開業相談をする</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
              <li>
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

            <p className="mt-4 text-xs leading-6 text-black/50">
              施術メニュー・店舗情報・ご予約は、
              ヘッドスパ専門店ゆうの公式サイトをご覧ください。
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6">
          <p className="text-center text-xs text-black/45">
            © GAMI INC.
          </p>
        </div>
      </div>
    </footer>
  )
}
