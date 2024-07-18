"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

export default function PresCriptionForm() {
  const [isSearch, setISearch] = useState("");
  const [drugSearch, setDrugSearch] = useState("");

  // text area selector handle
  const [select, setSelect] = useState("C/C");

  // deasis duration filed handle
  const [duration, setDuration] = useState("day");
  const [durationTime, setDurationTime] = useState("");

  // deasis history field hanlde
  const [history, setHistory] = useState("Past history");

  return (
    <div className=" h-screen w-full">
      {/* prescription navber section */}
      <div className=" h-[100px] flex items-center justify-between bg-gray-50  ">
        <div className="flex items-center">
          {/* current serial number */}
          <div className="px-5 hidden">
            <p>
              <span className="text-xl font-sans font-bold ">
                Current Serial :
              </span>{" "}
              <span>54</span>{" "}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* patient serial number */}
            <div className="flex flex-col gap-2 px-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-sans font-bold ">
                  Serial number :
                </span>{" "}
                <div className=" px-3 py-1 text-center text-white rounded-full bg-blue-900 ">
                  55Ydkl
                </div>{" "}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-sans font-bold ">Name :</span>{" "}
                <div className=" px-3 py-1 text-center text-blue-500 uppercase font-semibold text-xl ">
                  patient
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* search bar */}
        <div className="flex items-center mr-5 gap-5 ">
          <label className="relative">
            <input
              onChange={(e) => setISearch(e.target.value)}
              className="px-4 py-2 relative focus:outline-none text-black placeholder:text-gray-200 rounded-3xl border border-gray-400 bg-transparent "
              placeholder="Search..."
              type="search"
            />

            <span
              className={
                isSearch.length > 0 ? "hidden" : "absolute right-3 top-3  "
              }
            >
              <IoSearchSharp className="text-gray-400 text-2xl font-bold" />
            </span>
          </label>

          {/* select search option */}
          <label className="flex flex-col gap-1 text-xl font-sans ">
            {/* <span>Select the search field</span> */}
            <select className="select focus:border-none focus:outline-none bg-transparent w-full max-w-xs">
              <option className="text-white" disabled selected>
                Pick your search field
              </option>
              <option>Drug template</option>
              <option>Generic template</option>
              <option>Treatment template</option>
              <option>Advice template</option>
              <option>C/C template</option>
              <option>O/E template</option>
              <option>I/X template</option>
            </select>
          </label>
        </div>

        {/* review and print and add section */}
        <div className="flex items-center gap-4 mr-5">
          <button className="btn">Preview</button>
          <button className="btn">Print</button>
          <button className="btn">Save Only</button>
        </div>
      </div>

      {/* prescription prescripe section */}
      <div className="flex justify-between w-full  h-full gap-5">
        {/* disease section */}
        <div className="py-7 w-[35%]  px-5 h-full ">
          {/* disease name section */}
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1 ">
              <span className="text-xl font-sans font-semibold  ">
                Disease/Condition/Dx
              </span>
              <input
                className=" px-4 py-1 rounded-lg focus:outline-none border border-gray-200 "
                placeholder="Diseases or condition"
                type="text"
              />
            </label>
            <div className="flex flex-col gap-1 ">
              <div className=" flex items-center justify-between ">
                <button
                  onClick={() => setSelect("C/C")}
                  className={` ${
                    select === "C/C" && "bg-gray-100 text-blue-500 "
                  } border-r-0 text-xl text-center border rounded-t-lg rounded-r-none border-gray-200 w-full font-sans font-semibold  `}
                >
                  C/C
                </button>
                <button
                  onClick={() => setSelect("both")}
                  className={` ${
                    select === "both" && "bg-gray-100 text-blue-500"
                  } border text-xl font-sans font-semibold   border-gray-200 px-2 `}
                >
                  Both
                </button>
                <button
                  onClick={() => setSelect("Lx")}
                  className={` ${
                    select === "Lx" && "bg-gray-100 text-blue-500 "
                  } text-xl text-center border rounded-l-none border-l-0 border-gray-200 rounded-t-lg w-full font-sans font-semibold `}
                >
                  Lx
                </button>
              </div>

              <div className={select === "both" ? "flex  " : ""}>
                <label
                  className={
                    select === "C/C" || select === "both" || select === ""
                      ? "block"
                      : "hidden"
                  }
                >
                  <textarea
                    placeholder={
                      select === "C/C" || select === "both"
                        ? "Write chief complaint"
                        : ""
                    }
                    className={`textarea -mt-1 focus:outline-none textarea-bordered ${
                      (select === "C/C" && "border-t-0 rounded-t-none ") ||
                      (select === "both" &&
                        "border-t-0 rounded-t-none rounded-r-none ")
                    } textarea-lg w-full`}
                  ></textarea>
                </label>
                <label
                  className={
                    select === "Lx" || select === "both" ? "block" : "hidden"
                  }
                >
                  <textarea
                    placeholder={
                      select === "Lx" || select === "both" ? "Write Lx" : ""
                    }
                    className={`textarea -mt-1 focus:outline-none textarea-bordered ${
                      (select === "Lx" && "border-t-0 rounded-t-none ") ||
                      (select === "both" &&
                        "border-t-0 rounded-t-none border-l-0 rounded-l-none ")
                    }  textarea-lg w-full`}
                  ></textarea>
                </label>
              </div>
            </div>

            <label className="flex flex-col gap-1 ">
              <span className="text-xl font-sans font-semibold  ">
                Type Brand name
              </span>
              <input
                className=" px-4 py-1 rounded-lg focus:outline-none border border-gray-400 "
                placeholder="Brand name"
                type="text"
              />
            </label>
            <label className="flex flex-col gap-1 ">
              <span className="text-xl font-sans font-semibold  ">
                Type Dose
              </span>
              <input
                className=" px-4 py-1 rounded-lg focus:outline-none border border-gray-400 "
                placeholder="Dose"
                type="text"
              />
            </label>

            {/* deasis duration field section */}
            <div className="border border-gray-200 rounded-lg p-2">
              <label className="flex gap-4 ">
                <div className="flex flex-col gap-1">
                  <span className="text-xl font-sans font-semibold  ">
                    Duration
                  </span>
                  <input
                    onChange={(e) => setDurationTime(e.target.value)}
                    className=" px-4 py-1 rounded-lg focus:outline-none border border-gray-400 "
                    placeholder="Duration"
                    defaultValue={duration}
                    type="text"
                  />
                </div>
                <div className="flex flex-1 mt-8 justify-between items-center gap-1 ">
                  <button
                    onClick={() => setDuration("day")}
                    className={` ${
                      duration === "day" && "bg-slate-200 text-blue-500"
                    } px-3 w-full py-1 border text-black bg-gray-50 font-sans font-semibold hover:bg-gray-100 duration-300 hover:border-none hover:text-gray-700 border-gray-200 rounded-lg `}
                  >
                    Day
                  </button>
                  <button
                    onClick={() => setDuration("month")}
                    className={` ${
                      duration === "month" && "bg-slate-200 text-blue-500 "
                    } px-3 w-full py-1 border text-black bg-gray-50 font-sans font-semibold hover:bg-gray-100 duration-300 hover:border-none hover:text-gray-700 border-gray-200 rounded-lg `}
                  >
                    Month
                  </button>
                </div>
              </label>

              <div className="flex items-center ">
                <label className=" border border-gray-100 rounded-lg px-3 py-1 w-full cursor-pointer">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    value="Day"
                  />
                  <span className="text-xl cursor-pointer ml-2 font-sans text-gray-700 ">
                    Before Eat
                  </span>
                </label>
                <div className="divider divider-horizontal">OR</div>
                <label className=" border border-gray-100 rounded-lg px-3 py-1 w-full cursor-pointer">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    value="Day"
                  />
                  <span className="text-xl cursor-pointer ml-2 font-sans text-gray-700 ">
                    Before Eat
                  </span>
                </label>
              </div>
            </div>

            {/* drug history section */}
            <div className="flex flex-col gap-1 ">
              <span className="text-xl font-sans font-semibold text-gray-600 ">
                Patient drug history
              </span>
              <div className="flex flex-col">
                {/* search drug history */}
                <label className="relative">
                  <input
                    onChange={(e) => setDrugSearch(e.target.value)}
                    className=" px-3 py-1 rounded-b-none w-full focus:outline-none rounded-md border border-gray-200 "
                    placeholder="Search drug"
                    type="search"
                  />
                  <span
                    className={
                      drugSearch.length > 0
                        ? "hidden"
                        : "absolute right-3 top-2 "
                    }
                  >
                    <IoMdSearch className="text-2xl text-gray-400 " />
                  </span>
                </label>

                <label>
                  <textarea
                    className="textarea border-t-0 rounded-t-none w-full focus:outline-none textarea-bordered"
                    placeholder="Drug history"
                  ></textarea>
                </label>
              </div>
            </div>

            {/* deasis history section */}
            <div className="flex flex-col gap-1 ">
              <span className="text-xl font-sans font-semibold text-gray-600 ">
                Patient deases history
              </span>

              <div className=" flex items-center justify-between ">
                <button
                  onClick={() => setHistory("Past history")}
                  className={` ${
                    history === "Past history" && "bg-gray-100 text-blue-500 "
                  } border-r-0 text-xl text-center border rounded-t-lg rounded-r-none border-gray-200 w-full font-sans font-semibold  `}
                >
                  Past history
                </button>
                <button
                  onClick={() => setHistory("Notes")}
                  className={` ${
                    history === "Notes" && "bg-gray-100 text-blue-500"
                  } border text-xl font-sans font-semibold   border-gray-200 px-2 `}
                >
                  Notes
                </button>
                <button
                  onClick={() => setHistory("Present history")}
                  className={` ${
                    history === "Present history" &&
                    "bg-gray-100 text-blue-500 "
                  } text-xl text-center border rounded-l-none border-l-0 border-gray-200 rounded-t-lg w-full font-sans font-semibold `}
                >
                  Present history
                </button>
              </div>

              <div>
                <label>
                  <textarea
                    placeholder={
                      (history === "Past history" && "Past medical history") ||
                      (history === "Notes" && "Notes") ||
                      (history === "Present history" &&
                        "History of present illness")
                    }
                    className={`textarea -mt-1 focus:outline-none textarea-bordered ${
                      history === "Past history" ||
                      history === "Notes" ||
                      history === "Present history"
                        ? "border-t-0 rounded-t-none "
                        : ""
                    } textarea-lg w-full`}
                  ></textarea>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* displaying all deatails section */}
        <div className=" ">
          <div></div>
        </div>

        {/* searching teatments or drugs or deases or advice section */}
        <div className="py-7 w-[20%] flex flex-col gap-5 h-full px-5 ">
          <div>
            <span className="text-xl font-sans font-semibold text-gray-600 ">Get drug template</span>
            <label className="relative">
              <input
                onChange={(e) => setDrugSearch(e.target.value)}
                className=" px-3 py-1 w-full focus:outline-none rounded-md border border-gray-200 "
                placeholder="Search drug"
                type="search"
              />
              <span
                className={
                  drugSearch.length > 0
                    ? "hidden"
                    : "absolute top-[1px] right-2 "
                }
              >
                <IoMdSearch className="text-2xl text-gray-400 " />
              </span>
            </label>
          </div>
          <div>
            <span className="text-xl font-sans font-semibold text-gray-600 ">Generic brand (random)</span>
            <label className="relative">
              <input
                onChange={(e) => setDrugSearch(e.target.value)}
                className=" px-3 py-1 w-full focus:outline-none rounded-md border border-gray-200 "
                placeholder="Search deneric brand"
                type="search"
              />
              <span
                className={
                  drugSearch.length > 0
                    ? "hidden"
                    : "absolute top-[1px] right-2 "
                }
              >
                <IoMdSearch className="text-2xl text-gray-400 " />
              </span>
            </label>
          </div>
          <div>
            <span className="text-xl font-sans font-semibold text-gray-600 ">Get teatment template</span>
            <label className="relative">
              <input
                onChange={(e) => setDrugSearch(e.target.value)}
                className=" px-3 py-1 w-full focus:outline-none rounded-md border border-gray-200 "
                placeholder="Search teatment template"
                type="search"
              />
              <span
                className={
                  drugSearch.length > 0
                    ? "hidden"
                    : "absolute top-[1px] right-2 "
                }
              >
                <IoMdSearch className="text-2xl text-gray-400 " />
              </span>
            </label>
          </div>
          <div>
            <span className="text-xl font-sans font-semibold text-gray-600 ">Get advice template</span>
            <label className="relative">
              <input
                onChange={(e) => setDrugSearch(e.target.value)}
                className=" px-3 py-1 w-full focus:outline-none rounded-md border border-gray-200 "
                placeholder="Search advice template"
                type="search"
              />
              <span
                className={
                  drugSearch.length > 0
                    ? "hidden"
                    : "absolute top-[1px] right-2 "
                }
              >
                <IoMdSearch className="text-2xl text-gray-400 " />
              </span>
            </label>
          </div>
          <div>
            <span className="text-xl font-sans font-semibold text-gray-600 ">Get C/C template</span>
            <label className="relative">
              <input
                onChange={(e) => setDrugSearch(e.target.value)}
                className=" px-3 py-1 w-full focus:outline-none rounded-md border border-gray-200 "
                placeholder="Search c/c template"
                type="search"
              />
              <span
                className={
                  drugSearch.length > 0
                    ? "hidden"
                    : "absolute top-[1px] right-2 "
                }
              >
                <IoMdSearch className="text-2xl text-gray-400 " />
              </span>
            </label>
          </div>
          <div>
            <span className="text-xl font-sans font-semibold text-gray-600 ">Get I/X template</span>
            <label className="relative">
              <input
                onChange={(e) => setDrugSearch(e.target.value)}
                className=" px-3 py-1 w-full focus:outline-none rounded-md border border-gray-200 "
                placeholder="Search drug"
                type="search"
              />
              <span
                className={
                  drugSearch.length > 0
                    ? "hidden"
                    : "absolute top-[1px] right-2 "
                }
              >
                <IoMdSearch className="text-2xl text-gray-400 " />
              </span>
            </label>
          </div>
          <div>
            <span className="text-xl font-sans font-semibold text-gray-600 ">Get O/E template</span>
            <label className="relative">
              <input
                onChange={(e) => setDrugSearch(e.target.value)}
                className=" px-3 py-1 w-full focus:outline-none rounded-md border border-gray-200 "
                placeholder="Search drug"
                type="search"
              />
              <span
                className={
                  drugSearch.length > 0
                    ? "hidden"
                    : "absolute top-[1px] right-2 "
                }
              >
                <IoMdSearch className="text-2xl text-gray-400 " />
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
