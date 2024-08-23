"use client";

import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function PatientPayment() {
  return (
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
            <div className=" w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-blue-200 "></div>
            <div className="flex flex-col gap-1">
              <p className=" text-[16px] font-[600] ">Dr.Milon Miah</p>
              <div className=" flex items-center gap-1 ">
                <FaStar className=" text-[18px] text-yellow-500 " />
                <FaStar className=" text-[18px] text-yellow-500 " />
                <FaStar className=" text-[18px] text-yellow-500 " />
                <FaStar className=" text-[18px] text-yellow-500 " />
                <FaStar className=" text-[18px] text-gray-300 " />
                <p className="ml-2">30</p>
              </div>
              <p className=" flex items-center gap-1 ">
                <span>
                  <MdLocationOn className=" text-[18px] text-gray-500 " />
                </span>
                <span>Nanchong, Sichuan, China</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <p className=" flex items-center gap-1 ">
              <span className="text-[16px] font-[500] ">Date : </span>
              <span className=" text-[16px] text-gray-500 ">20 Aug, 2024</span>
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
        <form className=" mt-8 ">
          <div className="relative w-full lg:w-[85%]">
            {/* Label */}
            <label className="absolute -top-3 left-4 bg-white px-1 text-sm ">
              Name on card
            </label>

            {/* Input field */}
            <input
              type="text"
              className="border border-gray-300 rounded-md w-full py-3 pl-4 pr-4 focus:outline-none focus:ring-2 "
              placeholder="Enter your name"
            />

            {/* Bottom border highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
