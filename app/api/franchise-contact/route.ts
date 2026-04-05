import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: "現在フォーム送信機能は調整中です。",
    },
    { status: 200 }
  )
}
