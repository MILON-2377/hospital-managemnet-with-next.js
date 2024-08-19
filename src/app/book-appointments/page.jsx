"use client";

import { FaCalendarDay, FaCheckCircle, FaHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

export default function BookAppointments() {
  const id = 1;
  return (
    <div className=" w-full p-5 ">
      {/* header section */}
      <section className=" mt-5 flex items-center justify-between ">
        <p className=" text-2xl font-bold ">All Doctors</p>

        {/* search bar */}
        <label className=" relative ">
          <input
            type="text"
            placeholder="Search"
            className=" px-4 py-2 rounded-md focus:outline-none border "
          />
          <span className=" absolute top-[13px] right-3 ">
            <IoSearchOutline className=" text-xl text-gray-500 " />
          </span>
        </label>
      </section>

      <div className=" mt-5 mb-5 border-t w-full "></div>

      {/* displaying doctors */}
      <div className=" grid lg:grid-cols-3 gap-5 grid-cols-1 sm:grid-cols-2 ">
        {[...doctors].map((item, idx) => (
          <div
            key={item.name + idx}
            className=" rounded-md border bg-white shadow "
          >
            <div className=" relative flex items-center justify-center p-5 ">
              <div className=" w-16 h-16 rounded-lg bg-blue-200 "></div>
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
                <span className=" text-[18px] font-[500] text-yellow-500 ">{item.rating}</span>
              </div>
            </div>

            <div className=" px-5 flex flex-col gap-3 mt-3">
              <p className="flex items-center gap-2">
                <FaCalendarDay className=" text-gray-600 text-sm " />
                <span className=" text-[16px] font-[500] ">
                  Next Availabililty : {item.nextAvailability}
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
                Last book on : {item.lastBooked}
              </p>
            </div>

            <div className=" mt-5 mb-5 border-t w-full "></div>

            <div className=" p-5 flex items-center justify-center gap-5 ">
              <a
                href={`/book-appointments/${id}`}
                className=" px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-200 transition-all duration-200 font-semibold text-[16px] "
              >
                View Profile
              </a>
              <button className=" px-4 py-2 rounded-md text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 font-semibold text-[16px] ">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// doctors data
const doctors = [
  {
    name: "Dr. Susan Fenimore",
    degree: "BSG - Bachelor of Science in Genetic Counseling",
    rating: 4.0,
    nextAvailability: "11 Apr 2024",
    location: "Chicago, USA",
    lastBooked: "08 Feb 2023",
    img: "https://example.com/images/dr-susan-fenimore.jpg",
    bio: "Dr. Susan Fenimore is an experienced genetic counselor with a background in genetic disorders and personalized patient care.",
  },
  {
    name: "Dr. Martin Adian",
    degree: "BDS, MDS - Oral & Maxillofacial Surgery",
    rating: 5.0,
    nextAvailability: "02 Mar 2024",
    location: "Old Trafford, UK",
    lastBooked: "20 Jan 2023",
    img: "https://example.com/images/dr-martin-adian.jpg",
    bio: "Dr. Martin Adian specializes in oral and maxillofacial surgery, offering advanced care in facial trauma and reconstruction.",
  },
  {
    name: "Dr. Emily Johnson",
    degree: "MD - Cardiology",
    rating: 4.5,
    nextAvailability: "15 May 2024",
    location: "New York, USA",
    lastBooked: "10 Mar 2023",
    img: "https://example.com/images/dr-emily-johnson.jpg",
    bio: "Dr. Emily Johnson is a cardiologist known for her work in heart disease prevention and treatment.",
  },
  {
    name: "Dr. John Miller",
    degree: "MBBS, MD - Pediatrics",
    rating: 4.7,
    nextAvailability: "01 Jun 2024",
    location: "Sydney, Australia",
    lastBooked: "15 Feb 2023",
    img: "https://example.com/images/dr-john-miller.jpg",
    bio: "Dr. John Miller is a pediatrician dedicated to providing comprehensive care for children and adolescents.",
  },
  {
    name: "Dr. Clara Smith",
    degree: "MD - Dermatology",
    rating: 4.8,
    nextAvailability: "20 Apr 2024",
    location: "Toronto, Canada",
    lastBooked: "05 Jan 2023",
    img: "https://example.com/images/dr-clara-smith.jpg",
    bio: "Dr. Clara Smith specializes in dermatology with expertise in skin cancer treatment and cosmetic dermatology.",
  },
  {
    name: "Dr. James Lee",
    degree: "PhD - Neuroscience",
    rating: 4.9,
    nextAvailability: "07 Jul 2024",
    location: "Seoul, South Korea",
    lastBooked: "22 Feb 2023",
    img: "https://example.com/images/dr-james-lee.jpg",
    bio: "Dr. James Lee is a leading neuroscientist with a focus on neurodegenerative diseases and brain health.",
  },
  {
    name: "Dr. Anna Garcia",
    degree: "MD - Obstetrics and Gynecology",
    rating: 4.3,
    nextAvailability: "18 May 2024",
    location: "Madrid, Spain",
    lastBooked: "25 Mar 2023",
    img: "https://example.com/images/dr-anna-garcia.jpg",
    bio: "Dr. Anna Garcia is an OB-GYN providing compassionate care in women’s health and reproductive medicine.",
  },
  {
    name: "Dr. William Brown",
    degree: "MD - Orthopedic Surgery",
    rating: 4.6,
    nextAvailability: "25 Jun 2024",
    location: "Los Angeles, USA",
    lastBooked: "12 Apr 2023",
    img: "https://example.com/images/dr-william-brown.jpg",
    bio: "Dr. William Brown is an orthopedic surgeon known for his expertise in joint replacement and sports injuries.",
  },
  {
    name: "Dr. Linda Harris",
    degree: "DVM - Veterinary Medicine",
    rating: 4.4,
    nextAvailability: "30 Aug 2024",
    location: "London, UK",
    lastBooked: "05 Mar 2023",
    img: "https://example.com/images/dr-linda-harris.jpg",
    bio: "Dr. Linda Harris is a veterinarian specializing in small animal care with a focus on preventive medicine.",
  },
  {
    name: "Dr. Michael Johnson",
    degree: "MD - Psychiatry",
    rating: 4.2,
    nextAvailability: "12 Sep 2024",
    location: "Berlin, Germany",
    lastBooked: "01 Feb 2023",
    img: "https://example.com/images/dr-michael-johnson.jpg",
    bio: "Dr. Michael Johnson is a psychiatrist with a deep understanding of mental health disorders and therapeutic interventions.",
  },
];
