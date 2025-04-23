import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { supabase } from "../../lib/supabase";

const BookingForm: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    setIsLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        toast.error("Please sign in to make a booking");
        return;
      }

      const { error } = await supabase.from("bookings").insert({
        user_id: user.id,
        check_in: checkInDate.toISOString().split("T")[0],
        check_out: checkOutDate.toISOString().split("T")[0],
        adults,
        children,
        rooms,
      });

      if (error) throw error;

      toast.success("Booking request submitted successfully!");

      // Reset form
      setCheckInDate(null);
      setCheckOutDate(null);
      setAdults(2);
      setChildren(0);
      setRooms(1);
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="font-serif text-2xl font-semibold text-primary-950 mb-4">
        Book Your Stay
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Check In
            </label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-primary-500 focus:border-primary-500"
              placeholderText="Select date"
              disabled={isLoading}
            />
          </div>

          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Check Out
            </label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate || new Date()}
              className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-primary-500 focus:border-primary-500"
              placeholderText="Select date"
              disabled={isLoading}
            />
          </div>

          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Adults
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-primary-500 focus:border-primary-500"
              disabled={isLoading}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Children
            </label>
            <select
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-primary-500 focus:border-primary-500"
              disabled={isLoading}
            >
              {[0, 1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Rooms
            </label>
            <div className="flex items-center">
              <select
                value={rooms}
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-primary-500 focus:border-primary-500"
                disabled={isLoading}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-secondary-600 text-primary-950 font-medium py-3 px-6 rounded-sm hover:bg-secondary-500 transition-colors duration-200 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Processing..." : "Check Availability"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingForm;
