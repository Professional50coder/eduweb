"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/eduweb/components/ui/button"
import { Card } from "@/eduweb/components/ui/card"
import { Plus, Edit, Trash2, Eye, EyeOff, Search } from "lucide-react"
import { Input } from "@/eduweb/components/ui/input"

interface Post {
  id: string
  title: string
  status: "draft" | "published"
  createdAt: string
  publishedAt?: string
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filter, setFilter] = useState<"all" | "draft" | "published">("all")
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
        setLoading(false)
      })
  }, [])

  const filteredPosts = posts.filter((post) => {
    const matchesFilter = filter === "all" || post.status === filter
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return

    try {
      await fetch(`/api/posts/${id}`, { method: "DELETE" })
      setPosts(posts.filter((p) => p.id !== id))
    } catch (error) {
      console.error("Delete error:", error)
      alert("Failed to delete post")
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">All Posts</h1>
          <p className="text-muted-foreground">Manage and organize your content</p>
        </div>
        <Link href="/dashboard/write">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="flex gap-4 mb-6 flex-col sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "draft", "published"] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className="capitalize"
            >
              {f === "all" ? "All Posts" : f}
            </Button>
          ))}
        </div>
      </div>

      {/* Posts Table */}
      <Card className="overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground">Loading posts...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            No {filter === "all" ? "posts" : filter + " posts"} found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Created</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{post.title}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          post.status === "published" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {post.status === "published" ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Link href={`/dashboard/write?id=${post.id}`}>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Edit className="h-4 w-4" />
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="gap-1 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  )
}
