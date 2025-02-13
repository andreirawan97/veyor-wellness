export type BookingSelectionDetail = {
  name: string;
  duration: string;
  price: string;
};

export type BookingType = "physiotherapy" | "chiro" | "aromaTherapy";

export type Booking_FormState = {
  currentStepForm: number;
  chooseAppointmentMode: "selection" | "detail";
};

export type Booking_UserInfo = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type Booking = {
  id: string;
  formState: Booking_FormState;
  type: BookingType;
  date: Date;
  time: string;
  userInfo: Booking_UserInfo;
};
