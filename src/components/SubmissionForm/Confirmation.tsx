import { BookingContext } from "@/context/booking";
import { bookingSelections } from "@/data/booking";
import { parseDateToText } from "@/utils/text";
import { motion } from "framer-motion";
import { useContext } from "react";
import Button from "../Button";
import { FiChevronsRight } from "react-icons/fi";
import Image from "next/image";

export default function Confirmation() {
  const { booking, setBooking } = useContext(BookingContext);

  const handleClickScheduleAnotherAppointment = () => {
    window.location.reload();
  };

  const handleClickReschedule = () => {};

  return (
    <motion.div
      className="flex flex-col md:flex-row w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-3 md:flex-2 flex-col">
        <p className="text-2xl font-bold">
          {bookingSelections[booking.type].name}
        </p>

        <p className="text-2xl text-gray-600">
          {parseDateToText(booking.date, "dddd, MMMM DD, YYYY")}
        </p>

        <p className="text-2xl text-gray-600">{booking.time}</p>

        <div className="flex flex-row my-4">
          <p className="mr-8">Veyor Wellness</p>
          <p>{bookingSelections[booking.type].price}</p>
        </div>

        <div className="flex flex-row mb-4">
          <Button label="Cancel" className="mr-2" />
          <Button label="Reschedule" />
        </div>

        <Button
          className="border-gray-600"
          label="Schedule another Appointment"
          rightIcon={<FiChevronsRight />}
          style={{
            backgroundColor: "white",
            color: "black",
          }}
          onClick={handleClickScheduleAnotherAppointment}
        />
      </div>

      <div className="flex flex-1 flex-col pl-8 border-l border-l-gray-300">
        <p className="text-xl font-bold mb-4">
          Easily book and manage appointments with Veyor Wellness on your phone.
        </p>

        <p className="mb-4">
          Get the mobile app by opening the camera on your phone, and scanning
          this QR code:
        </p>

        <Image
          src={"/qr.png"}
          alt={"QR Code"}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
