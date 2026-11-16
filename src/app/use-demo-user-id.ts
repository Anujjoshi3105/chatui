import { useState } from "react"

function createUserId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID()
  }

  return `demo-user-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

/** Creates one stable anonymous identity for the lifetime of the demo mount. */
export function useDemoUserId(): string {
  const [userId] = useState(createUserId)
  return userId
}
