import { NextResponse } from "next/server";
import campers from "@/data/campers.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const camper = campers.items.find((c) => String(c.id) === id);

  if (!camper) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(camper);
}