"use client"

export default function FranchiseForm() {
  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const data = {
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          type: formData.get("type"),
          plan: formData.get("plan"),
          area: formData.get("area"),
          message: formData.get("message"),
        }

        const res = await fetch("/api/franchise-contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (res.ok) {
          alert("送信完了しました！")
          e.currentTarget.reset()
        } else {
          alert("送信失敗しました")
        }
      }}
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          お名前
        </label>
        <input
          name="name"
          type="text"
          placeholder="例：山田 太郎"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          会社名 / 屋号
        </label>
        <input
          name="company"
          type="text"
          placeholder="例：株式会社〇〇 / サロン〇〇"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            メールアドレス
          </label>
          <input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            電話番号
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="09012345678"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            希望導入形態
          </label>
          <select
            name="type"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
          >
            <option>選択してください</option>
            <option>ウェット導入プラン</option>
            <option>ドライ導入プラン</option>
            <option>まだ決まっていない</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            希望プラン
          </label>
          <select
            name="plan"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
          >
            <option>選択してください</option>
            <option>FC基本導入プラン</option>
            <option>FCフルサポートプラン</option>
            <option>相談して決めたい</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          開業希望エリア
        </label>
        <input
          name="area"
          type="text"
          placeholder="例：福岡県福岡市 / 大阪府大阪市"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          ご相談内容
        </label>
        <textarea
          name="message"
          rows={6}
          placeholder="例：自宅の一室で開業を検討しています。ウェットとドライどちらが向いているか知りたいです。"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#223451]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[#223451] px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition hover:opacity-95"
      >
        フランチャイズ相談を送信する
      </button>

      <p className="text-xs leading-6 text-slate-500">
        ※送信できない場合は設定（API・Resend）を確認してください
      </p>
    </form>
  )
}
