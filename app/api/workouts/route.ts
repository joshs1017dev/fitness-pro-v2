import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const workouts: any[] = []
    return NextResponse.json(workouts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch workouts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { exercises } = body

    const workout = {
      id: Date.now().toString(),
      exercises,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json(workout)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create workout' },
      { status: 500 }
    )
  }
}