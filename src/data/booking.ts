import { BookingSelectionDetail, BookingType } from "@/types/common";

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
