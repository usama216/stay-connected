import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import jwt from 'jsonwebtoken'

// Verify admin token
function verifyAdminToken(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  
  if (!token) {
    return null
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any
    return decoded
  } catch (error) {
    return null
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin authentication
    const user = verifyAdminToken(request)
    if (!user || user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = params
    const body = await request.json()
    const { status } = body

    // Validate status
    const validStatuses = ['new', 'in_progress', 'completed', 'closed']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status', message: 'Status must be one of: new, in_progress, completed, closed' },
        { status: 400 }
      )
    }

    // Update contact query status
    const { data, error } = await supabase
      .from('contact_queries')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to update contact query', details: error.message },
        { status: 500 }
      )
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: 'Contact query not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Contact query status updated successfully',
      data: data[0]
    })

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
