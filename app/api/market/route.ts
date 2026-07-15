import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const symbol = req.nextUrl.searchParams.get("symbol") || "MBB";

    const url =
      `${process.env.FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Không lấy được dữ liệu thị trường" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      symbol,
      price: data.c ?? 0,
      change: data.d ?? 0,
      percent: data.dp ?? 0,
      volume: 0,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Lỗi máy chủ",
      },
      {
        status: 500,
      }
    );
  }
}

