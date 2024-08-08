"use client";

import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

export default function PatientForm() {
  const [email, setEmail] = useState("");
  const [isPhysiciansSelect, setIsPhysiciansSelect] = useState(physicians[0]);
  const [physicianSelct, setPhysicianSelect] = useState(false);

  //   handle physicians select
  const handlePhysiciansSelect = (item) => {
    setIsPhysiciansSelect(item);
    setPhysicianSelect(true);
  };

  return (
    <div className=" w-full bg-[#131619] p-10 ">
      <div>
        <h1 className="text-2xl font-bold text-white ">Welcome to CareLife</h1>
        <p className="text-sm mt-2 text-gray-300 ">
          Let us know more about yourself
        </p>
      </div>

      {/* form section */}
      <form className=" w-full mt-10 ">
        {/* personal info */}
        <div className="  lg:w-[50%] w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-white">
            Personal information
          </h1>
          <label className="flex flex-col gap-1">
            <span className="text-xl text-gray-400 ">Full name</span>
            <input
              className="px-4 py-2 placeholder:text-gray-500 text-gray-500 focus:border-cyan-500 focus:outline-none border border-gray-500 rounded-md bg-transparent "
              placeholder="ex: milon miah"
              type="text"
            />
          </label>

          <div className=" grid sm:grid-cols-2 gap-5 ">
            <div className=" flex flex-col gap-5 ">
              {/* email address */}
              <div className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">Email address</span>
                <label
                  className={`${
                    email ? "border-cyan-500" : ""
                  } px-3 flex items-center gap-4 border border-gray-500 rounded-md `}
                >
                  <span>
                    <MdOutlineMailOutline className=" text-2xl text-gray-400 " />
                  </span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2 focus:border-none border-none placeholder:text-gray-500 text-gray-300  focus:outline-none border border-gray-500 rounded-md bg-transparent "
                    placeholder="milon.miah@qq.com"
                    type="email"
                  />
                </label>
              </div>

              {/* date of birth */}
              <div className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">Email address</span>
                <label
                  className={`${
                    email ? "border-cyan-500" : ""
                  } px-3 flex items-center gap-4 border border-gray-500 rounded-md `}
                >
                  <span>
                    <FaCalendarAlt className=" text-xl text-gray-400 " />
                  </span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2 focus:border-none border-none placeholder:text-gray-500 text-gray-500  focus:outline-none border border-gray-200 rounded-md bg-transparent "
                    placeholder="Select your date of birth"
                    type="date"
                  />
                </label>
              </div>

              {/* address */}
              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">Address</span>
                <input
                  className="px-4 py-2 placeholder:text-gray-500 text-gray-300 focus:border-cyan-500 focus:outline-none border border-gray-500 rounded-md bg-transparent "
                  placeholder="Ex: 1302 Kolabagan, Dhaka "
                  type="text"
                />
              </label>

              {/* emergency contract */}
              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">
                  Emergency contact name
                </span>
                <input
                  className="px-4 py-2 placeholder:text-gray-500 text-gray-500 focus:border-cyan-500 focus:outline-none border border-gray-500 rounded-md bg-transparent "
                  placeholder="Guardian's name "
                  type="text"
                />
              </label>
            </div>

            <div className="flex flex-col gap-5">
              {/* Insurance policy number */}
              <div className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">Insurance number</span>
                <label
                  className={`${
                    email ? "border-cyan-500" : ""
                  } px-3 flex items-center gap-4 border border-gray-500 rounded-md `}
                >
                  <span>
                    <IoCallOutline className=" text-2xl text-gray-400 " />
                  </span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2 focus:border-none border-none placeholder:text-gray-500 text-gray-500  focus:outline-none border border-gray-200 rounded-md bg-transparent "
                    placeholder="+86 03584562"
                    type="email"
                  />
                </label>
              </div>

              {/* gender */}
              <div>
                <span className="text-xl text-gray-400  ">Gender</span>
                <div className=" mt-2 flex items-center justify-between sm:gap-2 lg:gap-5 ">
                  <label className="label flex items-center sm:gap-2  px-2  cursor-pointer border border-gray-500 border-dashed rounded-md ">
                    <span className="text-xl text-gray-500 ">Male</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio border border-gray-500 checked:bg-accent"
                      defaultChecked
                    />
                  </label>
                  <label className="label flex items-center sm:gap-2  px-2  cursor-pointer border border-gray-500 border-dashed rounded-md ">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio border border-gray-500 checked:bg-accent"
                      defaultChecked
                    />
                    <span className="text-xl text-gray-500 ">Female</span>
                  </label>
                  <label className="label flex items-center sm:gap-2  px-2  cursor-pointer border border-gray-500 border-dashed rounded-md ">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio border border-gray-500 checked:bg-accent"
                      defaultChecked
                    />
                    <span className="text-xl text-gray-500 ">other</span>
                  </label>
                </div>
              </div>

              {/* occupation */}
              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">Occupation</span>
                <input
                  className="px-4 py-2 placeholder:text-gray-500 text-gray-300 focus:border-cyan-500 focus:outline-none border border-gray-500 rounded-md bg-transparent "
                  placeholder="Software Engineer"
                  type="text"
                />
              </label>

              {/* phone number */}
              <div className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">Phone number</span>
                <label
                  className={`${
                    email ? "border-cyan-500" : ""
                  } px-3 flex items-center gap-4 border border-gray-500 rounded-md `}
                >
                  <span>
                    <IoCallOutline className=" text-2xl text-gray-400 " />
                  </span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2 focus:border-none border-none placeholder:text-gray-500 text-gray-300  focus:outline-none border border-gray-500 rounded-md bg-transparent "
                    placeholder="+86 13185084668"
                    type="email"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="divider lg:w-[50%] w-full divider-neutral mt-10 text-gray-500">
          and
        </div>

        {/* medical info */}
        <div className="mt-10 lg:w-[50%] w-full">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Medical Information
            </h1>
          </div>

          <div className="flex flex-col mt-10 gap-1">
            <span className="text-xl text-gray-400 ">
              Primary care physician
            </span>

            <div className="dropdown">
              <div
                onClick={() => setPhysicianSelect(false)}
                tabIndex={0}
                role="button"
                className="px-4 py-2 flex items-center justify-between border border-gray-500 rounded-md "
              >
                <div className="flex items-center gap-3 px-3 py-2 border border-gray-600 bg-gray-800 rounded-md">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full">
                    <img
                      className="w-full h-full rounded-full object-conver "
                      src={isPhysiciansSelect?.image}
                      alt={isPhysiciansSelect.name}
                    />
                  </div>
                  <p className="text-xl text-gray-200">
                    {isPhysiciansSelect?.name}
                  </p>
                </div>
                <span>
                  <IoMdArrowDropdown className="text-4xl text-gray-500" />
                </span>
              </div>
              <div
                tabIndex={0}
                className={`${
                  physicianSelct ? "hidden" : ""
                } dropdown-content menu w-full overflow-y-scroll h-[500px] bg-slate-950  rounded-box z-[1]  p-5 shadow-xl `}
              >
                {physicians?.map((item, index) => (
                  <div
                    onClick={() => handlePhysiciansSelect(item)}
                    key={index}
                    className=" px-4 py-2 transition-all duration-200 active:bg-gray-700 active:scale-95 hover:cursor-pointer flex items-center gap-3 hover:bg-slate-800 rounded-md "
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
          </div>

          <div className="grid mt-5 grid-cols-2 gap-5 ">
            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">
                  InsuRance provider
                </span>
                <input
                  className="px-4 py-2 placeholder:text-gray-500 text-gray-300 focus:border-cyan-500 focus:outline-none border border-gray-500 rounded-md bg-transparent "
                  placeholder="ex: CareLife Insurance"
                  type="text"
                />
              </label>

              {/* allergies filed */}
              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">Allergies(any)</span>
                <textarea
                  className="textarea border focus:border text-gray-300 focus:border-cyan-500 border-gray-500 focus:outline-none bg-transparent "
                  placeholder="ex: Peanuts, Penicillin, Pollen"
                ></textarea>
              </label>

              {/* family medical history */}
              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">
                  Family medical history
                </span>
                <textarea
                  className="textarea border focus:border text-gray-300 focus:border-cyan-500 border-gray-500 focus:outline-none bg-transparent "
                  placeholder="ex: Mother had breast cancer"
                ></textarea>
              </label>
            </div>

            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">
                  InsuRance policy number
                </span>
                <input
                  className="px-4 py-2 placeholder:text-gray-500 text-gray-300 focus:border-cyan-500 focus:outline-none border border-gray-500 rounded-md bg-transparent "
                  placeholder="ex: CareLife Insurance"
                  type="text"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">
                  Current medications
                </span>
                <textarea
                  className="textarea border focus:border text-gray-300 focus:border-cyan-500 border-gray-500 focus:outline-none bg-transparent "
                  placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
                ></textarea>
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-xl text-gray-400 ">
                  Past medical history
                </span>
                <textarea
                  className="textarea border focus:border text-gray-300 focus:border-cyan-500 border-gray-500 focus:outline-none bg-transparent "
                  placeholder="ex: Asthma diagnosis in childhood"
                ></textarea>
              </label>
            </div>
          </div>
        </div>

        <div className="divider lg:w-[50%] w-full divider-neutral mt-10 text-gray-500">
          and
        </div>

        {/* Identification and Verfication */}
        <div className="lg:w-[50%] w-full mt-10">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Identification and Verification
            </h1>
          </div>

          <div className="flex flex-col gap-5 mt-7">
            <label className="flex flex-col gap-1">
              <span className="text-xl text-gray-400 ">
                Identification type
              </span>
              <select className="select border border-gray-500 bg-transparent text-gray-300 focus:outline-none w-full ">
                <option>Birth Certification</option>
                <option>Password</option>
                <option>National Id Card</option>
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xl text-gray-400 ">
                Identification Number
              </span>
              <input
                className="px-4 py-2 placeholder:text-gray-500 text-gray-300 focus:border-cyan-500 focus:outline-none border border-gray-500 rounded-md bg-transparent "
                placeholder="Enter your name"
                type="text"
              />
            </label>

            <div className="py-5 flex cursor-pointer items-center flex-col justify-center gap-2 rounded-md bg-transparent border border-gray-500 border-dashed ">
              <div className="p-2 w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full border border-gray-500">
                <IoCloudUploadOutline className="text-3xl text-green-600 " />
              </div>
              <p>
                <span className="text-green-600">click to upload</span>
                <span className="text-gray-500 ml-2">or drag and drop</span>
              </p>
              <p className="text-gray-700">
                SVG,PNG,JPG or GIF(max, 800x400px)
              </p>
            </div>
          </div>
        </div>

        {/* consent and privacy section */}
        <div className="mt-10 lg:w-[50%] w-full">
          <div>
            <h1 className="text-3xl font-bold text-white">
              consent and Privacy
            </h1>
          </div>

          <div className="form-control mt-7 flex flex-col gap-3 ">
            <label className="cursor-pointer flex items-center gap-3 ">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-accent"
              />
              <span className="label-text text-gray-400 ">
                I consent to receive treatment for my health condition.
              </span>
            </label>
            <label className="cursor-pointer flex items-center gap-3 ">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-accent"
              />
              <span className="label-text text-gray-400 ">
                I consent to the use and disclosure of my health information for
                treatment purposes.
              </span>
            </label>
            <label className="cursor-pointer flex items-center gap-3 ">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-accent"
              />
              <span className="label-text text-gray-400 ">
                I acknowledge that I have reviewed and agree to the privacy
                policy
              </span>
            </label>
          </div>
        </div>

        <button className="btn btn-accent mt-10 lg:w-[50%] w-full">
          Submit and continue
        </button>
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
