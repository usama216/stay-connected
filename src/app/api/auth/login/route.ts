import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate admin credentials
    const adminEmail = 'aamjaid@hotmail.com'
    const adminPassword = 'Galaxy786'

    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials', message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        user: 'admin',
        email: adminEmail,
        role: 'admin',
        timestamp: Date.now()
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '24h' }
    )

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        email: adminEmail,
        role: 'admin',
        name: 'Administrator'
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Please try again later' },
      { status: 500 }
    )
  }
}
