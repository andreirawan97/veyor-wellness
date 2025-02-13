import { Booking } from "./common";

export type BookingsFromAPI = Omit<Booking, "formState">;
