"use client";

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdPrintDisabled } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Invoice() {
  const doctor = useSelector((state) => state.doctorReducer.doctor);
  return (
    <ProtectedRoute>
      <div className=" w-full p-5 ">
        <p className=" text-2xl font-bold ">Invoices</p>

        <div className=" mt-5 mb-5 border-t "></div>

        <div>
          <label className=" relative">
            <input
              type="text"
              placeholder="Search"
              className=" px-4 py-2 rounded-md border focus:outline-none "
            />
            <IoSearchOutline className=" text-xl text-gray-500 absolute top-[2px] right-3 " />
          </label>
        </div>

        {/* displaying data */}
        <div className="overflow-x-auto  mt-5">
          <table className="table">
            {/* head */}
            <thead className=" bg-gray-100 ">
              <tr>
                <th className=" text-[18px] text-black font-semibold ">ID</th>
                <th className=" text-[18px] text-black font-semibold ">
                  Doctor
                </th>
                <th className=" text-[18px] text-black font-semibold ">
                  Appointment Date
                </th>
                <th className=" text-[18px] text-black font-semibold ">
                  Booked on
                </th>
                <th className=" text-[18px] text-black font-semibold ">
                  Amount
                </th>
                <th className=" text-[18px] text-red-500 font-semibold ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" text-blue-500 ">#d001</td>
                <td>
                  <div className="relative overflow-hidden w-12 h-12 rounded-full ">
                    <Image
                      src={doctor.img}
                      alt={doctor.img}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      className=" w-full h-full object-cover rounded-full "
                    />
                  </div>
                </td>
                <td>21 Aug 2024</td>
                <td>20 Apr 2024</td>
                <td>$300</td>

                <td className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                    className=" p-3 transition-all hover:text-white hover:bg-blue-500 duration-200  hover:cursor-pointer  rounded-full bg-gray-50 "
                  >
                    <FaLink className=" text-xl " />
                  </button>
                  <button className=" p-3 transition-all hover:text-white hover:bg-blue-500 duration-200  hover:cursor-pointer  rounded-full bg-gray-50 ">
                    <MdPrintDisabled className=" text-xl " />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* pagination */}
        <div className=" mt-10 w-full p-5 flex items-center gap-3 justify-center ">
          <button className="  text-white btn btn-accent  ">Previous</button>

          <div>
            <button className=" px-4 py-3 transition-all duration-200 hover:bg-gray-200 rounded-md bg-gray-100 text-black font-[500] ">
              {" "}
              1
            </button>
          </div>

          <button className=" text-white btn btn-accent  ">Next</button>
        </div>

        {/* to view invoice modal */}
        <div>
          <dialog
            id="my_modal_3"
            className=" w-[95%] mx-auto lg:w-[70%] p-5 rounded-md shadow-lg "
          >
            <div className=" w-full ">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-xl">Invoice</h3>
              <div className=" mt-5 mb-5 border-t "></div>

              <div className=" px-5 py-2 rounded-md bg-gray-100 flex items-center justify-between ">
                <p className=" text-xl font-semibold  ">21 Aug 2024</p>
                <div className=" flex items-center gap-3 ">
                  <p className=" p-2 rounded-full border hover:cursor-pointer ">
                    <MdPrintDisabled className=" text-xl " />
                  </p>
                  <button className=" btn btn-accent text-white ">
                    {" "}
                    Download{" "}
                  </button>
                </div>
              </div>

              <div className=" mt-5 p-5 relative border rounded-md ">
                <div className=" flex sm:flex-row flex-col sm:items-center justify-between gap-3 sm:gap-0 ">
                  <p className=" text-2xl sm:text-3xl font-bold text-cyan-500 ">
                    CareLife
                  </p>
                  <div className=" flex flex-col gap-1 ">
                    <p className=" flex items-center gap-1 ">
                      <span className="text-[16px] font-[500] ">
                        Invoice No :{" "}
                      </span>
                      <span className=" text-[16px] text-gray-500 ">#d002</span>
                    </p>
                    <p className=" flex items-center gap-1 ">
                      <span className="text-[16px] font-[500] ">Issued : </span>
                      <span className=" text-[16px] text-gray-500 ">
                        21 aug 2024
                      </span>
                    </p>
                  </div>
                </div>

                <div className=" flex lg:flex-row flex-col gap-3 justify-between mt-5">
                  <div className=" lg:border-none border-b py-3 flex flex-col gap-2 ">
                    <p className=" text[16px] font-[600] ">Billing From</p>
                    <p className=" text-[16px] ">Edalin Hendry </p>
                    <p className=" text-[16px] ">806 Twin Willow Lane,</p>
                    <p className=" text-[16px] "> Newyork, USA</p>
                  </div>
                  <div className=" lg:border-none border-b py-3 flex flex-col gap-2 ">
                    <p className=" text[16px] font-[600] ">Billing To</p>
                    <p className=" text-[16px] ">Milon Miah </p>
                    <p className=" text-[16px] ">806 Twin Willow Lane,</p>
                    <p className=" text-[16px] "> Newyork, USA</p>
                  </div>
                  <div className=" lg:border-none border-b py-3 flex flex-col gap-2 ">
                    <p className=" text[16px] font-[600] ">Payment Method</p>
                    <p className=" text-[16px] ">Debit Card </p>
                    <p className=" text-[16px] ">xxxxxxxxxxxxx-52401</p>
                    <p className=" text-[16px] ">BOC BANK</p>
                  </div>
                </div>

                <div className=" mt-5 ">
                  <p className=" text[16px] font-bold ">Billing From</p>
                  <div className=" mt-3 w-full border border-b-0 flex items-center justify-between px-5 py-3 bg-gray-50 ">
                    <p className=" w-full text-center text-[16px] font-[570] text-black ">
                      Description
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500]  text-black ">
                      Quality
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500]  text-black ">
                      Tax
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500]  text-black ">
                      Total
                    </p>
                  </div>
                  <div className=" w-full border border-b-0 flex items-center justify-between px-5 py-3  ">
                    <p className=" w-full text-center text-[16px] font-[570] text-gray-500 ">
                      General Consultation
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500] text-gray-500 ">
                      0
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500] text-gray-500 ">
                      $0
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500] text-gray-500 ">
                      $200
                    </p>
                  </div>
                  <div className=" w-full border flex items-center justify-between px-5 py-3  ">
                    <p className=" w-full text-center text-[16px] font-[570] text-gray-500 ">
                      Video Call
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500] text-gray-500 ">
                      0
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500] text-gray-500 ">
                      $0
                    </p>
                    <p className=" w-full text-center text-[16px] font-[500] text-gray-500 ">
                      $100
                    </p>{" "}
                  </div>
                </div>

                <div className=" w-full flex sm:justify-end  mt-5  ">
                  <div className=" w-full sm:w-[35%] sm:mr-[8%] lg:mr-[10%] ">
                    <div className="w-full  border-b flex items-center justify-between  sm:px-5 py-3   ">
                      <p className="  text-center text-[16px] font-[570] text-gray-500 ">
                        Subtotal :
                      </p>
                      <p className=" ">$300</p>
                    </div>
                    <div className="w-full  border-b flex items-center justify-between  sm:px-5 py-3   ">
                      <p className="  text-center text-[16px] font-[570] text-gray-500 ">
                        Discount :
                      </p>
                      <p className=" ">-10%</p>
                    </div>
                    <div className="w-full  border-b flex items-center justify-between  sm:px-5 py-3   ">
                      <p className="  text-center text-[16px] font-[570] text-gray-500 ">
                        Total Amount :
                      </p>
                      <p className=" ">$290</p>
                    </div>
                  </div>
                </div>

                <div className=" rounded-md bg-gray-100 p-5 mt-8 ">
                  <p className=" text-[16px] font-bold  ">Other Information</p>
                  <p className=" text-[16px] text-gray-500 ">
                    An account of the present illness, which includes the
                    circumstances surrounding the onset of recent health changes
                    and the chronology of subsequent events that have led the
                    patient to seek medicine
                  </p>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </ProtectedRoute>
  );
}
