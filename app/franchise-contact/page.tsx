import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  FileText,
  CircleCheck,
  TrendingUp,
  Wallet,
  Crown,
} from "lucide-react"
import FranchiseForm from "./franchise-form"

export const metadata: Metadata = {
  title: "ヘッドスパ専門店ゆう フランチャイズ無料相談 | 株式会社GAMI",
  description:
    "未経験からでも高単価モデルを目指せる、ヘッドスパ専門店ゆうのフランチャイズ無料相談ページ。自宅・マンション・空きスペース活用の開業相談、資料請求、導入相談を受け付けています。",
  alternates: {
    canonical: "/franchise-contact",
  },
}

const consultationPoints = [
  "自分に合う導入形態はウェットかドライか知りたい",
  "どれくらいの費用で始められるか知りたい",
  "自宅・マンション・空きスペースでも可能か相談したい",
  "ホームページ制作まで依頼するべきか相談したい",
  "まずは資料だけ見て検討したい",
]

const recommendedFor = [
  "未経験から美容ビジネスを始めたい方",
  "低コストで開業したい方",
  "自宅や空きスペースを収益化したい方",
]

const achievementCards = [
  {
    icon: TrendingUp,
    title: "本店 初年度売上",
    value: "760万円",
    description: "子育てをしながらでも成立した実店舗モデル。",
  },
  {
    icon: Crown,
    title: "2年目以降",
    value: "年商1000万円超",
    description: "高単価 × 少人数制で安売りに頼らない設計。",
  },
  {
    icon: Wallet,
    title: "ワンオーナー最高月商",
    value: "200万円以上",
    description: "1日3名限定でも売上を作れる仕組み。",
  },
]

export default function FranchiseContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f8f6f2]">
        <section className="relative overflow-hidden bg-[#223451] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/headspa-franchise"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              フランチャイズページに戻る
            </Link>

            <div className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs tracking-[0.18em] text-white/90">
              FRANCHISE CONTACT
            </div>

            <h1 className="mt-6 font-serif text-3xl leading-[1.25] tracking-[0.05em] sm:text-5xl">
              未経験でも月商100万超えを
              <br className="hidden sm:block" />
              目指せる
              <br className="sm:hidden" />
              ヘッドスパ専門店ゆう
              <br className="hidden sm:block" />
              フランチャイズ無料相談
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-white/85 sm:text-base">
              自宅・マンション・空きスペースでも開業可能。
              低コスト × 高単価（平均客単価3万円）モデルを目指せる
              ヘッドスパ専門店ゆうのフランチャイズについて、
              無料相談・資料請求・導入相談を受け付けています。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90">
                先着5社限定で個別相談を受付中
              </div>
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90">
                ウェット / ドライ両対応
              </div>
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90">
                自宅開業・省スペース開業も相談可
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {achievementCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[30px] bg-[#223451] p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="mt-5 text-sm text-white/70">{item.title}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[0.03em]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
                <h2 className="text-xl font-medium tracking-[0.04em] text-[#223451]">
                  こんな方におすすめ
                </h2>
                <div className="mt-5 space-y-4">
                  {recommendedFor.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#c89b55]" />
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
                <h2 className="text-xl font-medium tracking-[0.04em] text-[#223451]">
                  こんなご相談が多いです
                </h2>
                <div className="mt-5 space-y-4">
                  {consultationPoints.map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c89b55]" />
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
                <h2 className="text-xl font-medium tracking-[0.04em] text-[#223451]">
                  他の相談方法
                </h2>

                <div className="mt-6 space-y-4">
                  <a
                    href="https://lin.ee/3QGIdCY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-[#223451]" />
                      <div>
                        <p className="text-sm font-medium text-[#223451]">
                          LINEで相談
                        </p>
                        <p className="text-xs text-slate-500">
                          気軽に相談したい方向け
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:0661159935"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#223451]" />
                      <div>
                        <p className="text-sm font-medium text-[#223451]">
                          電話で相談
                        </p>
                        <p className="text-xs text-slate-500">
                          すぐに話したい方向け
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="inline-flex rounded-full bg-[#f4efe7] px-4 py-1.5 text-xs font-medium tracking-[0.08em] text-[#223451]">
                ＼ 先着5社限定 ／ 無料個別相談受付中
              </div>

              <div className="mt-5 flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#223451]" />
                <h2 className="text-xl font-medium tracking-[0.04em] text-[#223451]">
                  無料相談フォーム
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                開業方法、必要資金、ウェット / ドライの向き不向きなど、
                現状に合わせて個別にご案内します。無理な営業は行いません。
              </p>

              <div className="mt-6 rounded-2xl bg-[#f8f6f2] p-4">
                <p className="text-sm font-medium text-[#223451]">
                  このフォームでわかること
                </p>
                <ul className="mt-3 space-y-2 text-xs leading-6 text-slate-600">
                  <li>・あなたに合う開業スタイル</li>
                  <li>・必要な初期費用の目安</li>
                  <li>・本店モデルをどう再現できるか</li>
                </ul>
              </div>

              <FranchiseForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
