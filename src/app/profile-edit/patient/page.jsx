"use client";

import DatePicker from "react-datepicker";
import { FaFileArrowUp } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function PatientProfileEdit() {

  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("helo");

    if(!image){
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
  }

  const click = () => {
    console.log('helo')
  }

  return (
    <div className=" w-full p-5 mt-5 ">
      {/* header */}
      <div className=" border rounded-md p-5 ">
        <div className=" flex sm:flex-row flex-col items-center gap-5 ">
          <div className=" sm:w-32 sm:h-32 rounded-md border flex items-center justify-center bg-gray-50 ">
            <FaFileArrowUp className=" text-3xl " />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-[600] ">Profile Image</p>
            <div className=" flex items-center gap-3 ">
              <form
              onSubmit={handleSubmit}
              >
                <input type="file" onChange={handleFileChange} />
                <button 
                type="submit"
                className=" px-4 bg-gray-50 py-3 border rounded-md text-[16px] text-[600] text-blue-500 ">
                  Upload New
                </button>
              </form>
              <button 
              onClick={click}
              className=" px-4 bg-gray-50 hover:text-yellow-500 py-3 border rounded-md  text-[16px] hover:cursor-pointer text-[600] text-red-500 ">
                Remove
              </button>
            </div>
            <p className="text-[16px] font-[500] text-black ">
              Your Image should Below 5 MB, Accepted format jpg,png,svg
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-8 ">
        <p className=" text-xl font-bold ">Information</p>

        <div className=" mt-5 border rounded-md p-5 ">
          <div className=" flex sm:flex-row flex-col items-center justify-between gap-5 ">
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">
                First name
              </span>
              <input
                type="text"
                placeholder="first name"
                className=" w-full focus:outline-none border px-4 py-2 rounded-md "
              />
            </label>
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">
                Last name
              </span>
              <input
                type="text"
                placeholder="last name"
                className=" w-full focus:outline-none border px-4 py-2 rounded-md "
              />
            </label>
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">
                Date of birth
              </span>
              <DatePicker
                type="text"
                placeholderText="date of birth"
                className=" focus:outline-none border w-full px-4 py-2 rounded-md "
              />
            </label>
          </div>
          <div className=" flex sm:flex-row flex-col mt-8 items-center justify-between gap-5 ">
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">
                Phone number
              </span>
              <input
                type="text"
                placeholder="Phone number"
                className=" w-full focus:outline-none border px-4 py-2 rounded-md "
              />
            </label>
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">
                Email address
              </span>
              <input
                type="text"
                placeholder="Email address"
                className=" w-full focus:outline-none border px-4 py-2 rounded-md "
              />
            </label>
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">
                Blood group
              </span>
              <input
                type="text"
                placeholder="Blood group"
                className=" focus:outline-none border w-full px-4 py-2 rounded-md "
              />
            </label>
          </div>
        </div>
      </div>

      {/* address */}
      <div className=" mt-8 ">
        <p className=" text-xl font-bold ">Address</p>

        <div className=" mt-5 border rounded-md p-5 ">
          <label className="flex w-full flex-col gap-2">
            <span className=" text-[16px] font-[500] text-black ">Address</span>
            <input
              type="text"
              placeholder="address"
              className=" w-full focus:outline-none border px-4 py-2 rounded-md "
            />
          </label>
          <div className=" flex sm:flex-row flex-col mt-8 items-center justify-between gap-5 ">
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">City</span>
              <input
                type="text"
                placeholder="city"
                className=" w-full focus:outline-none border px-4 py-2 rounded-md "
              />
            </label>
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">State</span>
              <input
                type="text"
                placeholder="state"
                className=" w-full focus:outline-none border px-4 py-2 rounded-md "
              />
            </label>
          </div>
          <div className=" flex sm:flex-row flex-col mt-8 items-center justify-between gap-5 ">
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">
                Country
              </span>
              <input
                type="text"
                placeholder="Country"
                className=" w-full focus:outline-none border px-4 py-2 rounded-md "
              />
            </label>
            <label className="flex w-full flex-col gap-2">
              <span className=" text-[16px] font-[500] text-black ">
                Zip code
              </span>
              <input
                type="text"
                placeholder="Zip code"
                className=" w-full focus:outline-none border px-4 py-2 rounded-md "
              />
            </label>
          </div>
        </div>
      </div>

      <div className=" w-full flex items-center justify-end gap-5 mt-8 mb-5 ">
        <button className=" btn ">Cancel</button>
        <button className=" btn btn-accent text-white ">Save Changes</button>
      </div>
    </div>
  );
}
