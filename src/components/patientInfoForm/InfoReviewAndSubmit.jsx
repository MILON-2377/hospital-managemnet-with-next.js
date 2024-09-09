"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import axiosSecure from "@/Hooks/userAxiosSecure";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function InfoReviewAndSubmit() {
  const patientInfo = useSelector(
    (state) => state.patientInfoReducer.patientIfo
  );
  const { user } = useAuth();
  const path = usePathname();
  const {push}  = useRouter();

  //   patient info submit handle
  const submitPatientInfo = async () => {
    const patientId = user?.email;
    document.getElementById("my_modal_5").showModal();
    try {
      const res = await axiosSecure.post("/patient", {
        ...patientInfo,
        patientId,
      });
      if (res.data.message === "success") {
        push("/Dashboard/patient-dashboard");
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  // loading modal close handle
  useEffect(() => {
    document.getElementById("my_modal_5").close();
  }, [path]);

  return (
    <div className=" w-full border rounded-md p-5 mt-10 ">
      <div className=" w-full ">
        {/* displaying personal info and edit */}
        <div className=" w-full ">
          <p className=" text-[18px] font-bold text-blue-500 text-center ">
            Personal Information
          </p>
          <div className=" mt-5 flex items-center justify-between gap-5 ">
            <div className=" flex flex-col gap-2 ">
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">Name : </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.personalInfo?.fullName}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">Email : </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.personalInfo?.email}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">Address : </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.personalInfo?.address}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">Phone number : </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.personalInfo?.phoneNumber}
                </p>
              </label>
            </div>

            <div className=" flex flex-col gap-2 ">
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">Occupation : </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.personalInfo?.occupation}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">Gender : </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.personalInfo?.gender}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Emergency name :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.personalInfo?.emergency_contact_name}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Emergency phone number :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.personalInfo?.emergency_contact_name}
                </p>
              </label>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className=" w-full mt-5 ">
          <p className=" text-[18px] font-bold text-blue-500 text-center">
            Medical Information
          </p>
          <div className=" mt-3 flex items-center justify-between gap-5 ">
            <div className=" flex flex-col gap-2 ">
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">Allergies : </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.medicalInfo?.allergies}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Current medications :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.medicalInfo?.current_medications}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Family medical history :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.medicalInfo?.family_medical_history}
                </p>
              </label>
            </div>

            <div className=" flex flex-col gap-2 ">
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Insurance provider :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.medicalInfo?.insuranceProvider}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Insurance policy number :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.medicalInfo?.insurance_policy_number}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Past medical history :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.medicalInfo?.past_medical_history}
                </p>
              </label>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className=" w-full mt-5 ">
          <p className=" text-[18px] font-bold text-blue-500 text-center">
            Identification Information
          </p>
          <div className=" mt-3 flex items-center justify-between gap-5 ">
            <div className=" flex flex-col gap-2 ">
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Identification type :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.identificationInfo?.identification_type}
                </p>
              </label>
              <label className=" flex items-center gap-2 ">
                <span className=" text-[18px] font-bold ">
                  Identification number :{" "}
                </span>
                <p className=" text-[18px] font-[500] ">
                  {patientInfo?.identificationInfo?.identification_number}
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={submitPatientInfo}
        className=" flex items-center justify-end "
      >
        <button className=" btn mt-10 btn-accent text-white w-[180px] ">
          Submit
        </button>
      </div>

      {/* submit modal loading */}
      <div>
        <dialog id="my_modal_5" className="modal">
          <div className=" p-5 bg-accent flex flex-col items-center justify-center text-white gap-3  ">
            <h3 className=" text-white  ">
              Please wait, your information is being submitted...
            </h3>
            <p className=" w-full text-center text-white ">
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>{" "}
            </p>
          </div>
        </dialog>
      </div>
    </div>
  );
}
