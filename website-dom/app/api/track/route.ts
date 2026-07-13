import { NextRequest, NextResponse } from 'next/server'

// Store views in memory (for demo - in production use a database or service)
const views: Array<{
  path: string
  referrer: string
  timestamp: string
  userAgent?: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const view = {
      path: body.path,
      referrer: body.referrer,
      timestamp: body.timestamp,
      userAgent: request.headers.get('user-agent') || undefined,
    }

    views.push(view)

    // Optional: Send to external analytics service here
    // await sendToAnalyticsService(view)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to track view' }, { status: 400 })
  }
}

// Optional: Endpoint to view tracking stats (remove in production or secure with auth)
export async function GET() {
  return NextResponse.json({
    totalViews: views.length,
    recentViews: views.slice(-10).reverse(),
  })
}
