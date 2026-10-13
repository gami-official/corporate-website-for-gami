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
    message = readText(body, "message", 10000)

    if (
      !name ||
      !type ||
      !message ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      /[\r\n]/.test(name) ||
      /[\r\n]/.test(email) ||
      /[\r\n]/.test(type)
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
    console.error("Logistics contact: missing email configuration")

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
      subject: `【GAMI・物流相談】${type}`,
      text: [
        "GAMIサイトから物流の相談が届きました。",
        "",
        `お名前：${name}`,
        `会社名・屋号：${company || "未記入"}`,
        `メール：${email}`,
        `電話番号：${phone || "未記入"}`,
        `相談の種類：${type}`,
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
    console.error("Logistics contact: notification failed")

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
      subject: "【株式会社GAMI】お問い合わせありがとうございます",
      text: [
        `${name} 様`,
        "",
        "このたびは株式会社GAMIへお問い合わせいただき、",
        "誠にありがとうございます。",
        "",
        "物流のご相談を受け付けました。",
        "内容を確認のうえ、担当者よりご連絡いたします。",
        "",
        "追加の情報やご質問がございましたら、",
        "このメールにそのままご返信ください。",
        "お急ぎの場合は、お電話でもご相談いただけます。",
        "",
        "────────────────────",
        "株式会社GAMI",
        "365日、物流を止めない。",
        "まず返す。すぐ動く。",
        "1坪から、スモールビジネスを支える。",
        "",
        "TEL：06-6115-9935",
        `メール：${contactEmail}`,
        "公式サイト：https://www.gamigami.net/",
        "────────────────────",
        "",
        "※このメールはフォーム受付後の自動返信です。",
        "作業の受託・料金・納期を確定するものではありません。",
        "お心当たりがない場合は、お手数ですが上記窓口へお知らせください。",
      ].join("\n"),
    })

    autoReplySent = !autoReply.error && Boolean(autoReply.data?.id)

    if (!autoReplySent) {
      console.error("Logistics contact: auto reply failed")
    }
  } catch {
    console.error("Logistics contact: auto reply failed")
  }

  return NextResponse.json({
    success: true,
    autoReplySent,
  })
}
