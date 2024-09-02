"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

export default function BestDoctors() {
  return (
    <div className=" py-8 mt-16 sm:px-10 sm:py-20 bg-gray-200 bg-opacity-50 ">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="w-full flex items-center justify-center"
      >
        <h1 className=" text-3xl sm:text-4xl font-bold ">Best Doctors</h1>
        <span className="text-5xl -mt-12 -ml-2 text-sky-500 font-bold ">+</span>
        <span className="text-4xl -mt-12 -ml-2 opacity-25 text-sky-500 font-bold ">
          +
        </span>
      </motion.div>

      {/* data displaying */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className=" w-[95%] mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 "
      >
        {doctors.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, duration: 2 }}
            className=" rounded-t-md bg-base-50 w-full shadow-sm"
          >
            <motion.div
              whileHover={{
                background: [
                  "rgba(52, 152, 219, 1)",
                  "rgba(52, 152, 219, 0.7)",
                  "rgba(52, 152, 219, 0)",
                ],
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              }}
              className=" relative w-full h-[200px] "
            >
              <Image
                
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
              <p className="absolute top-5 right-7 text-xl py-1 px-3 rounded-md text-slate-700 bg-white ">
                ${item.price}
              </p>
            </motion.div>
            <div className="card-body">
              <div className=" relative">
                <div className=" flex flex-col ">
                  <span className="card-title"> {item.name}</span>
                  <span className="text-sm text-gray-500 mt-1">
                    {item.specialty}
                  </span>
                </div>
                <p className=" flex items-center justify-center gap-1 w-16 absolute h-6 top-0 right-1 px-3 rounded-lg bg-yellow-400 ">
                  <span>
                    <FaStar className="text-[18px] text-white " />
                  </span>
                  <span className="text-white text-sm ">{item.rating}</span>
                </p>
              </div>
              <div className=" border mt-3 "></div>

              {/* location section */}
              <div className="mt-5 flex items-center justify-between">
                <p className="flex items-center gap-2">
                  <span>
                    <SlLocationPin className="text-xl text-gray-500 " />
                  </span>
                  <span className=" text-gray-800 ">{item.location}</span>
                </p>
                <div className=" text-right text-sm flex items-center gap-1 bg-sky-100 px-1 py-[2px] rounded-lg text-blue-500 ">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>
                  <span>{item.available ? "Available" : "Not availabel"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// doctors
const doctors = [
  {
    name: "Dr. John Smith",
    specialty: "Cardiology",
    rating: 4.7,
    location: "New York, NY",
    price: 150,
    available: true,
    image:
      "https://img.freepik.com/free-photo/doctor-smiling-looking-camera_23-2148075679.jpg?t=st=1723453471~exp=1723457071~hmac=7e028695310e4a34ffe3848e6883867a72063a15e896ef02a57f6a48922d2e24&w=740",
  },
  {
    name: "Dr. Emily Johnson",
    specialty: "Neurology",
    rating: 4.9,
    location: "Los Angeles, CA",
    price: 200,
    available: false,
    image:
      "https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?t=st=1723453419~exp=1723457019~hmac=43c904d5d3d5dd5de1a11f6f07ebfd17d9fc05ed7147364ba8c7580c6b88b897&w=1060",
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Pediatrics",
    rating: 4.5,
    location: "Chicago, IL",
    price: 120,
    available: true,
    image:
      "https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?t=st=1723453327~exp=1723456927~hmac=efabf57e842e0d5146e20d803d7d7734eeda6927c3a3602befdde3e33d45e6c9&w=1060",
  },
  {
    name: "Dr. Sarah Davis",
    specialty: "Orthopedics",
    rating: 4.6,
    location: "Houston, TX",
    price: 180,
    available: true,
    image:
      "https://img.freepik.com/free-photo/isolated-shotof-happy-successful-mature-senior-physician-wearing-medical-unifrom-stethoscope-having-cheerful-facial-expression-smiling-broadly-keeping-arms-crossed-chest_343059-2254.jpg?t=st=1723453509~exp=1723457109~hmac=06fedfe6b939ccd30ab67551b364694b94b13d24709fda363ed2c9ad897c9950&w=1060",
  },
];
