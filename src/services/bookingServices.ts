// This is mock API service
import { STORAGE_KEY } from "@/constants/storage";
import { Booking } from "@/types/common";
import { getFromStorage, setToStorage } from "@/utils/storage";

export const bookingAPI = {
  addNewBooking: async (booking: Booking) => {
    const existingBookings: Array<Omit<Booking, "formState">> = JSON.parse(
      getFromStorage(STORAGE_KEY.data) ?? "[]"
    );

    const _booking = { ...booking };
    // @ts-expect-error Unsure why the object that wants to be deleted needs to be optional now.
    delete _booking["formState"];

    existingBookings.push(_booking);

    setToStorage(STORAGE_KEY.data, JSON.stringify(existingBookings));
  },
};
