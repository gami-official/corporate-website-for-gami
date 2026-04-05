import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      company,
      email,
      phone,
      type,
      plan,
      area,
      message,
    } = body

    // 管理者に送るメール
    await resend.emails.send({
      from: "FCお問い合わせ <onboarding@resend.dev>",
      to: ["あなたのメールアドレス@gmail.com"], // ←ここ変える
      subject: "【FC問い合わせ】新しい相談が来ました",
      html: `
        <h2>フランチャイズ問い合わせ</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>会社名:</strong> ${company}</p>
        <p><strong>メール:</strong> ${email}</p>
        <p><strong>電話:</strong> ${phone}</p>
        <p><strong>導入形態:</strong> ${type}</p>
        <p><strong>プラン:</strong> ${plan}</p>
        <p><strong>エリア:</strong> ${area}</p>
        <p><strong>内容:</strong><br/>${message}</p>
      `,
    })

    // 自動返信（ユーザー側）
    await resend.emails.send({
      from: "株式会社GAMI <onboarding@resend.dev>",
      to: [email],
      subject: "【受付完了】フランチャイズお問い合わせありがとうございます",
      html: `
        <p>${name}様</p>
        <p>この度はお問い合わせありがとうございます。</p>
        <p>内容を確認のうえ、順次ご連絡いたします。</p>
        <br/>
        <p>株式会社GAMI</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
