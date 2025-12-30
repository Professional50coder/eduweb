"use client"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface MediumArticle {
  title: string
  description: string
  link: string
  pubDate: string
  image: string
}

export function MediumFlashcard({ article }: { article: MediumArticle }) {
  return (
    <Link href={article.link} target="_blank">
      <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer group">
        {/* Image */}
        <div className="relative h-40 overflow-hidden bg-muted">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute top-3 right-3 px-2 py-1 bg-black/50 rounded text-white text-xs font-medium backdrop-blur">
            Medium
          </span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">{article.description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">{new Date(article.pubDate).toLocaleDateString()}</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </Card>
    </Link>
  )
}
