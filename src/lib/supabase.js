import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  daily_rate: number;
  available: boolean;
  created_at: string;
};

export type Booking = {
  id: string;
  user_id: string;
  car_id: string;
  start_date: string;
  end_date: string;
  total_amount: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  created_at: string;
  car?: Car;
};