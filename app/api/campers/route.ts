import { NextResponse } from "next/server";
import campers from "@/data/campers.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const form = searchParams.get("form");

  let items = campers;

  if (form && form !== "all") {
    items = items.filter((c) => c.form === form);
  }

  return NextResponse.json({
    items,
    total: items.length,
  });
}