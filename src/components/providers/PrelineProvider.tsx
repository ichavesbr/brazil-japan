'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PrelineProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const loadPreline = async () => {
      await import('preline/preline')
      // @ts-ignore
      window.HSStaticMethods.autoInit()
    }

    loadPreline()
  }, [pathname])

  return <>{children}</>
}
