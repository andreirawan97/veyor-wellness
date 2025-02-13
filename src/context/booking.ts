import { v4 as uuidv4 } from "uuid";
import { createContext, Dispatch, SetStateAction } from "react";

import { Booking } from "@/types/common";
import { parseDateToText } from "@/utils/text";

export const DEFAULT_BOOKING_STATE: Booking = {
  id: uuidv4(),
  formState: {
    chooseAppointmentMode: "selection",
    currentStepForm: 0,
  },
  date: parseDateToText(new Date(), "YYYY-MM-DD"),
  time: "",
  type: "physiotherapy",
  userInfo: {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  },
};

export type BookingContextType = {
  booking: Booking;
  setBooking: Dispatch<SetStateAction<Booking>>;
};

export const BookingContext = createContext<BookingContextType>({
  booking: DEFAULT_BOOKING_STATE,
  setBooking: () => {},
});
