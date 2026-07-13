'use client'

import { useEffect } from 'react'

export default function ViewTracker() {
  useEffect(() => {
    // Send view tracking data discreetly
    const trackView = async () => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: window.location.pathname,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
          }),
        })
      } catch (error) {
        // Silently fail - don't interfere with user experience
        console.error('View tracking failed:', error)
      }
    }

    trackView()
  }, [])

  return null
}
