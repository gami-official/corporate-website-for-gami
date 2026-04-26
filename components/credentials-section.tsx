"use client"

import { ShieldCheck } from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"

const credentials = [
  "遺品整理士 / 生前整理アドバイザー",
  "第一種衛生管理者",
  "運行管理者（貨物）",
  "第一種貨物利用運送事業（貨物自動車運送／近運自貨第1190号）",
  "化粧品製造業許可認証倉庫（許可番号 27CZ201072）",
  "古物商 大阪府公安委員会許可 第62229R076690号",
  "インボイス登録番号 T9120001277055",
]

export function CredentialsSection() {
  return (
    <section className="border-t border-border bg-secondary/50 py-12 px-4 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollAnimate className="mb-10 text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-gold">
            保有資格
          </p>
          <h2 className="mt-3 font-serif text-xl tracking-[0.08em] text-foreground sm:text-2xl md:text-3xl text-balance leading-relaxed">
            資格・許可
          </h2>
        </ScrollAnimate>
        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((item, i) => (
            <ScrollAnimate key={item} delay={i * 0.1}>
              <div className="tech-card flex items-start gap-3 rounded-xl px-4 py-4 sm:px-5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-loose tracking-readable text-foreground">{item}</span>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  )
}
