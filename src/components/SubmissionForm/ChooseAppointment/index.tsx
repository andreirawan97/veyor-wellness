import { motion } from "framer-motion";
import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { FiChevronsRight } from "react-icons/fi";

import { BookingContext } from "@/context/booking";
import { BookingType } from "@/types/common";
import { bookingSelections } from "@/data/booking";
import { Button, RadioGroup } from "@/components";

import SelectionType from "./SelectionType";

export default function ChooseAppointment() {
  const { booking, setBooking } = useContext(BookingContext);

  const handleChangeBookingDate = (date: Date | null) => {
    if (date) {
      setBooking({
        ...booking,
        date,
      });
    }
  };

  const handleChangeSelectionType = (selectionType: BookingType) => {
    setBooking({
      ...booking,
      type: selectionType,
      formState: {
        ...booking.formState,
        chooseAppointmentMode: "detail",
      },
    });
  };

  const handleClickBookingSelection = () => {
    setBooking({
      ...booking,
      formState: {
        ...booking.formState,
        chooseAppointmentMode: "selection",
      },
    });
  };

  const handleChangeTimeRadio = (value?: string) => {
    if (value) {
      setBooking({
        ...booking,
        time: value,
      });
    }
  };

  const handleClickContinue = () => {
    setBooking({
      ...booking,
      formState: {
        ...booking.formState,
        currentStepForm: 1,
      },
    });
  };

  return (
    <div className="flex w-full">
      {booking.formState.chooseAppointmentMode === "selection" && (
        <motion.div
          className="flex flex-col w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Object.keys(bookingSelections).map((key) => {
            const _key = key as BookingType;

            const { name, duration, price } = bookingSelections[_key];

            return (
              <SelectionType
                key={key}
                name={name}
                caption={`${duration} @ ${price}`}
                onClick={() => {
                  handleChangeSelectionType(_key);
                }}
              />
            );
          })}
        </motion.div>
      )}
      {booking.formState.chooseAppointmentMode === "detail" && (
        <motion.div
          className="flex flex-col w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex flex-col w-full border border-gray-300 p-4 transition-all text-black bg-white mb-8 cursor-pointer"
            onClick={handleClickBookingSelection}
          >
            <div className="flex flex-row justify-between">
              <p className="mb-4 font-bold">
                {bookingSelections[booking.type].name}
              </p>

              <FaChevronDown />
            </div>

            <p>
              {bookingSelections[booking.type].duration} @{" "}
              {bookingSelections[booking.type].price}
            </p>
          </div>

          <DatePicker
            selected={booking.date}
            onChange={handleChangeBookingDate}
            minDate={new Date()}
            inline
          />

          <div className="flex flex-col mt-8 mb-4">
            <p className="mb-2 font-bold">Please select a time</p>

            <RadioGroup
              items={[
                {
                  label: "10:00 AM",
                  value: "10:00AM",
                },
                {
                  label: "10:30 AM",
                  value: "10:30AM",
                },
                {
                  label: "11:00 AM",
                  value: "11:00AM",
                },
                {
                  label: "11:30 AM",
                  value: "11:30AM",
                },
                {
                  label: "12:00 PM",
                  value: "12:00PM",
                },
                {
                  label: "12:30 PM",
                  value: "12:30PM",
                },
                {
                  label: "1:00 PM",
                  value: "1:00PM",
                },
                {
                  label: "1:30 PM",
                  value: "1:30PM",
                },
                {
                  label: "2:00 PM",
                  value: "2:00PM",
                },
                {
                  label: "2:30 PM",
                  value: "2:30PM",
                },
                {
                  label: "3:00 PM",
                  value: "3:00PM",
                },
                {
                  label: "3:30 PM",
                  value: "3:30PM",
                },
                {
                  label: "4:00 PM",
                  value: "4:00PM",
                },
              ]}
              value={booking.time}
              onChangeValue={handleChangeTimeRadio}
            />
          </div>

          {!!booking.time && (
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
          )}
        </motion.div>
      )}
    </div>
  );
}
