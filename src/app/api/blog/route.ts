import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const posts = await db.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, category, imageUrl, featured } = body;

    const post = await db.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        category,
        imageUrl,
        featured: featured || false,
        published: true,
        publishedAt: new Date(),
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
