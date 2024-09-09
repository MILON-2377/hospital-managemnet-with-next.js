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
      "https://img.freepik.com/free-photo/smiling-asian-female-doctor-shows-thumbs-up-wears-rubber-gloves-clinic-uniform-stands-white-background_1258-83376.jpg?t=st=1725900269~exp=1725903869~hmac=fc102e1e891ad65c774f694d11797616edc602dc6e14e5084631cccf10cdeefa&w=900",
  },
  {
    name: "Dr. Charlotte Turner",
    image:
      "https://img.freepik.com/free-photo/doctor-smiling-looking-camera_23-2148075679.jpg?t=st=1725900287~exp=1725903887~hmac=f44fcf8234860f9aa33d4ff75664d2dc2c8dbb6fb04e0a4dad51d47599f7882b&w=740",
  },
  {
    name: "Dr. Daniel Moore",
    image:
      "https://img.freepik.com/free-photo/beautiful-female-doctor-white-coat-posing-with-stethoscope-white-wall_114579-90452.jpg?t=st=1725900303~exp=1725903903~hmac=45d8d49da1258d56b039b97aa59448c88a4bc0e82cf704a33f324eb16a2d585c&w=900",
  },
  {
    name: "Dr. Eleanor White",
    image:
      "https://img.freepik.com/free-photo/smiling-doctor-asian-woman-with-arms-crossed-against-white-wall_231208-13143.jpg?t=st=1725900317~exp=1725903917~hmac=29af3d85be7fb94abbbf3de1327f92b7a84c7a2168b8989cfae4e9438a2a2ce3&w=900",
  },
  {
    name: "Dr. Frank Thompson",
    image:
      "https://img.freepik.com/free-photo/confident-young-asian-female-doctor-white-medical-uniform-with-stethoscope_7861-2837.jpg?t=st=1725900333~exp=1725903933~hmac=e4b4c0af4695335a3b6430942cf41e3241d40eb97256303e9ddb75940ca2030e&w=900",
  },
  {
    name: "Dr. Grace Taylor",
    image:
      "https://img.freepik.com/free-photo/healthcare-workers-coronavirus-covid-19-pandemic-insurance-concept-close-up-serious-young-doctor-white-coat-glasses-listen-closely-patient-cross-arms-chest-holding-stethoscope_1258-58654.jpg?t=st=1725900349~exp=1725903949~hmac=6e709f760262cc706d2256daa3fc2b5a1724e8dd95e563b553bbc583fbda6a45&w=900",
  },
  {
    name: "Dr. Henry Walker",
    image:
      "https://img.freepik.com/free-photo/content-mature-doctor-with-hands-pockets_1262-7199.jpg?t=st=1725900364~exp=1725903964~hmac=57fd0f8b90fe783bba9c51d74d250c41a24c23d9a4017c5a8c1b8c3cda86afe2&w=900",
  },
  {
    name: "Dr. Isabella Hall",
    image:
      "https://img.freepik.com/free-photo/male-doctor-posing-front-white-bricks-wall_23-2148328399.jpg?t=st=1725900382~exp=1725903982~hmac=6560074a9a029794546d3ac605cc35c4c1d48d82dfc167ad3285ceeab8559bc9&w=900",
  },
  {
    name: "Dr. James Allen",
    image:
      "https://img.freepik.com/free-photo/doctor-using-tablet-computer-isolated-white-wall_231208-841.jpg?t=st=1725900399~exp=1725903999~hmac=88dfc4292472cf0b4a5e1d1b518bb7c4b90c4e1c9c19c83c5da5a33711e40473&w=900",
  },
  {
    name: "Dr. Katherine Young",
    image:
      "https://img.freepik.com/free-photo/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept-enthusiastic-smiling-male-doctor-glad-help-patients-physician-white-coat-happy-working-clinic-hospital_1258-57450.jpg?t=st=1725900418~exp=1725904018~hmac=8ff8a7d2491665239c57fbfe77437fad079055ac8be96e189616c8f1d125d84f&w=900",
  },
  {
    name: "Dr. Lucas Scott",
    image:
      "https://img.freepik.com/free-photo/happy-young-male-doctor-using-tablet-computer_1262-18254.jpg?t=st=1725900432~exp=1725904032~hmac=4841296b066f798dd101479e19306c47434fa9d3e0fc93e1aabee357ed606552&w=900",
  },
  {
    name: "Dr. Mia Hernandez",
    image:
      "https://img.freepik.com/free-photo/young-asia-male-doctor-white-medical-uniform-with-stethoscope-looking-camera-smile-arms-crossed-while-video-conference-call-with-patient-health-hospital_7861-3128.jpg?t=st=1725900461~exp=1725904061~hmac=5f812121d399aa05a6c2ab4b1158d3137f2c0e036b9262d84c9722c4caff5138&w=900",
  },
  {
    name: "Dr. Nathan King",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-hispanic-woman-doctor-smiling-confident-standing-with-arms-crossed-gesture-isolated-white-background_839833-34255.jpg?t=st=1725900475~exp=1725904075~hmac=4c239247b00515f3369a0185a0b20a48eca7aaa77c0e404df145a7fde2d23392&w=900",
  },
  {
    name: "Dr. Olivia Green",
    image:
      "https://img.freepik.com/free-photo/healthcare-workers-medicine-insurance-covid-19-pandemic-concept-skeptical-confused-female-doctor-white-scrubs-medical-suit-glasses-raise-eyebrow-judgemental-smirk-displeased_1258-57393.jpg?t=st=1725900490~exp=1725904090~hmac=9a5dc9bb658fbae5c8aab3c8e5b8e8b50ba05df3138409e670cddf70b8409eb9&w=900",
  },
];
