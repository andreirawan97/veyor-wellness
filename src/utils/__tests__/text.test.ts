import { v4 as uuidv4 } from "uuid";

import { Booking } from "@/types/common";

import { parseDateToText, renderYourInfoText } from "../text";

describe("utils text tests", () => {
  it("should parse date to text correctly", () => {
    const mockDate: Date = new Date("2025-02-13");

    const expectedResult = "February 13, 2025";

    expect(parseDateToText(mockDate, "MMMM DD, YYYY")).toEqual(expectedResult);
  });

  it("should render your info text correctly", () => {
    const mockBooking: Booking = {
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

    expect(renderYourInfoText(mockBooking)).toEqual(
      "Physiotherapy February 13, 2025 10:00AM"
    );
  });
});
