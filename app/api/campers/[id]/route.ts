import { NextResponse } from "next/server";
import campers from "@/data/campers.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const camper = campers.find((c) => String(c.id) === params.id);

  if (!camper) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(camper);
}