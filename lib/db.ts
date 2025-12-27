// Simple JSON file-based database for posts
import fs from "fs"
import path from "path"

const dbPath = path.join(process.cwd(), "data", "posts.json")

export interface Post {
  id: string
  title: string
  subtitle: string
  content: string
  coverImage?: string
  status: "draft" | "published"
  slug: string
  seoTitle: string
  seoDescription: string
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

// Ensure data directory exists
function ensureDb() {
  const dir = path.dirname(dbPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([], null, 2))
  }
}

export function getAllPosts(): Post[] {
  ensureDb()
  const data = fs.readFileSync(dbPath, "utf-8")
  return JSON.parse(data)
}

export function getPostById(id: string): Post | null {
  const posts = getAllPosts()
  return posts.find((p) => p.id === id) || null
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug) || null
}

export function createPost(post: Omit<Post, "id" | "createdAt" | "updatedAt">): Post {
  const posts = getAllPosts()
  const newPost: Post = {
    ...post,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  posts.push(newPost)
  fs.writeFileSync(dbPath, JSON.stringify(posts, null, 2))
  return newPost
}

export function updatePost(id: string, updates: Partial<Post>): Post | null {
  const posts = getAllPosts()
  const index = posts.findIndex((p) => p.id === id)
  if (index === -1) return null

  const updated = {
    ...posts[index],
    ...updates,
    updatedAt: new Date().toISOString(),
    id: posts[index].id,
    createdAt: posts[index].createdAt,
  }
  posts[index] = updated
  fs.writeFileSync(dbPath, JSON.stringify(posts, null, 2))
  return updated
}

export function deletePost(id: string): boolean {
  const posts = getAllPosts()
  const filtered = posts.filter((p) => p.id !== id)
  if (filtered.length === posts.length) return false
  fs.writeFileSync(dbPath, JSON.stringify(filtered, null, 2))
  return true
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
