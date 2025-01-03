import ratelimit from "@/lib/ratelimit";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const ip = req.headers.get("x-forwarded-for");

  //get number of pending requests
  const requests = await ratelimit.getRemaining(ip ?? "");

  return NextResponse.json({ requests: requests.remaining });
}
