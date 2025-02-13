"use client";

import { useState } from "react";

import { StepIndicator, SubmissionForm } from "@/components";
import { Booking } from "@/types/common";
import { BookingContext, DEFAULT_BOOKING_STATE } from "@/context/booking";

export default function Home() {
  const [booking, setBooking] = useState<Booking>(DEFAULT_BOOKING_STATE);

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      <main className="w-full min-h-screen flex flex-col items-center p-8">
        <h1 className="text-center">Book a wellness session.</h1>

        <p className="caption text-center my-8">
          Visit one of our expert consultants to get yourself feeling 100%
          again.
        </p>

        <StepIndicator currentStep={booking.formState.currentStepForm} />

        <SubmissionForm currentStep={booking.formState.currentStepForm} />
      </main>
    </BookingContext.Provider>
  );
}
