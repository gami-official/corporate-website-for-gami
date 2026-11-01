"use client"

import { useEffect, useRef, useState } from "react"

export function MetricsBar({ language = "ja" }: { language?: "ja" | "en" }) {
  const origin = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const isEnglish = language === "en"
  const metrics = isEnglish
    ? [{ value: "100", unit: "tsubo", label: "Osaka warehouse" }, { value: "1", unit: "tsubo+", label: "Flexible storage" }, { value: "365", unit: "days", label: "Year-round support" }]
    : [{ value: "100", unit: "坪", label: "大阪自社倉庫・約" }, { value: "1", unit: "坪〜", label: "小ロット保管" }, { value: "365", unit: "日", label: "土日祝も対応" }]

  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      const passed = (origin.current?.getBoundingClientRect().bottom ?? Infinity) <= 0
      const footer = document.querySelector("footer")
      const atFooter = footer ? footer.getBoundingClientRect().top <= window.innerHeight : false
      setVisible(passed && !atFooter)
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <>
    <section ref={origin} aria-label={isEnglish ? "GAMI at a glance" : "GAMIの物流対応力"} className="bg-[#0b0b0b] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/20 border-t border-white/15 px-2 py-6 sm:px-6 sm:py-9">
        {metrics.map(item => <div key={item.value} className="min-w-0 px-1 text-center sm:px-5">
          <p className="whitespace-nowrap text-[clamp(1.5rem,5vw,2.8rem)] font-bold leading-none tabular-nums">{item.value}<span className="ml-1 text-[10px] font-semibold text-amber-400 sm:text-sm">{item.unit}</span></p>
          <p className="mt-2 whitespace-nowrap text-[9px] leading-4 text-white/70 min-[375px]:text-[10px] sm:text-xs">{item.label}</p>
        </div>)}
      </div>
    </section>
    {visible && <aside aria-label={isEnglish ? "Quick logistics contact" : "物流相談へのショートカット"} className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-400/30 bg-zinc-950/95 text-white shadow-[0_-6px_24px_rgba(0,0,0,0.15)] backdrop-blur-md md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <a href={isEnglish ? "/international/contact" : "/company#contact"} className="grid min-h-[64px] grid-cols-3 divide-x divide-white/20 px-2 py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400">
        {metrics.map(item => <span key={item.value} className="flex min-w-0 flex-col items-center justify-center px-1">
          <span className="whitespace-nowrap text-xl font-bold leading-6 tabular-nums">{item.value}<span className="ml-1 text-[9px] text-amber-400">{item.unit}</span></span>
          <span className="mt-1 whitespace-nowrap text-[9px] leading-4 text-white/75">{item.label}</span>
        </span>)}
        <span className="sr-only">{isEnglish ? "Contact GAMI" : "物流の相談フォームへ"}</span>
      </a>
    </aside>}
  </>
}
