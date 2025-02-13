import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { Booking } from "@/types/common";
import { bookingSelections } from "@/data/booking";

dayjs.extend(customParseFormat);

export function parseDateToText(date: Date | string, format: string) {
  return dayjs(date).format(format);
}

export function renderYourInfoText(booking: Booking) {
  return `${bookingSelections[booking.type].name} ${dayjs(booking.date).format(
    "MMMM DD, YYYY"
  )} ${booking.time}`;
}
