
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

const japaneseNavLinks = [
  { href: "/", label: "トップ" },
  { href: "/logistics", label: "物流サービス" },
  { href: "/warehouse", label: "物流拠点" },
  { href: "/company", label: "会社概要" },
  { href: "/international", label: "ENGLISH" },
]

const internationalNavLinks = [
  { href: "/international", label: "HOME" },
  { href: "/international#services", label: "SERVICES" },
  { href: "/international#why-gami", label: "WHY GAMI" },
  { href: "/international#faq", label: "FAQ" },
]

const franchiseNavLinks = [
  { href: "/", label: "トップ" },
  { href: "/headspa-franchise", label: "FC・開業支援" },
  { href: "/company", label: "会社概要" },
  { href: "/logistics", label: "物流事業" },
]

export function Header() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const isInternational =
    pathname.startsWith("/international")

  const isFranchise =
    pathname.startsWith("/headspa-franchise") ||
    pathname.startsWith("/franchise-contact")

  const navLinks = isInternational
    ? internationalNavLinks
    : isFranchise
      ? franchiseNavLinks
      : japaneseNavLinks

  const contactHref = isInternational
    ? "/international/contact"
    : isFranchise
      ? "/franchise-contact"
      : "/company#contact"

  const contactLabel = isInternational
    ? "CONTACT US"
    : isFranchise
      ? "FC開業相談"
      : "無料で物流相談"

  const logoSubtitle = isInternational
    ? "JAPAN FULFILLMENT & 3PL"
    : isFranchise
      ? "BUSINESS & FRANCHISE"
      : "LOGISTICS & FULFILLMENT"

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  function closeMenu() {
    setIsOpen(false)
  }

  function isActive(href: string) {
    if (href.includes("#")) return false

    if (href === "/") {
      return pathname === "/"
    }

    if (href === "/international") {
      return pathname === "/international"
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">

        {/* LOGO */}
        <Link
          href={isInternational ? "/international" : "/"}
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center gap-3"
          aria-label={
            isInternational
              ? "GAMI International Home"
              : "GAMI トップページ"
          }
        >
          <img
            src={
              logoError
                ? "/placeholder-logo.svg"
                : "/images/logo.png"
            }
            alt="GAMI"
            width={44}
            height={44}
            onError={() => setLogoError(true)}
            className="h-11 w-11 shrink-0 rounded-full border border-black/10 object-cover"
          />

          <div className="min-w-0">
            <span className="block text-xl font-black leading-tight tracking-[0.18em] text-zinc-950">
              GAMI
            </span>

            <span className="mt-1 block text-[9px] font-bold tracking-[0.08em] text-zinc-500 sm:text-[10px]">
              {logoSubtitle}
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="メインナビゲーション"
          className="hidden items-center gap-5 lg:flex"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  active ? "page" : undefined
                }
                className={`whitespace-nowrap border-b-2 py-2 text-[13px] font-semibold transition ${
                  active
                    ? "border-amber-500 text-zinc-950"
                    : "border-transparent text-zinc-600 hover:border-amber-300 hover:text-zinc-950"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <Link
            href={contactHref}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-amber-500 px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-amber-400"
          >
            {contactLabel}
            <ArrowUpRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() =>
            setIsOpen((open) => !open)
          }
          aria-label={
            isOpen
              ? "メニューを閉じる"
              : "メニューを開く"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-900 transition hover:bg-zinc-100 lg:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="モバイルナビゲーション"
          className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-black/10 bg-[#f7f7f5] px-4 py-5 shadow-xl lg:hidden"
        >
          <div className="mx-auto max-w-6xl">

            {/* MOBILE CONTACT */}
            <Link
              href={contactHref}
              onClick={closeMenu}
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-4 text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
            >
              {contactLabel}
              <ArrowUpRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>

            {/* MAIN LINKS */}
            <ul className="mt-5 space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.href)

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={
                        active ? "page" : undefined
                      }
                      className={`flex min-h-[52px] items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? "border-amber-300 bg-amber-50 text-zinc-950"
                          : "border-black/10 bg-white text-zinc-700 hover:border-amber-300"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span
                        aria-hidden="true"
                        className="text-amber-700"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* OTHER BUSINESS */}
            {!isInternational && !isFranchise && (
              <div className="mt-7 border-t border-black/10 pt-5">
                <p className="text-[11px] font-bold tracking-[0.18em] text-zinc-500">
                  OTHER BUSINESS
                </p>

                <p className="mt-2 text-xs text-zinc-500">
                  ヘッドスパ・フランチャイズ事業
                </p>

                <Link
                  href="/headspa-franchise"
                  onClick={closeMenu}
                  className="mt-3 flex min-h-[48px] items-center justify-between rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-zinc-700"
                >
                  <span>ヘッドスパFC・開業支援</span>
                  <span
                    aria-hidden="true"
                    className="text-amber-700"
                  >
                    →
                  </span>
                </Link>
              </div>
            )}

            {/* PHONE */}
            {!isInternational && !isFranchise && (
              <a
                href="tel:0661159935"
                className="mt-5 flex min-h-[50px] items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-zinc-900"
              >
                電話で相談：06-6115-9935
              </a>
            )}

            {/* LOGISTICS NETWORK */}
            {!isInternational && !isFranchise && (
              <div className="mt-7 border-t border-black/10 pt-5">
                <p className="text-[10px] font-bold tracking-[0.15em] text-zinc-400">
                  GAMI LOGISTICS NETWORK
                </p>

                <p className="mt-2 text-xs font-bold tracking-[0.08em] text-zinc-700">
                  OSAKA · FUKUOKA · KOBE
                </p>

                <p className="mt-2 text-xs leading-6 text-zinc-500">
                  大阪の自社倉庫「GAMI OSAKA BASE」を主軸に、
                  福岡・神戸の協力ネットワークと連携。
                  小ロットから大規模な物流案件まで、
                  内容に応じた物流体制をご提案します。
                </p>

                <Link
                  href="/warehouse"
                  onClick={closeMenu}
                  className="mt-3 inline-flex min-h-[44px] items-center text-xs font-bold text-amber-800 underline underline-offset-4"
                >
                  大阪の物流拠点を見る →
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
