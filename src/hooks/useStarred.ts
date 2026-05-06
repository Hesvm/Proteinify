'use client'
import { useState, useEffect } from 'react'

const KEY = 'proteinify_starred'

export function useStarred() {
  const [starred, setStarred] = useState<Set<number>>(new Set())

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY)
      if (stored) setStarred(new Set(JSON.parse(stored)))
    } catch {}
  }, [])

  const toggle = (id: number) => {
    setStarred(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      try { localStorage.setItem(KEY, JSON.stringify([...next])) } catch {}
      return next
    })
  }

  const isStarred = (id: number) => starred.has(id)

  return { starred, toggle, isStarred }
}
