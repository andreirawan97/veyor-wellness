import { BookingSelectionDetail, BookingType } from "@/types/common";

export const timeSlots = [
  "10:00AM",
  "10:30AM",
  "11:00AM",
  "11:30AM",
  "12:00PM",
  "12:30PM",
  "1:00PM",
  "1:30PM",
  "2:00PM",
  "2:30PM",
  "3:00PM",
  "3:30PM",
  "4:00PM",
];

export const bookingSelections: Record<BookingType, BookingSelectionDetail> = {
  physiotherapy: {
    name: "Physiotherapy",
    duration: "30 minutes",
    price: "$45.00",
  },
  chiro: {
    name: "Chiro",
    duration: "30 minutes",
    price: "$100.00",
  },
  aromaTherapy: {
    name: "Aroma Therapy",
    duration: "30 minutes",
    price: "$45.00",
  },
};
