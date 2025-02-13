import { v4 as uuidv4 } from "uuid";

import { Booking } from "@/types/common";

import { renderYourInfoText } from "../text";

describe("utils text tests", () => {
  it("should render your info text correctly", () => {
    const MOCK_BOOKING: Booking = {
      id: uuidv4(),
      formState: {
        chooseAppointmentMode: "selection",
        currentStepForm: 0,
      },
      date: "2025-02-13",
      time: "10:00AM",
      type: "physiotherapy",
      userInfo: {
        email: "a@a.com",
        firstName: "a",
        lastName: "",
        phone: "",
      },
    };

    expect(renderYourInfoText(MOCK_BOOKING)).toEqual(
      "Physiotherapy February 13, 2025 10:00AM"
    );
  });

  it("should parse date to text correctly" () => {
    
  })
});
