"use client"

import { useState } from "react"
import Image from "next/image"

const FALLBACK_IMAGE = "/images/card-seihin.png"

interface SeihinRecordCardProps {
  image: string
  item: string
  voice: string
}

export function SeihinRecordCard({ image, item, voice }: SeihinRecordCardProps) {
  const [src, setSrc] = useState(image)

  return (
    <div className="tech-card flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden bg-muted">
        <div className="absolute inset-[3%]">
          <Image
            src={src}
            alt={item}
            fill
            className="object-contain object-center"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            unoptimized
            onError={() => setSrc(FALLBACK_IMAGE)}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-semibold tracking-wider text-foreground">{item}</h3>
        <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
          「{voice}」
        </p>
      </div>
    </div>
  )
}
