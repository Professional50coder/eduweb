"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bold, Italic, List, ListOrdered, Quote, Code, Heading1, Heading2, Save, Eye } from "lucide-react"

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  onSave?: () => void
}

export function RichTextEditor({ content, onChange, onSave }: RichTextEditorProps) {
  const [preview, setPreview] = useState(false)

  const insertMarkdown = (before: string, after = "") => {
    const textarea = document.getElementById("content-textarea") as HTMLTextAreaElement
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selected = content.substring(start, end)
    const newContent = content.substring(0, start) + before + selected + after + content.substring(end)
    onChange(newContent)
  }

  const toolbar = [
    { icon: Heading1, label: "H1", action: () => insertMarkdown("# ") },
    { icon: Heading2, label: "H2", action: () => insertMarkdown("## ") },
    { icon: Bold, label: "Bold", action: () => insertMarkdown("**", "**") },
    { icon: Italic, label: "Italic", action: () => insertMarkdown("_", "_") },
    { icon: Quote, label: "Quote", action: () => insertMarkdown("> ") },
    { icon: List, label: "Bullet", action: () => insertMarkdown("- ") },
    { icon: ListOrdered, label: "List", action: () => insertMarkdown("1. ") },
    { icon: Code, label: "Code", action: () => insertMarkdown("```\n", "\n```") },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {toolbar.map((tool) => (
            <Button
              key={tool.label}
              variant="outline"
              size="sm"
              onClick={tool.action}
              className="gap-2 bg-transparent"
              title={tool.label}
            >
              <tool.icon className="h-4 w-4" />
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setPreview(!preview)} className="gap-2">
            <Eye className="h-4 w-4" />
            {preview ? "Edit" : "Preview"}
          </Button>
          {onSave && (
            <Button onClick={onSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Draft
            </Button>
          )}
        </div>
      </div>

      {!preview ? (
        <textarea
          id="content-textarea"
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-96 p-4 bg-input border border-border rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Start writing your article... Use markdown syntax for formatting."
        />
      ) : (
        <Card className="p-6 prose dark:prose-invert max-w-none">
          <div className="text-foreground whitespace-pre-wrap font-serif text-base leading-relaxed">{content}</div>
        </Card>
      )}
    </div>
  )
}
