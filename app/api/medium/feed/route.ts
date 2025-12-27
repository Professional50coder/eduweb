import { NextResponse } from "next/server"

export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  try {
    const response = await fetch("https://medium.com/feed/@gopanihitansh5", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      next: { revalidate: 3600 },
    })

    const xml = await response.text()

    // Parse RSS feed manually
    const articles = extractArticlesFromXML(xml)

    return NextResponse.json(articles)
  } catch (error) {
    console.error("Error fetching Medium feed:", error)
    // Return fallback articles if feed fetch fails
    return NextResponse.json([
      {
        title: "Getting Started with AI",
        description: "Learn the fundamentals of artificial intelligence and how it's changing the world.",
        link: "https://medium.com/@gopanihitansh5",
        pubDate: new Date().toISOString(),
        image: "/open-book-knowledge.png",
      },
    ])
  }
}

function extractArticlesFromXML(xml: string) {
  const articles = []

  // Extract all item blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemContent = match[1]

    // Extract title
    const titleMatch = itemContent.match(/<title[^>]*>([\s\S]*?)<\/title>/)
    const title = titleMatch ? decodeHTML(titleMatch[1]) : "Untitled"

    // Extract description
    const descMatch = itemContent.match(/<description[^>]*>([\s\S]*?)<\/description>/)
    const description = descMatch ? decodeHTML(stripHTML(descMatch[1])).substring(0, 150) : ""

    // Extract link
    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/)
    const link = linkMatch ? linkMatch[1].trim() : ""

    // Extract pub date
    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
    const pubDate = pubDateMatch ? pubDateMatch[1].trim() : new Date().toISOString()

    // Extract image
    const imageMatch = itemContent.match(/<media:content[^>]*url="([^"]*)"/)
    const image = imageMatch ? imageMatch[1] : "/open-book-knowledge.png"

    if (title && link) {
      articles.push({
        title,
        description,
        link,
        pubDate,
        image,
      })
    }
  }

  return articles.slice(0, 10)
}

function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, "")
}

function decodeHTML(html: string): string {
  const entities: { [key: string]: string } = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  }

  return html.replace(/&[^;]+;/g, (match) => entities[match] || match)
}
