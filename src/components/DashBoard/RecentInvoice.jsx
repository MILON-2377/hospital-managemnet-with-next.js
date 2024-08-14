"use client";

import { FaEye } from "react-icons/fa";

export default function RecentInvoice() {
  return (
    <div className=" w-full p-5 mt-5 rounded-md border border-gray-200 ">
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-bold ">Recent Invoices</p>
        <p className="text-[18px] text-blue-500 font-[450] underline ">
          View All
        </p>
      </div>

      <div className="mt-5 border-b w-full"></div>

      <div className="mt-5 flex flex-col gap-5 ">
        {appointmentData?.map((item) => (
          <div key={item.id} className="w-full flex justify-between gap-5 ">
            <div className="flex w-full items-center gap-2">
              <div className=" w-12 h-12 rounded-md bg-blue-200 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md "
                />
              </div>
              <div className=" flex flex-col gap-1 ">
                <p className="card-title text-sm">{item.name}</p>
                <p className="text-sm text-sky-500 ">#00{item.id}</p>
              </div>
            </div>

            <div className=" w-full flex flex-col gap-1  ">
              <p className="text-sm font-[500]  ">Amount</p>
              <p className=" text-sm font-[500] text-black ">${item.amount}</p>
            </div>
            <div className="w-full flex flex-col gap-1 ">
              <p className=" text-sm font-[500] ">Paid On</p>
              <p className="text-sm  font-[500] ">{item.date}</p>
            </div>

            <div className="  flex items-center gap-2">
              <a
              href="/Dashboard/invoice-view"
              className=" w-8 h-8 rounded-full hover:bg-blue-500 transition-all hover:cursor-pointer duration-200 hover:text-white flex items-center justify-center  border border-green-500 ">
                <FaEye className="text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// appointment data
const appointmentData = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&s",
    date: "11 Nov",
    amount: 420,
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU",
    date: "11 Nov",
    amount: 330,
  },
  {
    id: 3,
    name: "Michael Brown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ0yJDHmFwDqOMljDHXB7JN5gMJdR35s8yj12-sVDbTQcXYlIf-NRKDXEcD9c_vGCYNk&usqp=CAU",
    date: "11 Nov",
    amount: 520,
  },
  {
    id: 4,
    name: "Emily Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&s",
    date: "11 Nov",
    amount: 460,
  },
  {
    id: 5,
    name: "William Davis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkboRWjcG9fDVJv-Y5tONb9Y_jrvqbH3tTyXmAErQ3gOqYJ1Xaw_rlx4Jse-cs0CFPnU&usqp=CAU",
    date: "11 Nov",
    amount: 500,
  },
];
