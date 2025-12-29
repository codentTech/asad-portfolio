'use client'

import { useEffect, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export function useCursor() {
  const [cursor, setCursor] = useState<CursorPosition>({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursor)
    return () => window.removeEventListener('mousemove', updateCursor)
  }, [])

  return cursor
}

