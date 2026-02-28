"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { IMAGES } from "@/lib/images"

interface Slide {
  copy: string
  sub: string
  cta: string
  ctaHref: string
  posterSrc: string
  videoSrc?: string
  accentHsl: string
}

const slides: Slide[] = [
  {
    copy: "",
    sub: "",
    cta: "",
    ctaHref: "/",
    posterSrc: IMAGES.heroLogistics,
    videoSrc: "/video/hero-logistics.mp4",
    accentHsl: "216 54% 23%",
  },
  {
    copy: "繋ぐ。",
    sub: "確実な物流設計と輸送で、ビジネスを止めない。",
    cta: "運送物流事業を見る",
    ctaHref: "/logistics",
    posterSrc: IMAGES.heroLogistics,
    videoSrc: undefined,
    accentHsl: "216 54% 23%",
  },
  {
    copy: "癒す。",
    sub: "癒しの極みをプロデュース。",
    cta: "ヘッドスパ事業を見る",
    ctaHref: "/school",
    posterSrc: IMAGES.heroSpa,
    videoSrc: undefined,
    accentHsl: "27 36% 35%",
  },
  {
    copy: "想う。",
    sub: "大切な方の想い出に、心を込めて寄り添います。整理・片付けから供養の手配まで、安心してお任せください。",
    cta: "整理買取事業を見る",
    ctaHref: "/seihin",
    posterSrc: IMAGES.heroSeihin,
    videoSrc: undefined,
    accentHsl: "45 87% 38%",
  },
]

const INTERVAL = 6000

export function HeroVideoSlider() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX = useRef(0)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 800)
    },
    [isTransitioning],
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  // Auto-play
  useEffect(() => {
    timerRef.current = setTimeout(next, INTERVAL)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, next])

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  return (
    <section
      className="relative h-[calc(100vh-57px)] min-h-[60vh] max-h-[80vh] w-full max-w-full overflow-hidden sm:max-h-none"
      aria-label="ヒーロースライダー"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 60) {
          diff > 0 ? next() : prev()
        }
      }}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.copy}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
        >
          {/* Video or poster fallback */}
          {slide.videoSrc ? (
            <div className="absolute inset-[3%] flex items-center justify-center overflow-hidden">
              <video
                className="h-full w-full max-h-full max-w-full object-contain object-center"
              src={slide.videoSrc}
              poster={slide.posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => {
                // 動画のメタデータが読み込まれたら、3秒後に開始
                const video = e.currentTarget
                video.currentTime = 3
              }}
              onTimeUpdate={(e) => {
                // 動画が終了に近づいたら、最後の部分を確実に表示
                const video = e.currentTarget
                if (video.duration && video.currentTime >= video.duration - 0.5) {
                  // 最後の0.5秒前になったら、最後の部分を確実に表示
                  video.currentTime = Math.max(3, video.duration - 2)
                }
              }}
              onEnded={(e) => {
                // 動画が終了したら、最後の部分から再開
                const video = e.currentTarget
                if (video.duration) {
                  video.currentTime = Math.max(3, video.duration - 2)
                  video.play()
                }
              }}
              onError={(e) => {
                // 動画が読み込めない場合は画像にフォールバック
                const video = e.currentTarget
                const parent = video.parentElement
                if (parent) {
                  video.style.display = 'none'
                  const img = document.createElement('img')
                  img.src = slide.posterSrc || IMAGES.placeholder
                  img.className = 'h-full w-full max-h-full max-w-full object-contain object-center'
                  img.alt = ''
                  img.style.cssText = 'max-width:100%;max-height:100%;height:auto'
                  parent.appendChild(img)
                }
              }}
            />
            </div>
          ) : (
            <div className="absolute inset-[3%] flex items-center justify-center overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={slide.posterSrc || IMAGES.placeholder}
                  alt=""
                  fill
                  className="object-contain object-center"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  priority={i === 0}
                  unoptimized={slide.posterSrc?.startsWith('/images/')}
                />
              </div>
            </div>
          )}

          {/* Overlay - 白文字を読みやすく */}
          <div className="absolute inset-0 bg-black/20" aria-hidden />

          {/* Content - 動画スライドの場合は非表示 */}
          {slide.videoSrc && !slide.copy ? null : (
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
              <div
                className={`flex flex-col items-center text-center transition-all duration-700 ${
                  slide.copy === "癒す。"
                    ? "gap-3 sm:gap-4"
                    : "gap-5 sm:gap-6 md:gap-7"
                }`}
              >
                <h1
                  className={`font-serif text-4xl tracking-[0.12em] text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-700 sm:whitespace-nowrap ${
                    i === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.copy}
                </h1>
                <p
                  className={`mx-auto max-w-2xl text-center text-pretty leading-8 tracking-wide text-primary-foreground/85 transition-all duration-700 delay-150 ${
                    slide.copy === "癒す。"
                      ? "text-base sm:text-lg"
                      : "min-h-[3.5rem] text-sm sm:min-h-[4rem] sm:text-base"
                  } ${i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  {slide.sub}
                </p>
                <Link
                  href={slide.ctaHref}
                  className="w-full min-w-[200px] rounded-xl px-8 py-3.5 text-center text-sm font-medium tracking-widest text-white shadow-lg transition-all duration-300 active:scale-95 sm:w-auto sm:min-w-[220px] sm:hover:scale-105 sm:hover:shadow-glass-hover aurora-gradient touch-manipulation"
                  tabIndex={i === current ? 0 : -1}
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Left / Right arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 text-primary-foreground/60 transition-colors hover:text-primary-foreground md:left-8"
        aria-label="前のスライド"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 text-primary-foreground/60 transition-colors hover:text-primary-foreground md:right-8"
        aria-label="次のスライド"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.copy}
            type="button"
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-primary-foreground"
                : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/70"
            }`}
            aria-label={`スライド${i + 1}へ`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground/50">
        <span className="text-[10px] tracking-[0.2em]">スクロール</span>
        <div className="h-6 w-px bg-primary-foreground/30" />
      </div>
    </section>
  )
}
