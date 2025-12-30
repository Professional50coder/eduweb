"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Navbar from "@/eduweb/components/navbar"
import Footer from "@/eduweb/components/footer"
import { Button } from "@/eduweb/components/ui/button"
import { Card } from "@/eduweb/components/ui/card"
import { Share2, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Post {
  id: string
  title: string
  subtitle: string
  content: string
  coverImage?: string
  createdAt: string
  seoTitle: string
  seoDescription: string
  slug: string
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    // Find post by slug
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        const found = posts.find((p: Post) => p.slug === slug && p.status === "published")
        setPost(found || null)
        setLoading(false)
      })
  }, [slug])

  useEffect(() => {
    if (!post) return

    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setReadingProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [post])

  if (loading) {
    return (
      <main className="min-h-screen bg-background dark">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center text-muted-foreground">Loading article...</div>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-background dark">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/articles">
            <Button variant="outline">Back to articles</Button>
          </Link>
        </div>
      </main>
    )
  }

  const readingTime = Math.ceil(post.content.split(" ").length / 200)

  return (
    <main className="min-h-screen bg-background dark">
      <Navbar />

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ width: `${readingProgress}%` }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/articles">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to articles
          </Button>
        </Link>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="rounded-lg overflow-hidden mb-8 h-96">
            <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readingTime} min read
          </div>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-5xl font-bold mb-4 text-balance">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-8 text-balance">{post.subtitle}</p>

        {/* Share Buttons */}
        <div className="flex gap-2 mb-12 pb-12 border-b border-border">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none prose-lg">
          <div className="whitespace-pre-wrap font-serif leading-relaxed">{post.content}</div>
        </div>

        {/* Article Footer */}
        <Card className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-accent/10">
          <h3 className="text-lg font-bold mb-2">Learn More</h3>
          <p className="text-muted-foreground mb-4">
            Explore more articles and resources about AI on our learning hub.
          </p>
          <Link href="/articles">
            <Button variant="outline">Explore all articles</Button>
          </Link>
        </Card>
      </article>

      <Footer />
    </main>
  )
}
