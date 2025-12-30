"use client"

import { Suspense } from "react"
import WritePageContent from "./write-content"

export default function WritePage() {
  return (
    <Suspense fallback={null}>
      <WritePageContent />
    </Suspense>
  )
}
