import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    VNINDEX: 1385.2,
    MBB: 28.4,
    HHV: 14.8,
    FPT: 142.5,
    VCB: 98.6,
    updatedAt: new Date().toISOString(),
  });
}
