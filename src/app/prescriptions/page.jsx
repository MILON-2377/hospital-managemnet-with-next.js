"use client";
import PresCriptionForm from "@/components/PresCriptionForm/PresCriptionForm";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Prescriptions() {

    const [isClickNext, setIsClickNext] = useState(false);
  // hook form section
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setIsClickNext(true);
  };

  return (
    <div>
      {/* prescription form to take information from patients */}
      <div className={isClickNext ? "hidden" : "w-full h-screen bg-sky-300 flex justify-between "}>
        {/* form section */}
        <div className="flex flex-col items-center justify-center w-[35%] h-full">
          
          <div>
            <h1 className="text-3xl font-sans font-bold text-white">Patients information</h1>
          </div>

          <div className=" h-[1px] w-[55%] mt-10 mx-auto bg-white  "></div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 px-5 py-7  "
          >
            {/* name field */}
            <label className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white ">Name</span>
              <input
                {...register("patientsName", {
                  required: "patients name is required",
                })}
                placeholder="Enter the name of the patients"
                className="px-4 py-1 rounded-3xl placeholder:text-gray-200 font-sans text-xl text-white focus:outline-none bg-transparent border border-white "
                type="text"
              />
            </label>

            {/* age field */}
            <label className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white ">Age</span>
              <input
                {...register("patientsAge", {
                  required: "patients age is required",
                })}
                placeholder="Enter the age of the patients"
                className="px-4 py-1 rounded-3xl placeholder:text-gray-200 font-sans text-xl text-white focus:outline-none bg-transparent border border-white "
                type="number"
              />
            </label>

            {/* sex field */}
            <label className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white ">Sex</span>
              <select
                {...register("patientSex", {
                  required: "patients sex is required",
                })}
                placeholder="Enter the age of the patients"
                className="px-4 py-1 rounded-3xl selection:bg-slate-500 placeholder:text-gray-200 font-sans text-xl text-white focus:outline-none bg-transparent border border-white "
                defaultValue=""
              >
                <option disabled className="text-black" value="">
                  Select sex of the patient
                </option>
                <option className="text-black" value="Male">
                  Male
                </option>
                <option className="text-black" value="Female">
                  Female
                </option>
              </select>
            </label>

            {/* phone number filed */}
            <label className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white ">Phone</span>
              <input
                {...register("Phone", {
                  required: "patients age is required",
                })}
                placeholder="Enter the age of the patients"
                className="px-4 py-1 rounded-3xl placeholder:text-gray-200 font-sans text-xl text-white focus:outline-none bg-transparent border border-white "
                type="number"
              />
            </label>

            {/* address field */}
            <label className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white ">Address</span>
              <input
                {...register("patientsAddress", {
                  required: "patients address is required",
                })}
                placeholder="Enter the address of the patients"
                className="px-4 py-1 rounded-3xl placeholder:text-gray-200 font-sans text-xl text-white focus:outline-none bg-transparent border border-white "
                type="text"
              />
            </label>

            {/* btn */}
            <button  className="px-3 py-1 rounded-3xl border border-white text-white bg-black hover:bg-opacity-60 bg-opacity-50 ">
              Next
            </button>
          </form>
        </div>

        {/* pictures section */}
        <div className=" w-[65%] mr-0 rounded-full h-full rounded-l-full ">
          <img
            className="w-full h-full rounded-l-full object-cover"
            src="https://st4.depositphotos.com/6464944/22646/v/450/depositphotos_226462578-stock-illustration-flat-medicine-computer-with-app.jpg"
            alt=""
          />
        </div>
      </div>

      {/* prescription page */}
      <div className={isClickNext ? "block" : "hidden"}>
        <PresCriptionForm></PresCriptionForm>
      </div>
    </div>
  );
}
