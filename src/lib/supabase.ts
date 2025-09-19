import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dujzaqaoxlpbbfmvliis.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1anphcWFveGxwYmJmbXZsaWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyODcxNDgsImV4cCI6MjA3Mzg2MzE0OH0.m6gxAVPRSvGeWQfBptoRf5rwgGTTXx82zoEe7CFMU9U'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactQuery {
  id: string
  name: string
  email: string
  company: string
  phone: string
  service_interest: string
  message: string
  status: 'new' | 'in_progress' | 'completed' | 'closed'
  created_at: string
  updated_at: string
}
