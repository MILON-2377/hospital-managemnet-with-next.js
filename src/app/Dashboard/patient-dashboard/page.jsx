"use client";

import FavouritesDoctors from "@/components/PatientDashboardHome/FavouritesDoctors";
import HealthShow from "@/components/PatientDashboardHome/HealthShow";
import Notifications from "@/components/PatientDashboardHome/Notifications";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiSolidInjection } from "react-icons/bi";
import { FaTemperatureHigh, FaUserEdit } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import {
  MdAddBusiness,
  MdArrowForwardIos,
  MdOutlineFileCopy,
  MdOutlineSportsCricket,
} from "react-icons/md";

const healthPercentage = 90;

export default function PatientDashboard() {
  const router = useRouter();

  return (
    <ProtectedRoute>
      (
      <div className=" w-full p-5 lg:p-10">
        <p className=" text-xl lg:text-2xl font-bold ">Dashboard</p>
        <div className=" w-full divider "></div>

        {/* health records and book appointment section */}
        <section className=" w-full flex lg:flex-row flex-col justify-between gap-5 ">
          <div className=" flex-1 border flex flex-col rounded-md p-5 ">
            <div className="flex items-center justify-between ">
              <p className=" text-[18px] font-bold ">Health Records</p>
              <div className=" px-4 py-3 rounded-md border bg-gray-100 "></div>
            </div>

            {/* divider */}
            <div className=" mt-2 mb-2 border-t "></div>

            <div className=" w-full flex sm:flex-row flex-col items-center justify-between gap-5 mt-5 ">
              <div className="w-full ">
                <div className=" w-full flex flex-row justify-between ">
                  <div className=" flex flex-col gap-7 ">
                    {/* heart rate */}
                    <div className=" flex flex-col gap-3 ">
                      <p className=" flex items-center gap-1 ">
                        <span className=" text-red-500 ">
                          <IoIosHeart className=" text-red-500 " />
                        </span>
                        <span className="  text-sm text-gray-600 font-semibold ">
                          Heart rate
                        </span>
                      </p>
                      <p className=" relative flex items-center gap-1 ">
                        <span className=" text-2xl font-bold ">140 Bpm</span>
                        <span className=" -mt-4 text-[12px] text-green-400  font-semibold ">
                          2%
                        </span>
                      </p>
                    </div>

                    {/* glouclose level */}
                    <div className=" flex flex-col gap-3 ">
                      <p className=" flex items-center gap-1 ">
                        <span className=" text-red-500 ">
                          <MdAddBusiness className=" text-blue-500 " />
                        </span>
                        <span className="  text-sm text-gray-600 font-semibold ">
                          Glucose Level
                        </span>
                      </p>
                      <p className=" relative flex items-center gap-1 ">
                        <span className=" text-2xl font-bold ">70 - 80</span>
                        <span className=" -mt-4 text-[12px] text-red-400 font-semibold ">
                          6%
                        </span>
                      </p>
                    </div>

                    {/* blood pressure */}
                    <div className=" flex flex-col gap-3 ">
                      <p className=" flex items-center gap-1 ">
                        <span>
                          <BiSolidInjection className=" text-red-500 " />
                        </span>
                        <span className="  text-sm text-gray-600 font-semibold ">
                          Blood pressure
                        </span>
                      </p>
                      <p className=" relative flex items-center gap-1 ">
                        <span className=" text-2xl font-bold ">100 mg/dl</span>
                        <span className=" -mt-4 text-[12px] text-green-400  font-semibold">
                          2%
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-7 ">
                    {/* Body temperature */}
                    <div className=" flex flex-col gap-3 ">
                      <p className=" flex items-center gap-1 ">
                        <span>
                          <FaTemperatureHigh className=" text-yellow-500 " />
                        </span>
                        <span className="  text-sm text-gray-600 font-semibold ">
                          Body temperature
                        </span>
                      </p>
                      <p className=" relative flex items-center gap-1 ">
                        <span className=" text-2xl font-bold ">37.5 C</span>
                      </p>
                    </div>

                    {/*SPo2 */}
                    <div className=" flex flex-col gap-3 ">
                      <p className=" flex items-center gap-1 ">
                        <span>
                          <MdOutlineSportsCricket className=" text-blue-500 " />
                        </span>
                        <span className="  text-sm text-gray-600 font-semibold ">
                          SPo2
                        </span>
                      </p>
                      <p className=" relative flex items-center gap-1 ">
                        <span className=" text-2xl font-bold ">96%</span>
                      </p>
                    </div>

                    {/* BMI */}
                    <div className=" flex flex-col gap-3 ">
                      <p className=" flex items-center gap-1 ">
                        <span>
                          <FaUserEdit className=" text-lime-400 " />
                        </span>
                        <span className="  text-sm text-gray-600 font-semibold ">
                          BMI
                        </span>
                      </p>
                      <p className=" relative flex items-center gap-1 ">
                        <span className=" text-2xl font-bold ">21.5 kg/m2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className=" flex items-center gap-3 mt-8 ">
                  <span>Report generated on last visit : 10 Aut, 2024</span>
                  <span>
                    <MdOutlineFileCopy className=" text-xl text-gray-400 " />
                  </span>
                </p>
              </div>

              <div className=" divider divider-horizontal "></div>

              <div className=" w-full flex flex-col gap-5 items-center ">
                <p className=" text-[18px] font-[500] ">Overall Report</p>

                {/* health border show */}
                <HealthShow healthPercentage={healthPercentage} />

                <p className=" text-[16px] text-gray-500 ">
                  Your Health is 95% Normal
                </p>

                <Link
                  href="/Dashboard/patient-dashboard/view-details"
                  className=" flex items-center gap-3 px-4 py-2 rounded-md bg-slate-800 transition-all hover:bg-opacity-80 active:bg-opacity-70 active:scale-95 text-white font-semibold "
                >
                  View Details{" "}
                  <span>
                    <MdArrowForwardIos className=" text-2xl " />
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className=" lg:w-[30%] ">
            <div className=" relative p-5 rounded-lg bg-violet-500 ">
              <p className="text-[18px] font-[500] text-white ">Book a new</p>
              <p className=" text-xl font-semibold text-white ">Appointment</p>
              <p
                onClick={() => router.push("/book-appointments")}
                className=" absolute text-2xl hover:cursor-pointer right-3 top-[40%] font-bold  p-1 text-blue-500 rounded-full flex items-center justify-center bg-white  "
              >
                +
              </p>
            </div>

            <div className=" border rounded-md p-5 mt-5 ">
              <div className=" flex items-center justify-between ">
                <p className="text-xl font-semibold ">Doctors</p>
                <p
                  onClick={() => {
                    router.push("/book-appointments");
                  }}
                  className=" text-[18px] font-[500] hover:cursor-pointer underline text-blue-500 "
                >
                  View All
                </p>
              </div>

              <div className=" mt-3 mb-3 border-t "> </div>

              {/* displaying the doctors */}
              <FavouritesDoctors />
            </div>
          </div>
        </section>

        {/* notfications section */}
        <Notifications />
      </div>
      );
    </ProtectedRoute>
  );
}
