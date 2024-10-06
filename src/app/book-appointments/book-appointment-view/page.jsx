"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarPlus, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { addBookAppointment } from "@/redux/reducers/booAppointment/bookAppointment";
import Image from "next/image";

export default function BookAppointmentView() {
  const [dateChoose, setDateChoose] = useState(new Date().toDateString());
  const [timeChoose, setTimeChoose] = useState("");
  const doctor = useSelector((state) => state.doctorReducer.doctor);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    const getDayOfWeek = (date) => {
      return new Date(date).toLocaleDateString("en-US", { weekday: "short" });
    };

    const dayOfWeek = getDayOfWeek(dateChoose);
    setAppointmentDate(dayOfWeek);
  }, [dateChoose]);

  // handle data set
  const onClickProccess = () => {
    const bookAppointmentData = {
      appointment_date: dateChoose,
      appointment_time: timeChoose?.time,
      patient: {
        name: user?.userName,
        id: user?.email,
        img: user.photo ? user.photo : "fhdsfjdsjilfjasdlfj",
      },
      doctor: {
        name: doctor.name,
        img: doctor.img,
        id: doctor.doctorId,
      },
    };

    dispatch(addBookAppointment(bookAppointmentData));
  };

  return (
    <div className=" p-5 mt-5 ">
      {/* header */}
      <div className=" border rounded-md p-5 bg-gray-50 flex items-center gap-5">
        <div className=" relative overflow-hidden w-24 h-24 rounded-md bg-blue-100 ">
          <Image
            src={doctor.img}
            alt={doctor.img}
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded-md  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-[18px] font-[600] ">{doctor.name}</p>
          <div className=" text-[16px] font-[500] flex items-center gap-2 ">
            <div className=" flex items-center gap-1 ">
              <FaStar className=" text-[16px] text-yellow-500 " />
              <FaStar className=" text-[16px] text-yellow-500 " />
              <FaStar className=" text-[16px] text-yellow-500 " />
              <FaStar className=" text-[16px] text-yellow-500 " />
            </div>
            <span>{doctor.rating}</span>
          </div>
          <p className=" flex items-center -ml-1 gap-1 ">
            <MdLocationOn className=" text-xl text-gray-500 " />
            <span className=" text-[16px] ">{doctor.location}</span>
          </p>
        </div>
      </div>

      <div className=" mt-8 flex sm:flex-row flex-col sm:items-center gap-5 sm:gap-0 justify-between">
        <div>
          <p className=" text-[16px] font-[600] ">
            {new Date().toDateString()}
          </p>
        </div>

        {/* choose appointment date */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" w-full px-4 py-2 flex items-center gap-4 rounded-md border sm:w-[320px] "
          >
            <FaCalendarPlus className=" text-xl text-gray-500 " />
            <DatePicker
              value={dateChoose}
              onChange={(date) => setDateChoose(new Date(date).toDateString())}
              className=" w-full sm:w-auto focus:outline-none focus:border-none bg-transparent "
            />
          </div>
        </div>
      </div>

      <div className=" border  rounded-md p-5 mt-10 ">
        <div className=" w-full lg:relative">
          <div className=" w-full mb-5 lg:hidden flex items-center justify-between ">
            <button className=" p-1 rounded-full hover:border ">
              <IoIosArrowBack className=" text-2xl " />
            </button>
            <button className=" p-1 rounded-full hover:border ">
              <IoIosArrowForward className=" text-2xl " />
            </button>
          </div>

          {/* days */}
          <div className=" lg:flex items-center justify-between grid sm:grid-cols-4 px-2 lg:px-0 grid-cols-2 gap-3 ">
            <p
              className={`${
                appointmentDate === "Mon"
                  ? "text-center border font-semibold bg-blue-500 text-white "
                  : ""
              }  rounded-md px-3 py-2 `}
            >
              MON
            </p>

            <p
              className={`${
                appointmentDate === "Tue"
                  ? "text-center font-semibold bg-blue-500 border text-white "
                  : ""
              }  rounded-md px-3 py-2 `}
            >
              TUE
            </p>

            <p
              className={`${
                appointmentDate === "Wed"
                  ? "text-center font-semibold bg-blue-500 border text-white "
                  : ""
              }  rounded-md px-3 py-2 `}
            >
              WED
            </p>

            <p
              className={`${
                appointmentDate === "Thu"
                  ? "text-center font-semibold bg-blue-500 border text-white "
                  : ""
              }  rounded-md px-3 py-2 `}
            >
              THU
            </p>

            <p
              className={`${
                appointmentDate === "Fri"
                  ? "text-center font-semibold bg-blue-500 border text-white "
                  : ""
              }  rounded-md px-3 py-2 `}
            >
              FRI
            </p>

            <p
              className={`${
                appointmentDate === "Sat"
                  ? "text-center font-semibold bg-blue-500 border text-white "
                  : ""
              }  rounded-md px-3 py-2 `}
            >
              SAT
            </p>

            <p
              className={`${
                appointmentDate === "Sun"
                  ? "text-center font-semibold bg-blue-500 border text-white "
                  : ""
              } rounded-md px-3 py-2 `}
            >
              SUN
            </p>
          </div>
        </div>

        <div className=" mt-5 mb-5 border-t "></div>

        {/* times */}
        <div className=" grid sm:grid-cols-4 grid-cols-2 lg:grid-cols-8 gap-5 ">
          {[...times].map((item, idx) => (
            <button
              key={idx + 1}
              onClick={() => setTimeChoose(item)}
              className={` px-4 py-3 ${
                item.id === timeChoose.id
                  ? "text-center font-semibold bg-blue-500 text-white "
                  : "bg-gray-100"
              } transition-all duration-200 hover:bg-white hover:text-black rounded-md border  text-black font-[600] text-[16px] `}
            >
              {item.time}
            </button>
          ))}
        </div>
      </div>

      <div className=" w-full flex justify-end mt-8 ">
        <Link
          href="/payment/patient"
          onClick={onClickProccess}
          className=" w-full sm:w-[300px] btn text-[16px] btn-accent text-white "
        >
          Proceed to Pay
        </Link>
      </div>
    </div>
  );
}

// times data
const times = [
  { id: 1, time: "9:00 AM" },
  { id: 2, time: "9:30 AM" },
  { id: 3, time: "10:00 AM" },
  { id: 4, time: "10:30 AM" },
  { id: 5, time: "11:00 AM" },
  { id: 6, time: "11:30 AM" },
  { id: 7, time: "12:00 PM" },
  { id: 8, time: "12:30 PM" },
  { id: 9, time: "1:00 PM" },
  { id: 10, time: "1:30 PM" },
  { id: 11, time: "2:00 PM" },
  { id: 12, time: "2:30 PM" },
  { id: 13, time: "3:00 PM" },
  { id: 14, time: "3:30 PM" },
  { id: 15, time: "4:00 PM" },
  { id: 16, time: "4:30 PM" },
  { id: 17, time: "5:00 PM" },
  { id: 18, time: "5:30 PM" },
  { id: 19, time: "6:00 PM" },
  { id: 20, time: "6:30 PM" },
];
