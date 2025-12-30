"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { RichTextEditor } from "@/components/rich-text-editor"
import { ChevronLeft, Loader2 } from "lucide-react"

interface PostData {
  id?: string
  title: string
  subtitle: string
  content: string
  coverImage: string
  status: "draft" | "published"
  seoTitle: string
  seoDescription: string
}

export default function WritePageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const postId = searchParams.get("id")

  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!!postId)
  const [post, setPost] = useState<PostData>({
    title: "",
    subtitle: "",
    content: "",
    coverImage: "",
    status: "draft",
    seoTitle: "",
    seoDescription: "",
  })

  useEffect(() => {
    if (postId) {
      fetch(`/api/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Failed to load post:", err)
          setLoading(false)
        })
    }
  }, [postId])

  const handleSave = async () => {
    setSaving(true)
    try {
      const url = post.id ? `/api/posts/${post.id}` : "/api/posts"
      const method = post.id ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      })

      if (!response.ok) throw new Error("Failed to save")
      const saved = await response.json()
      setPost(saved)
      alert("Post saved successfully!")
    } catch (error) {
      console.error("Save error:", error)
      alert("Failed to save post")
    } finally {
      setSaving(false)
    }
  }

  const handlePublish = async () => {
    setSaving(true)
    try {
      const response = await fetch(post.id ? `/api/posts/${post.id}` : "/api/posts", {
        method: post.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...post, status: "published", publishedAt: new Date().toISOString() }),
      })

      if (!response.ok) throw new Error("Failed to publish")
      const published = await response.json()
      alert("Post published successfully!")
      router.push("/dashboard/posts")
    } catch (error) {
      console.error("Publish error:", error)
      alert("Failed to publish post")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">{post.id ? "Edit Post" : "Write New Post"}</h1>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              {post.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card className="p-6">
              <label className="text-sm font-semibold mb-2 block">Post Title</label>
              <Input
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                placeholder="Enter your post title"
                className="text-2xl font-bold"
              />
            </Card>

            {/* Subtitle */}
            <Card className="p-6">
              <label className="text-sm font-semibold mb-2 block">Subtitle / Excerpt</label>
              <Input
                value={post.subtitle}
                onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
                placeholder="Brief description of your post (shown in listings)"
                className="text-base"
              />
            </Card>

            {/* Rich Text Editor */}
            <Card className="p-6">
              <label className="text-sm font-semibold mb-4 block">Content</label>
              <RichTextEditor
                content={post.content}
                onChange={(content) => setPost({ ...post, content })}
                onSave={handleSave}
              />
            </Card>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            {/* Cover Image */}
            <Card className="p-6">
              <label className="text-sm font-semibold mb-3 block">Cover Image URL</label>
              <Input
                value={post.coverImage}
                onChange={(e) => setPost({ ...post, coverImage: e.target.value })}
                placeholder="https://example.com/image.jpg"
                className="text-sm"
              />
              {post.coverImage && (
                <div className="mt-4 rounded-lg overflow-hidden h-32 bg-muted">
                  <img src={post.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
                </div>
              )}
            </Card>

            {/* SEO Settings */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">SEO Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold mb-1 block text-muted-foreground">Meta Title</label>
                  <Input
                    value={post.seoTitle}
                    onChange={(e) => setPost({ ...post, seoTitle: e.target.value })}
                    placeholder="SEO title"
                    className="text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 block text-muted-foreground">Meta Description</label>
                  <textarea
                    value={post.seoDescription}
                    onChange={(e) => setPost({ ...post, seoDescription: e.target.value })}
                    placeholder="SEO description (max 160 chars)"
                    maxLength={160}
                    className="w-full h-20 p-2 text-xs bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{post.seoDescription.length}/160</p>
                </div>
              </div>
            </Card>

            {/* Publish Actions */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="font-semibold mb-4">Publishing</h3>
              <div className="space-y-3">
                <Button
                  onClick={handleSave}
                  disabled={saving || !post.title || !post.content}
                  variant="outline"
                  className="w-full gap-2 bg-transparent"
                >
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  Save as Draft
                </Button>
                <Button
                  onClick={handlePublish}
                  disabled={saving || !post.title || !post.content}
                  className="w-full gap-2"
                >
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {post.id && post.status === "published" ? "Update & Publish" : "Publish Post"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
