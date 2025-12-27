"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, FileText, Eye, Zap } from "lucide-react"

interface Post {
  id: string
  title: string
  status: "draft" | "published"
  createdAt: string
  publishedAt?: string
}

export default function DashboardPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  const publishedCount = posts.filter((p) => p.status === "published").length
  const draftCount = posts.filter((p) => p.status === "draft").length

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your content overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Posts</p>
              <p className="text-3xl font-bold">{posts.length}</p>
            </div>
            <FileText className="h-12 w-12 text-muted opacity-50" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Published</p>
              <p className="text-3xl font-bold text-primary">{publishedCount}</p>
            </div>
            <Eye className="h-12 w-12 text-primary opacity-50" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Drafts</p>
              <p className="text-3xl font-bold text-accent">{draftCount}</p>
            </div>
            <Zap className="h-12 w-12 text-accent opacity-50" />
          </div>
        </Card>
      </div>

      {/* Recent Posts */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <Link href="/dashboard/write">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading posts...</p>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground mb-4">No posts yet. Start writing!</p>
            <Link href="/dashboard/write">
              <Button>Create Your First Post</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.slice(0, 5).map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div>
                  <p className="font-semibold">{post.title}</p>
                  <p className="text-sm text-muted-foreground">{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.status === "published" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
