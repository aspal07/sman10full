import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const images = await db.galleryImage.findMany({
      orderBy: [{ featured: "desc" }, { order: "asc" }],
    });
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery images" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, imageUrl, category, event, date, featured, order } = body;

    const image = await db.galleryImage.create({
      data: {
        title,
        description,
        imageUrl,
        category,
        event,
        date: date ? new Date(date) : null,
        featured: featured || false,
        order: order || 0,
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error("Error creating gallery image:", error);
    return NextResponse.json(
      { error: "Failed to create gallery image" },
      { status: 500 }
    );
  }
}
