"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AppointmentInfo() {
  const { user } = useAuth();
  const email = user?.email || null;
  const [appointData, setAppointData] = useState([]);

  useEffect(() => {
    // Define the async function
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`/api/appointment?email=${email}`);
        setAppointData(res.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    // Call the async function
    fetchAppointments();
  }, [email]);

  // console.log(appointData.data);

  return (
    <div className="p-5">
      <div className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-100">
            <tr>
              <th>Doctor Name</th>
              <th>Appointment Method</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointData.data?.map((item, index) => (
              <tr key={item._id}>
                <th>{item.Doctors}</th>
                <td>{item.appointmentMethod}</td>
                <td>Dhata</td>
                <td>{item.approved ? "Approved" : "Pending"}</td>
                <td>
                  {item.approved ? (
                    item.appointmentDate
                  ) : (
                    <>
                      <button className="px-2 py-[1px] bg-red-500 hover:bg-red-300 transition-all duration-200 text-white rounded-md">
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// appointments data laoding handle
async function appointementsData(email) {
  const res = await axios.get(`/api/appointment?email=${email}`);
  return res.data;
}
