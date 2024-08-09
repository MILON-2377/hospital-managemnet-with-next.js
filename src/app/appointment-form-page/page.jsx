"use client";

import Image from "next/image";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import image1 from "../../../public/appoit5.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axiosSecure from "@/Hooks/userAxiosSecure";
import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useRouter } from "next/navigation";

export default function Appointment() {
  const { user } = useAuth();
  const [isPhysiciansSelect, setIsPhysiciansSelect] = useState(physicians[0]);
  const [physicianSelct, setPhysicianSelect] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  //   handle physicians select
  const handlePhysiciansSelect = (item) => {
    setIsPhysiciansSelect(item);
    setValue("doctor", item);
    setPhysicianSelect(true);
  };

  // form handle
  const onSubmit = async (data) => {
    setIsSubmit(true);
    const patientId = user?.email;
    try {
      const res = await axiosSecure.post("/create-appointment", {
        patientId,
        ...data,
      });

      if (res.data.saveDocument) {
        router.push("/appointment-form-page/appointmentSubmit");
        setIsSubmit(false);
        reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-white w-full h-screen grid lg:grid-cols-2 gap-36 ">
      <div className="columns-1 p-10 ">
        <div>
          <h1 className="text-3xl text-gray-600 font-bold">Hey there</h1>
          <p className="text-xl text-gray-600 mt-2">
            Request a new appointment in 10 seconds
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col mt-10 gap-2">
            <span className="text-xl text-gray-400 ">
              Primary care physician
            </span>

            <div className="dropdown">
              <div
                onClick={() => setPhysicianSelect(false)}
                tabIndex={0}
                role="button"
                className="px-4 py-2 flex items-center justify-between border border-gray-200 rounded-md "
              >
                <div className="flex items-center gap-3 px-3 py-2 border border-gray-200 bg-base-200  rounded-md">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full">
                    <img
                      className="w-full h-full rounded-full object-conver "
                      src={isPhysiciansSelect?.image}
                      alt={isPhysiciansSelect.name}
                    />
                  </div>
                  <p className="text-xl text-gray-700">
                    {isPhysiciansSelect?.name}
                  </p>
                </div>
                <span>
                  <IoMdArrowDropdown className="text-4xl text-gray-300" />
                </span>
              </div>
              <div
                tabIndex={0}
                className={`${
                  physicianSelct ? "hidden" : ""
                } dropdown-content menu w-full overflow-y-scroll h-[500px] bg-base-100  rounded-box z-[1]  p-5 shadow-xl `}
              >
                {physicians?.map((item, index) => (
                  <div
                    onClick={() => handlePhysiciansSelect(item)}
                    key={index}
                    className=" px-4 py-2 transition-all hover:bg-gray-100 duration-200 active:bg-base-100 active:scale-95 hover:cursor-pointer flex items-center gap-3 hover:bg-base-50 rounded-md "
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100">
                      <img
                        className="w-full h-full object-cover rounded-full "
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <p className=" text-gray-500 text-xl ">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* input field for doctor */}
            <input type="hidden" {...register("doctor", { required: true })} />
          </div>

          <div className="gird grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className="text-xl text-gray-400">
                Reason for appointment
              </span>
              <textarea
                className="textarea border placeholder:text-xl text-xl border-gray-200 bg-transparent text-gray-700 focus:border-gray-300 focus:outline-none"
                placeholder="ex: Annual montly check-up"
                {...register("appointment_reason", { required: true })}
              ></textarea>
            </label>
            <label className="flex flex-col mt-5 gap-2">
              <span className="text-xl text-gray-400">
                Additional comments/notes
              </span>
              <textarea
                className="textarea border placeholder:text-xl border-gray-200 bg-transparent text-gray-700 text-xl focus:border-gray-300 focus:outline-none"
                placeholder="ex: Prefer afternoon appointments, if possible"
                {...register("comments", { required: true })}
              ></textarea>
            </label>
          </div>

          <div>
            {/* email address */}
            <div className="flex flex-col gap-2">
              <span className="text-xl text-gray-400 ">
                Expected appointment date
              </span>
              <label
                className={`px-3 flex items-center gap-4 border border-gray-200 rounded-md `}
              >
                <span>
                  <FaCalendarAlt className=" text-2xl text-gray-300 " />
                </span>
                <input
                  className="py-2 focus:border-none text-xl border-none placeholder:text-gray-300 text-gray-700  focus:outline-none border border-gray-200 rounded-md bg-transparent "
                  placeholder="milon.miah@qq.com"
                  type="date"
                  {...register("expected_date", { required: true })}
                />
              </label>
            </div>
          </div>
          {isSubmit ? (
            <>
              <button className="btn flex items-center gap-3 btn-accent text-white w-full mt-10">
                <span className="loading loading-spinner text-secondary"></span>
                <span className="text-white">Submitting</span>
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-accent text-white w-full mt-10">
                Submit and continue
              </button>
            </>
          )}
        </form>
      </div>

      <div className="w-full h-full hidden lg:flex items-center justify-center  ">
        <Image
          src={image1}
          className=" object-cover "
          alt="appointment page image"
        />
      </div>
    </div>
  );
}

// physicians data
const physicians = [
  {
    name: "Dr. Amelia Clark",
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722988800&semt=ais_hybrid",
  },
  {
    name: "Dr. Benjamin Harris",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrvAnH8x8gRLqFn8FA0BMbruLuW03TLsVlDFBTbAryfo1ktNr1CEdZgpt8KdFMpzoXls&usqp=CAU",
  },
  {
    name: "Dr. Charlotte Turner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvDicxBqpM71FV2L8OpQNsrnR22j7VuM55xudDnigVymik53bR3G2erY6m-VEny7Pzlc&usqp=CAU",
  },
  {
    name: "Dr. Daniel Moore",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC520FIbxCOEkEXXUwQa-rF3XUk9bmigPiIBu0IKYcun3Y7u_oVg_OiPmfK4-hECJMK5g&usqp=CAU",
  },
  {
    name: "Dr. Eleanor White",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUSFsUJ5Q1kYPD9TNqnq_x_MBWoVRAY_go0KNdlY87HFVgreOcbq9ulk6UAtAsq6GNE0&usqp=CAU",
  },
  {
    name: "Dr. Frank Thompson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOzLBl1lUl-Pe9v83CwdzEm7wr7zV4l3v8eyOIk5jlMDhCCqTmkDD52Tuj63_0e5eLpE&usqp=CAU",
  },
  {
    name: "Dr. Grace Taylor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmhOXTH16dyqtHzr_deD2R2SURnW9kQ3gc05N2xujiWiqhoLY5CraRjOC_WSum7OaJFM&usqp=CAU",
  },
  {
    name: "Dr. Henry Walker",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt82_cnU89WOOlZ9sQlhqxJj9iT0TtgF-h6Q&s",
  },
  {
    name: "Dr. Isabella Hall",
    image:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
  },
  {
    name: "Dr. James Allen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIV7K54SKo84G09sIJIKpITILD2ijCJq3dQ&usqp=CAU",
  },
  {
    name: "Dr. Katherine Young",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRdcpYhs4zZAeJNYXfJBB5HfQGlTJSlR6hj7mWRnKB6Y9yAM6M0P5MJVNyGyHowB1_0E&usqp=CAU",
  },
  {
    name: "Dr. Lucas Scott",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKc2AyX_0zctWQx4_k1PpO67GZxw_V1rpHxVEHSGIpRTMrLen9Ja2-Widpdj5Gx_NeQ4&usqp=CAU",
  },
  {
    name: "Dr. Mia Hernandez",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwzp_IS5RILoz4cvWEhCAgRRxr-D-TkSW9xPQmVKumakyxwuMuJRRWkOnxNjgNkp5anY&usqp=CAU",
  },
  {
    name: "Dr. Nathan King",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6ya6ztOXFqaoO4WG8BjrCHW0hXfJn7whTQ&usqp=CAU",
  },
  {
    name: "Dr. Olivia Green",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeeDHQPckM6LuC68MjCQvxH559Emx6JtmM-hYesHTl7KhTY4BJWHM-g_NiGR6WGiEE8Y&usqp=CAU",
  },
];
