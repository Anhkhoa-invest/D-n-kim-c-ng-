import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  return NextResponse.json({
    success: true,
    answer: `🤖 Kim Cương AI đang phân tích:\n\n${prompt},`
  });
}
