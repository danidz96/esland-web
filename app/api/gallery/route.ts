import galleryInfo from "@/data/meta-gallery.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const edition = Number(searchParams.get("edition") ?? "1");
  const offset = Number(searchParams.get("offset") ?? "0");

  console.log({ offset });

  const editionIndex = edition - 1;
  const editionInfo = galleryInfo[editionIndex];

  const response = JSON.stringify(editionInfo.slice(offset));

  return new NextResponse(response);
}
