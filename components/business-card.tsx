"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"

interface BusinessCardProps {
  title: string
  subtitle: string
  description: string
  descriptionItems?: string[]
  href: string
  imageSrc: string
  accentColor: "logistics" | "spa" | "antiques"
}

const accentMap = {
  logistics: "hsl(220 50% 28%)",
  spa: "hsl(38 45% 48%)",
  antiques: "hsl(38 45% 42%)",
}

export function BusinessCard({
  title,
  subtitle,
  description,
  descriptionItems,
  href,
  imageSrc,
  accentColor,
}: BusinessCardProps) {
  const color = accentMap[accentColor]
  const items = descriptionItems ?? [description]

  return (
    <ScrollAnimate className="h-full">
      <Link href={href} className="group block h-full">
        <article className="tech-card flex h-full flex-col overflow-hidden rounded-2xl">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden">
            <div className="absolute inset-[6%]">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                unoptimized={imageSrc?.startsWith('/images/')}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-grow flex-col p-4 sm:p-6">
            <p
              className="text-[10px] font-medium uppercase tracking-[0.2em]"
              style={{ color }}
            >
              {subtitle}
            </p>
            <h3 className="mt-1.5 font-serif text-lg tracking-wider text-foreground break-words">
              {title}
            </h3>
            <ul className="mt-2 flex flex-grow flex-col gap-1.5">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-relaxed tracking-wide text-muted-foreground sm:leading-7">
                  <Check className="mt-1.5 h-4 w-4 shrink-0" style={{ color }} />
                  <span className="text-pretty break-words">{item}</span>
                </li>
              ))}
            </ul>
            <span
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium tracking-wider transition-colors duration-300"
              style={{ color }}
            >
              詳しく見る
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </article>
      </Link>
    </ScrollAnimate>
  )
}
