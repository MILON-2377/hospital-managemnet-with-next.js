"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Appoitment() {
  const { register, handleSubmit,reset} = useForm();

  // form handle
  const onSubmit = async (data) => {
    // console.log(data);

    const res = await axios.post("/api/appointment", data);
    if (res.data.saveAppointment) {
      Swal.fire({
        title: "Appointment",
        text: "Your appointment was created successfully.",
        icon: "success",
      });

      reset();
    }
  };

  return (
    <div className=" h-full w-full mt-28 flex items-center justify-center ">
      <div className="p-5 border border-gray-200 rounded-md sm:w-[50%] ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full "
        >
          <label className="flex flex-col gap-1 ">
            <span className="text-xl font-sans text-gray-500 ">Full name</span>
            <input
              {...register("fullName", { required: "name field is required" })}
              className="px-3 py-1 border border-gray-200 focus:outline-none  rounded-md "
              placeholder="Type your name"
              type="text"
            />
          </label>

          <label className="flex flex-col gap-1 ">
            <span className="text-xl font-sans text-gray-500 ">Email</span>
            <input
              {...register("email", { required: "email field is required" })}
              className="px-3 py-1 border border-gray-200 focus:outline-none  rounded-md "
              placeholder="Type your email"
              type="email"
            />
          </label>

          <label className="flex flex-col gap-1 ">
            <span className="text-xl font-sans text-gray-500 ">
              Date of birth
            </span>
            <input
              {...register("dateOfBirth", {
                required: "date of birth field is required",
              })}
              className="px-3 py-1 border border-gray-200 focus:outline-none  rounded-md "
              placeholder=""
              type="date"
            />
          </label>

          <select
            defaultValue=""
            {...register("Doctors", { required: "Doctors field is required" })}
            className="select border border-gray-200 w-full focus:outline-none"
          >
            <option value="" disabled>
              Choose the doctor?
            </option>
            <option value="Dr. Milon miah">Dr. Milon miah</option>
            <option value="Dr. Shakil sheikh">Dr. Shakil sheikh</option>
          </select>

          <label className="flex flex-col gap-1 ">
            <span className="text-xl font-sans text-gray-500 ">Visit for</span>
            <textarea
              {...register("reason", { required: "email field is required" })}
              className="textarea focus:outline-none textarea-bordered"
              placeholder="Visit for"
            ></textarea>
          </label>

          <div className="flex flex-col gap-2 ">
            <span className="text-xl font-sans text-gray-500 ">
              Choose the method for appoitment
            </span>

            <div className="flex items-center gap-5">
              <p className="flex border border-gray-200 px-3 py-1 rounded-md items-center gap-2">
                <span className="text-gray-600 font-sans">Virtual</span>
                <input
                  type="radio"
                  value="Virtual"
                  {...register("appointmentMethod", {
                    required: "Appointment method is required",
                  })}
                />
              </p>
              <p className="flex border border-gray-200 px-3 py-1 rounded-md items-center gap-2">
                <span className="text-gray-600 font-sans">Physical</span>
                <input
                  type="radio"
                  value="Physical"
                  {...register("appointmentMethod", {
                    required: "Appointment method is required",
                  })}
                />
              </p>
            </div>
          </div>

          <button className="btn  ">Submit</button>
        </form>
      </div>
    </div>
  );
}
