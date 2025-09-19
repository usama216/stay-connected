import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided', valid: false },
        { status: 401 }
      )
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any
      
      return NextResponse.json({
        valid: true,
        user: decoded
      })
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid or expired token', valid: false },
        { status: 403 }
      )
    }

  } catch (error) {
    console.error('Token verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
