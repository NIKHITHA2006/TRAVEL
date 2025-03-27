/*
  # Car Rental System Schema

  1. New Tables
    - `cars`
      - `id` (uuid, primary key)
      - `make` (text)
      - `model` (text)
      - `year` (integer)
      - `daily_rate` (decimal)
      - `available` (boolean)
      - `created_at` (timestamp)
    - `bookings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `car_id` (uuid, references cars)
      - `start_date` (date)
      - `end_date` (date)
      - `total_amount` (decimal)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Cars table:
      - Anyone can view available cars
      - Only admins can modify cars
    - Bookings table:
      - Users can view and create their own bookings
      - Only admins can view all bookings
*/

-- Create cars table
CREATE TABLE IF NOT EXISTS cars (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  make text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  daily_rate decimal NOT NULL,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  car_id uuid REFERENCES cars NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  total_amount decimal NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_dates CHECK (end_date >= start_date)
);

-- Enable RLS
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Cars policies
CREATE POLICY "Anyone can view available cars"
  ON cars
  FOR SELECT
  USING (true);

-- Bookings policies
CREATE POLICY "Users can view own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Insert sample cars
INSERT INTO cars (make, model, year, daily_rate) VALUES
  ('Toyota', 'Camry', 2024, 50.00),
  ('Honda', 'CR-V', 2024, 65.00),
  ('Tesla', 'Model 3', 2024, 90.00),
  ('Ford', 'Mustang', 2024, 85.00),
  ('BMW', 'X5', 2024, 120.00);