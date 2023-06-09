import { createClient } from '@supabase/supabase-js'
import { type Database } from '../types/types'

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_ANON_KEY
)
