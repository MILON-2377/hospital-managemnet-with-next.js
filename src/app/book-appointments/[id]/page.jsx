"use client";

import { BsFillBookmarkStarFill, BsFillPatchCheckFill } from "react-icons/bs";
import {
  FaCheck,
  FaHeart,
  FaHospital,
  FaRocketchat,
  FaThumbsUp,
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GiWatch } from "react-icons/gi";
import { IoIosLink, IoLogoDropbox, IoMdShare } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import {
  MdLocationOn,
  MdOutlineCalendarViewMonth,
  MdOutlineKeyboardArrowDown,
  MdPhoneCallback,
} from "react-icons/md";

export default function ViewDoctorProfile() {
  return (
    <div className=" w-full p-5 ">
      <div className=" border rounded-md p-5  ">
        <div className=" flex items-center gap-5 ">
          {/* profile pic */}
          <div className=" rounded-lg bg-blue-300 h-44 w-44 "></div>

          {/* details */}
          <div className=" flex-1 flex flex-col gap-2 ">
            <div className=" w-24 px-4 py-2 flex items-center gap-2 justify-center rounded-3xl bg-green-100 ">
              <p className=" w-2 h-2 rounded-full bg-green-500 "></p>
              <span className=" text-sm font-[500] text-green-600 ">
                Available
              </span>
            </div>

            {/* name */}
            <div className=" flex items-center gap-3 ">
              <p className=" text-xl font-bold ">name</p>
              <BsFillPatchCheckFill className=" text-xl text-green-500 " />
              <div className=" px-3 py-1 rounded-md bg-gray-100 flex items-center gap-2 ">
                <p className=" w-2 h-2 rounded-full bg-green-500 "></p>
                <span className=" text-sm font-[500] ">Dentist</span>
              </div>
            </div>

            {/* qualifications */}
            <p className=" text-[16px] font-[500] ">Qualifications</p>
            <p className=" text-[16px] font-[500] flex items-center gap-2 ">
              <span>Specks : </span>
              <span>English, Hindi, Bangla</span>
            </p>
            <p className=" text-[16px] font-[500] flex items-center gap-1 ">
              <MdLocationOn className=" text-xl text-gray-500 " />
              <span>Location : </span>
              <span>China, Sichuan, Nanchong</span>
            </p>
          </div>

          {/* extra details section */}

          {/* icons section */}
          <section className=" flex-1 flex flex-col gap-2 ">
            <div className=" flex items-center justify-end  gap-2 ">
              <p className=" rounded-full p-2 border flex items-center bg-gray-100 text-gray-400 hover:cursor-pointer justify-center ">
                <FaHeart className=" text-[16px]  " />
              </p>
              <p className=" rounded-full p-2 border flex items-center bg-gray-100 text-gray-400 hover:cursor-pointer justify-center ">
                <IoMdShare className=" text-[16px]  " />
              </p>
              <p className=" rounded-full p-2 border flex items-center bg-gray-100 text-gray-500 hover:cursor-pointer justify-center ">
                <IoIosLink className=" text-[16px]  " />
              </p>
            </div>

            <div className=" mt-14 flex items-center gap-2 ">
              <FaCircleCheck className=" text-[22px] text-green-500 " />
              <p className=" text-sm font-[550] ">Accepting New Patients</p>
            </div>

            <div className=" flex items-center gap-3 justify-between ">
              <button className=" w-full px-4 py-2 rounded-md bg-slate-100 transition-all duration-200 hover:bg-slate-200 font-[500] text-[16px] flex items-center gap-2 ">
                <FaRocketchat className=" text-xl text-blue-500 " />
                <span>Chat</span>
              </button>
              <button className=" w-full px-4 py-2 rounded-md bg-slate-100 transition-all duration-200 hover:bg-slate-200 font-[500] text-[16px] flex items-center gap-2 ">
                <MdPhoneCallback className=" text-xl text-sky-400 " />
                <span>Chat</span>
              </button>
              <button className=" w-full px-4 py-2 rounded-md bg-slate-100 transition-all duration-200 hover:bg-slate-200 font-[500] text-[16px] flex items-center gap-2 ">
                <IoVideocam className=" text-xl text-sky-500 " />
                <span>Chat</span>
              </button>
            </div>
          </section>
        </div>

        <div className=" mt-5 mb-5 border-t"></div>

        <div className=" flex items-center justify-between gap-6 ">
          <section className=" flex flex-col gap-6 ">
            <div className=" flex items-center gap-3 ">
              <div className="  rounded-md bg-blue-200 flex items-center justify-center p-2 ">
                <MdOutlineCalendarViewMonth className="text-3xl text-blue-700 " />
              </div>
              <p className=" text-[16px] font-[500] ">
                Nearly 200+ Appointment Booked
              </p>
            </div>
            <div className=" flex items-center gap-3 ">
              <div className="  rounded-md bg-amber-100 flex items-center justify-center p-2 ">
                <IoLogoDropbox className="text-3xl text-amber-500 " />
              </div>
              <p className=" text-[16px] font-[500] ">
                In Practice for 21 Years
              </p>
            </div>
            <div className=" flex items-center gap-3 ">
              <div className="  rounded-md bg-lime-100 flex items-center justify-center p-2 ">
                <BsFillBookmarkStarFill className="text-3xl text-lime-400 " />
              </div>
              <p className=" text-[16px] font-[500] ">15+ awards</p>
            </div>
          </section>

          <section className=" flex-1 flex flex-col gap-3 ">
            <div className=" flex items-center gap-3 ">
              <div className=" p-3 rounded-full flex items-center justify-center border ">
                <GiWatch className=" text-xl text-green-500 " />
              </div>
              <p>Full time, Online Therapy Available</p>
            </div>
            <div className=" flex items-center gap-3 ">
              <div className=" p-3 rounded-full flex items-center justify-center border ">
                <FaThumbsUp className=" text-xl text-blue-200 " />
              </div>
              <p>Full time, Online Therapy Available</p>
            </div>
            <div className=" flex items-center gap-3 ">
              <div className=" p-3 rounded-full flex items-center justify-center border ">
                <FaHospital className=" text-xl text-pink-300 " />
              </div>
              <p>Full time, Online Therapy Available</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className=" text-[16px] ">
                5.0{" "}
                <span className=" underline text-black font-[500] ">
                  150 Reviews
                </span>{" "}
              </p>
            </div>
          </section>

          <section className=" flex gap-5 flex-col ">
            <p className=" flex items-center gap-1 ">
              <span className=" text-[16px] font-semibold ">
                Price : $100 - $200
              </span>
              <span className=" text-sm ">for a Session </span>
            </p>
            <button className=" btn btn-accent text-white text-xl ">
              Book Appointment{" "}
            </button>
          </section>
        </div>
      </div>

      <div className=" mt-8 mb-8 border-t "></div>

      <div>
        <p className=" text-xl font-bold ">Doctor Bio </p>
        <p className=" mt-3 text-[16px] font-[500] ">bio here</p>
        <div className=" flex items-center gap-2 hover:cursor-pointer mt-5 hover:underline ">
          <p className=" text-[16px] font-[550]  text-blue-500 ">See more</p>
          <MdOutlineKeyboardArrowDown className=" text-xl " />
        </div>
      </div>
    </div>
  );
}
