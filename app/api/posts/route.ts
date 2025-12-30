import { getAllPosts, createPost, generateSlug } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const posts = getAllPosts()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, subtitle, content, coverImage, status, seoTitle, seoDescription } = await request.json()

    const slug = generateSlug(title)
    const post = createPost({
      title,
      subtitle,
      content,
      coverImage,
      status,
      slug,
      seoTitle,
      seoDescription,
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}
