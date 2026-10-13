import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

const contactEmail = "k_fuchigami@gamigami.email"
const sender = "株式会社GAMI <contact@gamigami.net>"

function readText(
  body: Record<string, unknown>,
  key: string,
  maxLength: number
): string {
  const value = body[key]

  if (value === undefined || value === null) return ""

  if (typeof value !== "string") {
    throw new Error("INVALID_INPUT")
  }

  const text = value.trim()

  if (text.length > maxLength) {
    throw new Error("INVALID_INPUT")
  }

  return text
}

export async function POST(request: Request) {
  let name: string
  let company: string
  let email: string
  let phone: string
  let type: string
  let plan: string
  let area: string
  let message: string

  try {
    const parsed: unknown = await request.json()

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      Array.isArray(parsed)
    ) {
      throw new Error("INVALID_INPUT")
    }

    const body = parsed as Record<string, unknown>

    name = readText(body, "name", 100)
    company = readText(body, "company", 200)
    email = readText(body, "email", 254)
    phone = readText(body, "phone", 40)
    type = readText(body, "type", 200)
    plan = readText(body, "plan", 200)
    area = readText(body, "area", 200)
    message = readText(body, "message", 10000)

    if (
      !name ||
      !message ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      /[\r\n]/.test(name) ||
      /[\r\n]/.test(email)
    ) {
      throw new Error("INVALID_INPUT")
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "入力内容を確認してください。",
      },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error("FC contact: missing email configuration")

    return NextResponse.json(
      {
        success: false,
        message:
          "現在フォームを送信できません。メールまたは電話でご連絡ください。",
      },
      { status: 503 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const notification = await resend.emails.send({
      from: sender,
      to: [contactEmail],
      replyTo: email,
      subject: `【GAMI・FC開業相談】${name}様`,
      text: [
        "GAMIサイトからヘッドスパFCの相談が届きました。",
        "",
        `お名前：${name}`,
        `会社名・屋号：${company || "未記入"}`,
        `メール：${email}`,
        `電話番号：${phone || "未記入"}`,
        `希望導入形態：${type || "未定・相談したい"}`,
        `希望プラン：${plan || "未定・相談したい"}`,
        `開業希望エリア：${area || "未定"}`,
        "",
        "ご相談内容",
        "--------------------------------",
        message,
      ].join("\n"),
    })

    if (notification.error || !notification.data?.id) {
      throw new Error("NOTIFICATION_FAILED")
    }
  } catch {
    console.error("FC contact: notification failed")

    return NextResponse.json(
      {
        success: false,
        message:
          "送信できませんでした。メールまたは電話でご連絡ください。",
      },
      { status: 502 }
    )
  }

  let autoReplySent = false

  try {
    const autoReply = await resend.emails.send({
      from: sender,
      to: [email],
      replyTo: contactEmail,
      subject:
        "【株式会社GAMI】ヘッドスパFCのご相談ありがとうございます",
      text: [
        `${name} 様`,
        "",
        "このたびは、ヘッドスパ専門店ゆうの",
        "フランチャイズ・開業支援についてお問い合わせいただき、",
        "誠にありがとうございます。",
        "",
        "開業のご相談を受け付けました。",
        "内容を確認のうえ、株式会社GAMIの担当者よりご連絡いたします。",
        "",
        "希望エリア・開業時期・ご予算など、",
        "追加でお伝えしたいことがございましたら、",
        "このメールにそのままご返信ください。",
        "",
        "────────────────────",
        "株式会社GAMI",
        "ヘッドスパ専門店ゆう FC・開業支援窓口",
        "",
        "TEL：06-6115-9935",
        `メール：${contactEmail}`,
        "FC案内：https://www.gamigami.net/headspa-franchise",
        "ゆう公式サイト：https://www.yuheadspa.net/",
        "────────────────────",
        "",
        "※このメールはフォーム受付後の自動返信です。",
        "加盟契約・導入条件を確定するものではありません。",
        "お心当たりがない場合は、お手数ですが上記窓口へお知らせください。",
      ].join("\n"),
    })

    autoReplySent = !autoReply.error && Boolean(autoReply.data?.id)

    if (!autoReplySent) {
      console.error("FC contact: auto reply failed")
    }
  } catch {
    console.error("FC contact: auto reply failed")
  }

  return NextResponse.json({
    success: true,
    autoReplySent,
  })
}
