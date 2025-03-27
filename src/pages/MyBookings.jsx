import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';

export default function MyBookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  async function fetchBookings() {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          cars (
            make,
            model,
            year
          )
        `)
        .eq('user_id', user.id)
        .order('start_date', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">Loading bookings...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
      <div className="space-y-4">
        {bookings.length === 0 ? (
          <p className="text-gray-500">You haven't made any bookings yet.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {booking.cars.make} {booking.cars.model} ({booking.cars.year})
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {format(new Date(booking.start_date), 'PPP')} - {format(new Date(booking.end_date), 'PPP')}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : booking.status === 'completed'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {booking.status}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Total: ${booking.total_amount}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}