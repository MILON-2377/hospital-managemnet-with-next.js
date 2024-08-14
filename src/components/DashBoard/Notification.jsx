"use client";
import { IoIosNotifications } from "react-icons/io";

export default function Notification() {
  return (
    <div className=" mt-5 border border-gray-200 rounded-md p-5 ">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold  ">Notifications</p>
        <p className="text-blue-500 underline font-[450">View All</p>
      </div>

      <div className="mt-5 mb-5 border-t "></div>

      <div className="flex flex-col gap-1">
        {notification?.map((item) => (
          <div key={item.id} className="flex hover:cursor-pointer items-center hover:bg-gray-100 p-3 gap-5">
            <div className=" w-12 h-12 rounded-md flex items-center justify-center bg-gray-100 ">
              <IoIosNotifications className="text-3xl text-yellow-500" />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <p className="text-sm font-[450] ">{item.message}</p>
              <p className="text-sm font-bold ">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// notification data
const notification = [
  {
    id: 1,
    title: "Booking Confirmed",
    message: "Your booking has been confirmed.",
    image: "21 Mar, 2024, 10:30 AM",
    status: "Just Now",
  },
  {
    id: 2,
    title: "Payment Received",
    message: "We have received your payment for the booking.",
    image: "20 Mar, 2024, 03:45 PM",
    status: "1 hour ago",
  },
  {
    id: 3,
    title: "Reminder: Upcoming Appointment",
    message: "Your appointment is scheduled for 25 Mar, 2024, 09:00 AM.",
    image: "21 Mar, 2024, 08:00 AM",
    status: "2 hours ago",
  },
  {
    id: 4,
    title: "Special Offer",
    message:
      "Get 20% off on your next booking! Offer valid until 30 Mar, 2024.",
    image: "19 Mar, 2024, 02:00 PM",
    status: "Yesterday",
  },
  {
    id: 5,
    title: "Booking Cancelled",
    message: "Your booking for 28 Mar, 2024 has been cancelled.",
    image: "18 Mar, 2024, 04:00 PM",
    status: "2 days ago",
  },
];
