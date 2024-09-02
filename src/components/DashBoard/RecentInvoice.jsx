"use client";

import Image from "next/image";
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
              <div className="relative w-16 h-16 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
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
                className=" sm:w-8 w-5 h-5 sm:h-8 rounded-full hover:bg-blue-500 transition-all hover:cursor-pointer duration-200 hover:text-white flex items-center justify-center  border border-green-500 "
              >
                <FaEye className=" text-sm sm:text-xl" />
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
      "https://img.freepik.com/free-photo/beautiful-young-female-posing_23-2148880228.jpg?t=st=1725289475~exp=1725293075~hmac=5a4a755be29dd8c720daf8d3b9554cdf669ae0d94e0c07fa129317ef82531406&w=360",
    date: "11 Nov",
    amount: 420,
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://img.freepik.com/free-photo/close-up-portrait-korean-young-asian-woman-professional-looking-confident-assertive-camera-white-background-business-people-concept_1258-97331.jpg?t=st=1725288738~exp=1725292338~hmac=be207da2e9bd2d1041fab432680bb7d9de368480d0529e970615e2b90a32e139&w=900",
    date: "11 Nov",
    amount: 330,
  },
  {
    id: 3,
    name: "Michael Brown",
    image:
      "https://img.freepik.com/free-photo/portrait-young-smiling-man_171337-11976.jpg?t=st=1725290759~exp=1725294359~hmac=8f5eb470b5d6d52746f07b81c1656d6b5334c07734bb0e49c1b7744206596090&w=900",
    date: "11 Nov",
    amount: 520,
  },
  {
    id: 4,
    name: "Emily Johnson",
    image:
      "https://img.freepik.com/free-photo/front-view-handsome-corporate-man_23-2148336855.jpg?t=st=1725289432~exp=1725293032~hmac=b56cdff96e117e6274f95060b87cdf03564439e7307ce6fa40ab2bad6b983a6b&w=996",
    date: "11 Nov",
    amount: 460,
  },
  {
    id: 5,
    name: "William Davis",
    image:
      "https://img.freepik.com/free-photo/closeup-portrait-young-girl-posing-looking-camera-isolated-grey-background-concept-beauty_155003-45882.jpg?t=st=1725290816~exp=1725294416~hmac=247c394acf1844ab86e1380a58336084d5dd43ecebaf3f2882322826fe4d1588&w=900",
    date: "11 Nov",
    amount: 500,
  },
];
