"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const japaneseNavLinks = [
  { href: "/", label: "トップ" },
  { href: "/logistics", label: "物流サービス" },
  { href: "/warehouse", label: "倉庫紹介" },
  { href: "/headspa-franchise", label: "ヘッドスパFC" },
  { href: "/company", label: "会社概要" },
  { href: "/international", label: "ENGLISH" },
]

const internationalNavLinks = [
  { href: "/international", label: "HOME" },
  { href: "/international#services", label: "SERVICES" },
  { href: "/international#why-gami", label: "WHY GAMI" },
  { href: "/international#faq", label: "FAQ" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const isInternational = pathname.startsWith("/international")
  const isFranchise =
    pathname.startsWith("/headspa-franchise") ||
    pathname.startsWith("/franchise-contact")

  const navLinks = isInternational
    ? internationalNavLinks
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
      : "物流を無料相談"

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href={isInternational ? "/international" : "/"}
          className="flex shrink-0 items-center gap-3"
          aria-label={isInternational ? "GAMI home" : "GAMI トップ"}
        >
          <img
            src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
            alt="GAMI"
            width={42}
            height={42}
            onError={() => setLogoError(true)}
            className="h-10 w-10 rounded-full border border-black/5 object-cover"
          />

          <div>
            <span className="block text-lg font-bold tracking-[0.18em] text-black">
              GAMI
            </span>
            <span className="mt-1 block text-[10px] text-black/55">
              {isInternational
                ? "JAPAN FULFILLMENT & 3PL"
                : "物流・ヘッドスパ開業支援"}
            </span>
          </div>
        </Link>

        <nav
          aria-label="メインナビゲーション"
          className="hidden items-center gap-4 lg:flex"
        >
          {navLinks.map((link) => {
            const active =
              !link.href.includes("#") &&
              (pathname === link.href ||
                (link.href !== "/" &&
                  pathname.startsWith(link.href)))

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap border-b-2 py-2 text-sm transition ${
                  active
                    ? "border-amber-500 font-bold text-black"
                    : "border-transparent text-black/65 hover:border-amber-300 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <Link
            href={contactHref}
            className="whitespace-nowrap rounded-full bg-amber-500 px-5 py-3 text-xs font-bold text-white transition hover:bg-amber-600"
          >
            {contactLabel}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black lg:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="モバイルナビゲーション"
          className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-black/5 bg-[#f8f8f6] px-4 py-5 lg:hidden"
        >
          <Link
            href={contactHref}
            onClick={() => setIsOpen(false)}
            className="mb-4 flex justify-center rounded-full bg-amber-500 px-5 py-4 text-sm font-bold text-white"
          >
            {contactLabel}
          </Link>

          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-4 py-3 text-sm font-semibold text-black/75"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>

          {!isInternational && !isFranchise && (
            <a
              href="tel:0661159935"
              className="mt-4 flex justify-center rounded-full border border-black/10 bg-white px-5 py-4 text-sm font-bold text-black"
            >
              物流の電話相談：06-6115-9935
            </a>
          )}
        </nav>
      )}
    </header>
  )
}
