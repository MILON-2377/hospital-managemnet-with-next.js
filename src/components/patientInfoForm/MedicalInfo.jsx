"use cleint";

import { patientMedicalInfoAdd } from "@/redux/reducers/AddPatientInfo/AddPatientInfo";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";

export default function MedicalInfo() {
  const [isPhysiciansSelect, setIsPhysiciansSelect] = useState(physicians[0]);
  const [physicianSelct, setPhysicianSelect] = useState(false);
  const dispatch = useDispatch();
  const { register, setValue, handleSubmit } = useForm();

  //   handle physicians select
  const handlePhysiciansSelect = (item) => {
    setIsPhysiciansSelect(item);
    setValue("primaryPhysician", item);
    setPhysicianSelect(true);
  };

  // handle form submit
  const onSubmit = (data) => {
    dispatch(patientMedicalInfoAdd(data));
  };

  return (
    <div className=" border rounded-md p-5 mt-10 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full">
          <div className="flex flex-col gap-2">
            <span className="text-[18px] font-[500] text-gray-600 ">
              Primary care physician
            </span>

            <div className="dropdown">
              <div
                onClick={() => setPhysicianSelect(false)}
                tabIndex={0}
                role="button"
                className="px-4 py-2 flex items-center justify-between border border-gray-200 rounded-md "
              >
                <div className="flex items-center gap-3 px-3 py-2 border border-gray-200 bg-white rounded-md">
                  <div className="relative overflow-hidden w-8 h-8  rounded-full">
                    <Image
                      
                      src={isPhysiciansSelect?.image}
                      alt={isPhysiciansSelect.name}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      className="rounded-full "
                    />
                  </div>
                  <p className="text-[18px] font-[500] text-gray-700">
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
                    className=" px-4 py-2 transition-all duration-200 active:bg-base-50 active:scale-95 hover:cursor-pointer flex items-center gap-3 hover:bg-gray-100 rounded-md "
                  >
                    <div className="w-8 h-8 rounded-full relative overflow-hidden">
                      <Image
                        className="rounded-full "
                        src={item.image}
                        alt={item.name}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <p className=" text-gray-500 text-[18px] font-[500] ">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* input for physician */}
              <input
                type="hidden"
                {...register("primaryPhysician", { required: true })}
              />
            </div>
          </div>

          <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 gap-5 ">
            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-[18px] font-[500] text-gray-600 ">
                  InsuRance provider
                </span>
                <input
                  className="px-4 py-2 text-[18px] font-[500] placeholder:text-gray-500 text-gray-600 focus:border-cyan-500 focus:outline-none border border-gray-200 rounded-md bg-transparent "
                  placeholder="ex: CareLife Insurance"
                  type="text"
                  {...register("insuranceProvider", { required: true })}
                />
              </label>

              {/* allergies filed */}
              <label className="flex flex-col gap-2">
                <span className="text-[18px] font-[500] text-gray-600 ">
                  Allergies(any)
                </span>
                <textarea
                  className="textarea text-[18px] font-[500] border focus:border text-gray-600 focus:border-cyan-500 border-gray-200 focus:outline-none bg-transparent "
                  placeholder="ex: Peanuts, Penicillin, Pollen"
                  {...register("allergies", { required: true })}
                ></textarea>
              </label>

              {/* family medical history */}
              <label className="flex flex-col gap-2">
                <span className="text-[18px] font-[500] text-gray-600 ">
                  Family medical history
                </span>
                <textarea
                  className="textarea text-[18px] font-[500] border focus:border text-gray-600 focus:border-cyan-500 border-gray-200 focus:outline-none bg-transparent "
                  placeholder="ex: Mother had breast cancer"
                  {...register("family_medical_history", { required: true })}
                ></textarea>
              </label>
            </div>

            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-[18px] font-[500] text-gray-600 ">
                  InsuRance policy number
                </span>
                <input
                  className="px-4 py-2 text-[18px] font-[500] placeholder:text-gray-500 text-gray-600 focus:border-cyan-500 focus:outline-none border border-gray-200 rounded-md bg-transparent "
                  placeholder="ex: CareLife Insurance"
                  type="text"
                  {...register("insurance_policy_number", { required: true })}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[18px] font-[500] text-gray-600 ">
                  Current medications
                </span>
                <textarea
                  className="textarea text-[18px] font-[500] border focus:border text-gray-600 focus:border-cyan-500 border-gray-200 focus:outline-none bg-transparent "
                  placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
                  {...register("current_medications", { required: true })}
                ></textarea>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[18px] font-[500] text-gray-600 ">
                  Past medical history
                </span>
                <textarea
                  className="textarea text-[18px] font-[500] border focus:border text-gray-600 focus:border-cyan-500 border-gray-200 focus:outline-none bg-transparent "
                  placeholder="ex: Asthma diagnosis in childhood"
                  {...register("past_medical_history", { required: true })}
                ></textarea>
              </label>
            </div>
          </div>
        </div>

        {/* button section */}
        <div className="mb-5 flex justify-end">
          <button className=" w-[200px]  mt-10 btn btn-accent text-white ">
            <span className="text-[16px]">Next</span>
            <FaArrowRightLong className="text-[16px] ml-3" />
          </button>
        </div>
      </form>
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
