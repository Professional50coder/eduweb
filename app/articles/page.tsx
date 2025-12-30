"use client"

import { useEffect, useState } from "react"
import Navbar from "@/eduweb/components/navbar"
import Footer from "@/eduweb/components/footer"
import { Card } from "@/eduweb/components/ui/card"
import { Input } from "@/eduweb/components/ui/input"
import { MediumFlashcard } from "@/eduweb/components/medium-flashcard"
import { Search, BookOpen } from "lucide-react"

interface Post {
  id: string
  title: string
  subtitle: string
  coverImage?: string
  status: "draft" | "published"
  slug: string
  createdAt: string
}

interface MediumArticle {
  title: string
  description: string
  link: string
  pubDate: string
  image: string
}

export default function ArticlesPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [mediumArticles, setMediumArticles] = useState<MediumArticle[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch("/api/posts").then((res) => res.json()),
      fetch("/api/medium/feed").then((res) => res.json()),
    ]).then(([postsData, articlesData]) => {
      const published = postsData.filter((p: Post) => p.status === "published")
      setPosts(published)
      setMediumArticles(articlesData)
      setLoading(false)
    })
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-background dark">
      <Navbar />

      {/* Header */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-sm font-semibold text-primary">Learning Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore AI Knowledge</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover carefully curated articles and guides about AI, from internal experts and Medium.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="pl-12 py-6 text-base bg-card"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Internal Posts Section */}
        {filteredPosts.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Our Articles</h2>
              <p className="text-muted-foreground">Original content from our team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <a key={post.id} href={`/article/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer group">
                    {post.coverImage && (
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={post.coverImage || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.subtitle}</p>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Medium Section */}
        {mediumArticles.length > 0 && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Latest from Medium</h2>
              <p className="text-muted-foreground">Articles from gopanihitansh5.medium.com</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediumArticles.map((article, index) => (
                <MediumFlashcard key={index} article={article} />
              ))}
            </div>
          </section>
        )}

        {loading && <Card className="p-12 text-center text-muted-foreground">Loading articles...</Card>}

        {!loading && filteredPosts.length === 0 && mediumArticles.length === 0 && (
          <Card className="p-12 text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">No articles found</p>
          </Card>
        )}
      </div>

      <Footer />
    </main>
  )
}
