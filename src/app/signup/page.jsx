"use client";
import React from "react";

export default function page() {
  return (
    <div>
      <form>
        <label className="flex flex-col gap-1">
          <span className="font-sans text-gray-600 ">Full Name</span>
          <input
            className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
            type="text"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-sans text-gray-600 ">Gender</span>
          <select className="select select-accent focus:outline-none w-full ">
            <option disabled selected>
              Select your gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-sans text-gray-600 ">Date of birth</span>
          <input
            className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
            type="date"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-sans text-gray-600 ">Email</span>
          <input
            className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
            type="text"
            placeholder="Enter your email address"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-sans text-gray-600 ">Password</span>
          <input
            className="p-3 rounded-md text-blue-800 border border-green-400 focus:outline-none "
            type="password"
            placeholder="Enter a strong password"
          />
        </label>
      </form>
    </div>
  );
}
