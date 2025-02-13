import { motion } from "framer-motion";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { BookingContext } from "@/context/booking";
import TextInput from "../TextInput";
import Button from "../Button";
import { renderYourInfoText } from "@/utils/text";
import { Booking_UserInfo } from "@/types/common";
import { bookingAPI } from "@/services/bookingServices";

export default function YourInfo() {
  const { booking, setBooking } = useContext(BookingContext);

  const { userInfo } = booking;
  const { email, firstName, lastName, phone } = userInfo;

  const [isEmailError, setEmailError] = useState(false);
  const [isFirstNameError, setFirstNameError] = useState(false);

  const handleChangeFormValue = (
    key: keyof Booking_UserInfo,
    value: string
  ) => {
    const _booking = booking;

    _booking.userInfo[key] = value;

    setBooking({
      ...booking,
      userInfo: {
        ..._booking.userInfo,
      },
    });
  };

  const handleClickChangeAppointment = () => {
    setBooking({
      ...booking,
      formState: {
        ...booking.formState,
        currentStepForm: 0,
      },
    });
  };

  const handleClickContinue = async () => {
    const resetErrorsState = () => {
      setFirstNameError(false);
      setEmailError(false);
    };

    const isFormValid = () => {
      const { userInfo } = booking;
      const { firstName, email } = userInfo;

      const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (!firstName) setFirstNameError(true);
      if (!email.match(EMAIL_REGEX)) setEmailError(true);

      return !isFirstNameError || !isEmailError;
    };

    resetErrorsState();

    if (isFormValid()) {
      await bookingAPI.addNewBooking(booking);

      toast("Successfully make appointment!", {
        type: "success",
      });

      setBooking({
        ...booking,
        formState: {
          ...booking.formState,
          currentStepForm: 2,
        },
      });
    }
  };

  return (
    <motion.div
      className="flex flex-col w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col mb-8">
        <p className="mb-2">{renderYourInfoText(booking)}</p>
        <div
          className="flex flex-row items-center border-b border-b-gray-600 w-fit cursor-pointer"
          onClick={handleClickChangeAppointment}
        >
          <FiChevronsLeft
            color="rgb(75 85 99)"
            style={{
              marginLeft: -2,
            }}
          />
          <p className="text-gray-600">Change</p>
        </div>
      </div>

      <div className="flex flex-row mb-2">
        <p className="font-bold mr-1">Name</p>
        <p className="text-red-600">*</p>
      </div>

      <div className="flex flex-col md:flex-row mb-4">
        <TextInput
          className="flex flex-1 mr-0 mb-2 md:mb-0 md:mr-2"
          placeholder="First Name"
          value={firstName}
          onChangeInput={(value) => {
            handleChangeFormValue("firstName", value);
          }}
          isError={isFirstNameError}
          errorMessage="Your first name cannot be empty!"
          onEnterPressed={handleClickContinue}
        />
        <TextInput
          className="flex flex-1"
          placeholder="Last Name"
          value={lastName}
          onChangeInput={(value) => {
            handleChangeFormValue("lastName", value);
          }}
          onEnterPressed={handleClickContinue}
        />
      </div>

      <p className="font-bold mb-2">Phone</p>
      <TextInput
        className="mb-4"
        value={phone}
        onChangeInput={(value) => {
          handleChangeFormValue("phone", value);
        }}
        onEnterPressed={handleClickContinue}
      />

      <div className="flex flex-row mb-2">
        <p className="font-bold mr-1">Email</p>
        <p className="text-red-600">*</p>
      </div>
      <TextInput
        className="flex-1 mb-4"
        value={email}
        onChangeInput={(value) => {
          handleChangeFormValue("email", value);
        }}
        isError={isEmailError}
        errorMessage="Your email address is invalid!"
        onEnterPressed={handleClickContinue}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          className=""
          label="Continue"
          rightIcon={<FiChevronsRight />}
          onClick={handleClickContinue}
        />
      </motion.div>
    </motion.div>
  );
}
