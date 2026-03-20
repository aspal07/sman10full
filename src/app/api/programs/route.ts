import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const programs = await db.program.findMany({
      orderBy: [{ featured: "desc" }, { order: "asc" }],
    });
    return NextResponse.json(programs);
  } catch (error) {
    console.error("Error fetching programs:", error);
    return NextResponse.json(
      { error: "Failed to fetch programs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, description, content, category, imageUrl, startDate, endDate, featured, order } = body;

    const program = await db.program.create({
      data: {
        title,
        slug,
        description,
        content,
        category,
        imageUrl,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        featured: featured || false,
        order: order || 0,
      },
    });

    return NextResponse.json(program, { status: 201 });
  } catch (error) {
    console.error("Error creating program:", error);
    return NextResponse.json(
      { error: "Failed to create program" },
      { status: 500 }
    );
  }
}
