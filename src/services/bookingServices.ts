// This is mock API service
import { STORAGE_KEY } from "@/constants/storage";
import { timeSlots } from "@/data/booking";
import { Booking } from "@/types/common";
import { getFromStorage, setToStorage } from "@/utils/storage";

export const bookingAPI = {
  addNewBooking: async (booking: Booking) => {
    let existingBookings: Array<Omit<Booking, "formState">> = JSON.parse(
      getFromStorage(STORAGE_KEY.data) ?? "[]"
    );

    const _booking = { ...booking };
    // @ts-expect-error Unsure why the object that wants to be deleted needs to be optional now.
    delete _booking["formState"];

    // Remove existing data (to accommodate reschedule).
    existingBookings = existingBookings.filter(
      (existingBooking) => existingBooking.id !== booking.id
    );

    existingBookings.push(_booking);

    setToStorage(STORAGE_KEY.data, JSON.stringify(existingBookings));
  },
  getAvailableTimeSlots: async (bookingId: string, selectedDate: string) => {
    const existingBookings: Array<Omit<Booking, "formState">> = JSON.parse(
      getFromStorage(STORAGE_KEY.data) ?? "[]"
    );

    // Filter bookings for the target date
    const filteredExistingBookings = existingBookings.filter(
      (existingBooking) =>
        existingBooking.date === selectedDate &&
        existingBooking.id !== bookingId
    );
    const bookedTimeSlots = filteredExistingBookings.map(
      (existingBooking) => existingBooking.time
    );

    // Filter out booked times
    return timeSlots.filter((time) => bookedTimeSlots.indexOf(time) === -1);
  },
  cancelBooking: async (bookingId: string) => {
    let existingBookings: Array<Omit<Booking, "formState">> = JSON.parse(
      getFromStorage(STORAGE_KEY.data) ?? "[]"
    );

    existingBookings = existingBookings.filter(
      (existingBooking) => existingBooking.id !== bookingId
    );

    setToStorage(STORAGE_KEY.data, JSON.stringify(existingBookings));
  },
};
