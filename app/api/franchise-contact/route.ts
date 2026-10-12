import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

function readText(
  body: Record<string, unknown>,
  key: string,
  maxLength: number
): string {
  const value = body[key]

  if (value === undefined || value === null) {
    return ""
  }

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
  let body: Record<string, unknown>

  try {
    const parsed: unknown = await request.json()

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      Array.isArray(parsed)
    ) {
      throw new Error("INVALID_INPUT")
    }

    body = parsed as Record<string, unknown>
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "入力内容を確認してください。",
      },
      { status: 400 }
    )
  }

  let name: string
  let company: string
  let email: string
  let phone: string
  let type: string
  let plan: string
  let area: string
  let message: string

  try {
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
        message: "お名前・メールアドレス・相談内容を確認してください。",
      },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error("FC contact: RESEND_API_KEY is missing")

    return NextResponse.json(
      {
        success: false,
        message:
          "現在フォームを送信できません。メールまたは電話でご連絡ください。",
      },
      { status: 503 }
    )
  }

    const recipient = "k_fuchigami@gamigami.email"

  try {
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: "GAMI Franchise <contact@gamigami.net>",
      to: [recipient],
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

    if (error) {
      console.error("FC contact: email provider rejected the send")

      return NextResponse.json(
        {
          success: false,
          message:
            "送信できませんでした。再度お試しいただくか、メール・電話でご連絡ください。",
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
    })
  } catch {
    console.error("FC contact: email send failed")

    return NextResponse.json(
      {
        success: false,
        message:
          "送信できませんでした。再度お試しいただくか、メール・電話でご連絡ください。",
      },
      { status: 500 }
    )
  }
}
