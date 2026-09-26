"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const japaneseNavLinks = [
  { href: "/", label: "物流トップ" },
  { href: "/logistics", label: "物流サービス" },
  { href: "/warehouse", label: "倉庫紹介" },
  { href: "/company", label: "会社概要" },
  { href: "/other-business", label: "その他事業" },
  { href: "/international", label: "ENGLISH" },
]

const internationalNavLinks = [
  { href: "/international", label: "HOME" },
  { href: "/international#services", label: "SERVICES" },
  { href: "/international#why-gami", label: "WHY GAMI" },
  { href: "/international#faq", label: "FAQ" },
]

const mobileLinkClass =
  "group flex items-center justify-between rounded-2xl border border-black/5 bg-white px-4 py-4 text-[14px] font-semibold leading-6 text-black/75 shadow-sm transition-all duration-300 active:scale-[0.98]"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isInternational = pathname.startsWith("/international")
  const navLinks = isInternational ? internationalNavLinks : japaneseNavLinks

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-black/5 bg-white/95 shadow-lg backdrop-blur-2xl"
          : "border-transparent bg-white/82 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3">
        <Link
          href={isInternational ? "/international" : "/"}
          className="flex min-w-0 items-center gap-2.5"
        >
          <div className="shrink-0 overflow-hidden rounded-full border border-black/5 bg-white p-1 shadow-sm">
            <img
              src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
              alt="GAMI"
              width={38}
              height={38}
              onError={() => setLogoError(true)}
              className="h-[38px] w-[38px] rounded-full object-cover sm:h-[42px] sm:w-[42px]"
            />
          </div>

          <div className="min-w-0 leading-none">
            <span className="block text-[15px] font-bold tracking-[0.14em] text-black sm:text-lg sm:tracking-[0.2em]">
              GAMI
            </span>

            <span className="mt-1 block max-w-[12rem] truncate text-[9px] tracking-[0.04em] text-black/50 sm:max-w-none sm:text-[10px] sm:tracking-[0.10em]">
              {isInternational
                ? "JAPAN FULFILLMENT & 3PL"
                : "大阪の物流倉庫・発送代行"}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const active =
              !link.href.includes("#") &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)))

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-[0.04em] transition-all duration-300 ${
                  active
                    ? "font-semibold text-black"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            )
          })}

          {isInternational ? (
            <Link
              href="/international/contact"
              className="rounded-full bg-amber-500 px-5 py-3 text-xs font-bold tracking-[0.08em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-600"
            >
              CONTACT US
            </Link>
          ) : (
            <>
              <a
                href="tel:0661159935"
                className="rounded-full border border-black/10 px-5 py-3 text-xs font-bold tracking-[0.08em] text-black transition hover:bg-black hover:text-white"
              >
                電話相談
              </a>

              <Link
                href="/company#contact"
                className="rounded-full bg-amber-500 px-5 py-3 text-xs font-bold tracking-[0.08em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-600"
              >
                物流を無料相談
              </Link>
            </>
          )}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-black shadow-sm lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-black/5 bg-[#f8f8f6] px-4 py-4 shadow-2xl sm:px-6 lg:hidden">
          <Link
            href={isInternational ? "/international/contact" : "/company#contact"}
            className="mb-3 flex items-center justify-center rounded-full bg-amber-500 px-4 py-4 text-center text-sm font-bold text-white shadow-lg active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            {isInternational ? "CONTACT US" : "見積りを依頼する"}
          </Link>

          {!isInternational && (
            <a
              href="tel:0661159935"
              className="mb-4 flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-4 text-center text-sm font-bold text-black shadow-sm active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              電話で相談する
            </a>
          )}

          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <span>→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl bg-white px-4 py-4 text-center text-xs font-semibold leading-6 text-black/60 shadow-sm">
            {isInternational
              ? "Warehousing · Fulfillment · Inspection · Packing · Shipping"
              : "発送代行・流通加工・内職作業・倉庫保管に対応"}
          </div>
        </nav>
      )}
    </header>
  )
}
