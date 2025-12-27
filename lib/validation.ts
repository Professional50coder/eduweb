export function validatePost(post: any) {
  const errors: string[] = []

  if (!post.title || post.title.trim().length === 0) {
    errors.push("Title is required")
  }

  if (post.title && post.title.length > 200) {
    errors.push("Title must be less than 200 characters")
  }

  if (!post.content || post.content.trim().length === 0) {
    errors.push("Content is required")
  }

  if (post.seoTitle && post.seoTitle.length > 60) {
    errors.push("SEO title must be less than 60 characters")
  }

  if (post.seoDescription && post.seoDescription.length > 160) {
    errors.push("SEO description must be less than 160 characters")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .substring(0, 50)
}
