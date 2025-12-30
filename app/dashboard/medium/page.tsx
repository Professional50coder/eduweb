"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { MediumFlashcard } from "@/components/medium-flashcard"
import { Rss, Loader2 } from "lucide-react"

interface MediumArticle {
  title: string
  description: string
  link: string
  pubDate: string
  image: string
}

export default function MediumFeedPage() {
  const [articles, setArticles] = useState<MediumArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/medium/feed")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setArticles(data)
        }
        setLoading(false)
      })
      .catch((err) => {
        setError("Failed to fetch Medium feed")
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
            <Rss className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-4xl font-bold">Latest from Medium</h1>
        </div>
        <p className="text-muted-foreground">Automatically fetched from gopanihitansh5.medium.com</p>
      </div>

      {loading ? (
        <Card className="p-12 flex items-center justify-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading articles...
        </Card>
      ) : error ? (
        <Card className="p-8 bg-destructive/10 border-destructive/30 text-destructive">
          <p className="font-semibold mb-2">Error Loading Feed</p>
          <p className="text-sm">{error}</p>
        </Card>
      ) : articles.length === 0 ? (
        <Card className="p-12 text-center text-muted-foreground">
          <Rss className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No articles found</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <MediumFlashcard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
