"use client";

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import axiosSecure from "@/Hooks/userAxiosSecure";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";

export default function PatientPayment() {
  const doctor = useSelector((state) => state.doctorReducer.doctor);
  const bookAppointmentDetails = useSelector(
    (state) => state.bookAppointmentReducer.bookAppointment
  );
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/create-appointment", {
        ...bookAppointmentDetails,
      });
      if (res.data) {
        document.getElementById("my_modal_3").showModal();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ProtectedRoute>
      <div className=" w-full p-5 mt-5 ">
        {/* booking doctor details */}
        <div className="rounded-md border ">
          <p className=" p-5 sm:text-[18px] font-[500] text-[16px] ">
            Booking Summary
          </p>

          <div className=" w-full mb-5 border-t "></div>

          {/* displaying details */}
          <div className="p-5">
            <div className=" flex sm:flex-row flex-col gap-4 ">
              <div className=" relative overflow-hidden w-full h-[200px] lg:w-16 lg:h-16 sm:w-20 sm:h-20 rounded-md ">
                <Image
                  src={doctor.img}
                  alt={doctor.img}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="rounded-md "
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className=" text-[16px] font-[600] ">{doctor.name}</p>
                <div className=" flex items-center gap-1 ">
                  <FaStar className=" text-[18px] text-yellow-500 " />
                  <FaStar className=" text-[18px] text-yellow-500 " />
                  <FaStar className=" text-[18px] text-yellow-500 " />
                  <FaStar className=" text-[18px] text-yellow-500 " />
                  <FaStar className=" text-[18px] text-gray-300 " />
                  <p className="ml-2">{doctor.rating}</p>
                </div>
                <p className=" flex items-center gap-1 ">
                  <span>
                    <MdLocationOn className=" text-[18px] text-gray-500 " />
                  </span>
                  <span>{doctor.location}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <p className=" flex items-center gap-1 ">
                <span className="text-[16px] font-[500] ">Date : </span>
                <span className=" text-[16px] text-gray-500 ">
                  20 Aug, 2024
                </span>
              </p>
              <p className=" flex items-center gap-1 ">
                <span className="text-[16px] font-[500] ">Time : </span>
                <span className=" text-[16px] text-gray-500 ">11:00 AM</span>
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5 ">
              <p className="flex items-center justify-between w-full">
                <span className=" text-[16px] font-[500] ">Consulting Fee</span>
                <span className=" text-[16px] text-gray-500 ">$100</span>
              </p>
              <p className="flex items-center justify-between w-full">
                <span className=" text-[16px] font-[500] ">Booking Fee</span>
                <span className=" text-[16px] text-gray-500 ">$10</span>
              </p>
              <p className="flex items-center justify-between w-full">
                <span className=" text-[16px] font-[500] ">Video Call</span>
                <span className=" text-[16px] text-gray-500 ">$50</span>
              </p>

              <div className=" border-t w-full "></div>

              <p className="flex items-center justify-between w-full">
                <span className=" text-[16px] font-bold ">Total</span>
                <span className=" text-[16px] text-cyan-500 ">$160</span>
              </p>
            </div>
          </div>
        </div>

        {/* payment form */}
        <div className=" border rounded-md p-5 mt-10 ">
          <p className=" text-xl font-bold ">Payment Method</p>

          <div className="mt-5 flex items-center gap-4 ">
            <input
              type="radio"
              name="radio-4"
              className="radio radio-accent"
              defaultChecked
            />
            <span className=" text-[16px] font-semibold ">Credit Card</span>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className=" w-full mt-8 ">
            <div className=" flex sm:flex-row flex-col sm:items-center justify-between gap-5 ">
              <div className="relative w-full">
                {/* Label */}
                <label className="absolute -top-3 left-4 bg-white px-1 text-sm ">
                  Name on card
                </label>

                {/* Input field */}
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full py-3 pl-4 pr-4 focus:outline-none focus:ring-2 "
                  placeholder="Enter your name"
                  {...register("card_name", { required: true })}
                />

                {/* Bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
              </div>
              <div className="relative w-full">
                {/* Label */}
                <label className="absolute -top-3 left-4 bg-white px-1 text-sm ">
                  Card number
                </label>

                {/* Input field */}
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full py-3 pl-4 pr-4 focus:outline-none focus:ring-2 "
                  placeholder="ex: 125452 9652147 12235"
                  {...register("card_number", { required: true })}
                />

                {/* Bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
              </div>
            </div>

            <div className=" flex sm:flex-row flex-col sm:items-center justify-between gap-5 mt-10 ">
              <div className="relative w-full">
                {/* Label */}
                <label className="absolute -top-3 left-4 bg-white px-1 text-sm ">
                  Expirey month
                </label>

                {/* Input field */}
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full py-3 pl-4 pr-4 focus:outline-none focus:ring-2 "
                  placeholder="MM"
                  {...register("expiry_month", { required: true })}
                />

                {/* Bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
              </div>
              <div className="relative w-full">
                {/* Label */}
                <label className="absolute -top-3 left-4 bg-white px-1 text-sm ">
                  Expire year
                </label>

                {/* Input field */}
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full py-3 pl-4 pr-4 focus:outline-none focus:ring-2 "
                  placeholder="YY"
                  {...register("expiry_year", { required: true })}
                />

                {/* Bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
              </div>
              <div className="relative w-full">
                {/* Label */}
                <label className="absolute -top-3 left-4 bg-white px-1 text-sm ">
                  CVC
                </label>

                {/* Input field */}
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full py-3 pl-4 pr-4 focus:outline-none focus:ring-2 "
                  placeholder="CVC"
                  {...register("cvc", { required: true })}
                />

                {/* Bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
              </div>
            </div>

            <div className="form-control mt-10 ">
              <label className="cursor-pointer flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-accent" />
                <p className="text-[14px] ">
                  {" "}
                  I have read and accept{" "}
                  <span className=" text-accent  ">
                    Terms & Conditions
                  </span>{" "}
                </p>
              </label>
            </div>

            <button className=" btn btn-accent text-white mt-10 ">
              Confirm And Pay
            </button>
          </form>
        </div>

        {/* modal */}
        <div>
          {/* document.getElementById("my_modal_3").showModal()} */}

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box flex flex-col items-center justify-center gap-3 ">
              <span className=" ">
                <FaCheckCircle className=" text-3xl text-accent " />
              </span>
              <p className=" text-xl font-bold ">
                Appointment booked Successfully!
              </p>
              <p>
                Appointment booked with
                <span className=" font-bold text-[16px] ml-3 ">
                  {doctor.name}
                </span>
              </p>
              <span className=" font-bold ">{new Date().toLocaleString()}</span>
              <Link
                href="/invoice"
                onClick={() => {
                  document.getElementById("my_modal_3").close();
                }}
                className=" btn btn-accent text-white  "
              >
                View Invoice
              </Link>
            </div>
          </dialog>
        </div>
      </div>
    </ProtectedRoute>
  );
}
