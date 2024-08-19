"use client";

import { FaBell } from "react-icons/fa";

export default function Notifications() {
  return (
    <div className=" rounded-md border p-5 mt-5 ">
      <div className=" flex items-center justify-between ">
        <p className="text-xl font-semibold ">Notifications</p>
        <p className=" text-[18px] text-blue-500 underline hover:text-stone-700 transition-all duration-200 hover:cursor-pointer font-[500] ">
          View All
        </p>
      </div>

      <div className=" mt-5 mb-3 border-t "></div>

      {/* all notifications displaying */}
      <div className=" flex flex-col gap-5 ">
        {[...notificationsData].map((item) => (
          <div
            key={item.id}
            className=" rounded-md bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:cursor-pointer p-2 flex gap-3 "
          >
            <div className=" w-12 h-12 rounded-md flex items-center justify-center bg-sky-100 ">
              <FaBell className="text-2xl text-yellow-500 " />
            </div>
            <div className=" flex flex-col gap-1 ">
              <p className=" text-[16px] font-[500] text-blue-500 ">
                <span>{item.title}</span>
              </p>
              <span>{item.message}</span>
              <span className=" text-[14px] font-bold ">{item.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// notifications data
const notificationsData = [
  {
    id: 1,
    title: "Booking Confirmed",
    message: "Your booking has been confirmed for 21 Mar 2024 at 10:30 AM.",
    timestamp: "Just Now",
    type: "confirmation",
    isRead: false,
  },
  {
    id: 2,
    title: "Payment Successful",
    message:
      "Your payment of $200 for the consultation with Dr. Emily Johnson has been successfully processed.",
    timestamp: "5 minutes ago",
    type: "payment",
    isRead: false,
  },
  {
    id: 3,
    title: "Appointment Rescheduled",
    message:
      "Your appointment with Dr. Michael Thompson has been rescheduled to 22 Mar 2024 at 2:00 PM.",
    timestamp: "10 minutes ago",
    type: "reschedule",
    isRead: true,
  },
  {
    id: 4,
    title: "New Message from Dr. Sophia Martinez",
    message:
      "You have a new message regarding your recent test results. Please check your inbox.",
    timestamp: "15 minutes ago",
    type: "message",
    isRead: false,
  },
  {
    id: 5,
    title: "Reminder: Follow-up Appointment",
    message:
      "Don't forget your follow-up appointment with Dr. James Anderson on 23 Mar 2024 at 9:00 AM.",
    timestamp: "20 minutes ago",
    type: "reminder",
    isRead: true,
  },
];
