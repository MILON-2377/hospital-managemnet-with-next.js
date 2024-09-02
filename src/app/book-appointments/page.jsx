"use client";

import Loading from "@/components/Loading/Loading";
import useDoctorsData from "@/DataFetch/useDoctorsData";
import {
  addDoctor,
  singleDoctorSlice,
} from "@/redux/reducers/AddDoctorSlice/addDoctorSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCalendarDay, FaCheckCircle, FaHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function BookAppointments() {
  const id = 1;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsData, setDoctorsData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // data loading
  const { data = [], refetch, isLoading } = useDoctorsData(currentPage, search);

  useEffect(() => {
    if (data) {
      setDoctorsData(data.doctors);
      const newTotalPage = data.total ? Math.ceil(data.total / 10) : 1;

      if (newTotalPage !== totalPage) {
        setTotalPage(newTotalPage);
      }

      const pagesArray = Array.from(
        { length: newTotalPage },
        (_, idx) => idx + 1
      );

      if (JSON.stringify(pagesArray) !== JSON.stringify(pages)) {
        setPages(pagesArray);
      }
    }
  }, [data, totalPage, pages]);

  // onClickNext handle
  const onClickNext = () => {
    if (totalPage === currentPage) return;
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
  };

  const onClickPrev = () => {
    if (currentPage === 1) return;
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
  };

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  // search doctors handle
  const onSearch = (e) => {
    e.preventDefault();
    refetch();
    e.target.reset();
  };

  if (isLoading) return <Loading />;

  return (
    <div className=" w-full p-5 ">
      {/* header section */}
      <section className=" mt-5 flex sm:flex-row flex-col gap-3 sm:gap-0 sm:items-center justify-between ">
        <p className="text-xl sm:text-2xl font-bold ">All Doctors</p>

        {/* search bar */}
        <form onSubmit={onSearch}>
          <label className=" relative ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className=" w-full sm:w-auto px-4 py-2 rounded-md focus:outline-none border "
            />
            <span className=" absolute top-[1px] right-3 ">
              <IoSearchOutline className=" text-xl text-gray-500 " />
            </span>
          </label>
        </form>
      </section>

      <div className=" mt-5 mb-5 border-t w-full "></div>

      {/* displaying doctors */}
      <div className=" grid lg:grid-cols-3 gap-5 grid-cols-1 sm:grid-cols-2 ">
        {doctorsData?.map((item, idx) => (
          <div
            key={item.name + idx}
            className=" rounded-md border bg-white shadow "
          >
            <div className=" relative flex items-center justify-center p-5 ">
              <div className="relative overflow-hidden w-20 h-20 rounded-lg ">
                <Image
                  src={item.img}
                  alt={item.img}
                  fill={true}
                  style={{objectFit:'cover'}}
                  className="rounded-md "
                />
              </div>
              <div className=" absolute right-10  p-2 rounded-full bg-gray-50 hover:cursor-pointer flex items-center justify-center ">
                <FaHeart className=" text-[16px] text-red-500 " />
              </div>
            </div>

            {/* name  and speciality */}
            <div className=" px-5 flex items-center justify-center flex-col gap-3">
              <div className=" flex items-center justify-center gap-5 ">
                <p className=" card-title text-[18px] ">{item.name}</p>
                <FaCheckCircle className=" text-xl text-green-500 " />{" "}
              </div>
              <p className=" text-[16px] text-gray-600 font-[500] text-center ">
                {item.degree}
              </p>

              {/* rating */}
              <div className="flex items-center gap-3">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <span className=" text-[18px] font-[500] text-yellow-500 ">
                  {item.rating}
                </span>
              </div>
            </div>

            <div className=" px-5 flex flex-col gap-3 mt-3">
              <p className="flex items-center gap-2">
                <FaCalendarDay className=" text-gray-600 text-sm " />
                <span className=" text-[16px] font-[500] ">
                  Next Availabililty :{" "}
                  {new Date(item.nextAvailability).toLocaleString()}
                </span>
              </p>
              <p className="flex items-center gap-1">
                <MdLocationOn className=" text-gray-600 text-xl " />
                <span className=" text-[16px] font-[500] ">
                  {" "}
                  Location : {item.location}
                </span>
              </p>

              <p className="text-[16px] font-[500] text-center px-4 py-2 rounded-md bg-gray-100 ">
                Last book on : {new Date(item.lastBooked).toLocaleDateString()}
              </p>
            </div>

            <div className=" mt-5 mb-5 border-t w-full "></div>

            <div className=" p-5 flex sm:flex-row flex-col sm:items-center justify-center gap-5 ">
              <Link
                href={`/book-appointments/${id}`}
                onClick={() => {
                  dispatch(addDoctor(item));
                }}
                className=" px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-200 transition-all duration-200 font-semibold text-[16px] "
              >
                View Profile
              </Link>
              <button
                onClick={() => {
                  router.push(`/book-appointments/book-appointment-view`);
                  dispatch(addDoctor(item));
                }}
                className=" px-4 py-2 rounded-md text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 font-semibold text-[16px] "
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className=" mt-10 w-full p-5 flex items-center gap-3 justify-center ">
        <button onClick={onClickPrev} className="  text-white btn btn-accent  ">
          Previous
        </button>

        <div className=" flex items-center gap-2 ">
          {pages?.map((item, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(item)}
              className={` ${
                item === currentPage && "bg-pink-500 text-white"
              } px-4 py-3 transition-all duration-200 hover:bg-gray-200 rounded-md bg-gray-100 text-black font-[500] `}
            >
              {item}
            </button>
          ))}
        </div>

        <button onClick={onClickNext} className=" text-white btn btn-accent  ">
          Next
        </button>
      </div>
    </div>
  );
}
