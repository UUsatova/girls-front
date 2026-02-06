'use client'

import NeonCursor from './NeonCursor'

export default function CursorProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NeonCursor />
      {children}
    </>
  )
}
