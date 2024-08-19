"use client";

import { patientIdentificationInfoAdd } from "@/redux/reducers/AddPatientInfo/AddPatientInfo";
import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function IdentificationAndPrivacy() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  // handle form submit
  const onSubmit = (data) => {
    dispatch(patientIdentificationInfoAdd(data));
  };
  return (
    <div className=" w-full rounded-md border  p-5 mt-10  mb-10 ">
      <form onSubmit={handleSubmit(onSubmit)}
      className=" "
      >
        <div className=" w-full ">
         

          <div className="flex flex-col gap-5 ">
            <label className="flex flex-col gap-2">
              <span className="text-[18px] font-[500] text-gray-600 ">
                Identification type
              </span>
              <select
                {...register("identification_type", { required: true })}
                className="select border text-gray-600 text-[18px] font-[500] border-gray-200 bg-transparent  focus:outline-none w-full "
              >
                <option>Birth Certification</option>
                <option>Password</option>
                <option>National Id Card</option>
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[18px] font-[500] text-gray-600 ">
                Identification Number
              </span>
              <input
                className="px-4 py-2 text-[18px] font-[500] placeholder:text-gray-500 text-gray-600 focus:border-cyan-500 focus:outline-none border border-gray-200 rounded-md bg-transparent "
                placeholder="ex: 202564-2545023578"
                type="text"
                {...register("identification_number", { required: true })}
              />
            </label>

            <div className="py-5 flex cursor-pointer items-center flex-col justify-center gap-2 rounded-md bg-transparent border border-gray-200 border-dashed ">
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
        <div className="mt-10  w-full">
          <div>
            <h1 className="text-2xl font-bold text-gray-600">
              consent and Privacy
            </h1>
          </div>

          <div className="form-control mt-7 flex flex-col gap-3">
            <label className="cursor-pointer flex items-center gap-3">
              <input
                type="checkbox"
                {...register("consent_treatment", { required: true })}
                className="checkbox checkbox-accent"
                defaultChecked
              />
              <span className="label-text text-[18px] font-[500] text-gray-400">
                I consent to receive treatment for my health condition.
              </span>
            </label>
            {errors.consent_treatment && (
              <p className="text-red-500">This field is required.</p>
            )}

            <label className="cursor-pointer flex items-center gap-3">
              <input
                type="checkbox"
                {...register("consent_disclosure", { required: true })}
                className="checkbox checkbox-accent"
                defaultChecked
              />
              <span className="label-text text-[18px] font-[500] text-gray-400">
                I consent to the use and disclosure of my health information for
                treatment purposes.
              </span>
            </label>
            {errors.consent_disclosure && (
              <p className="text-red-500">This field is required.</p>
            )}

            <label className="cursor-pointer flex items-center gap-3">
              <input
                type="checkbox"
                {...register("consent_privacy", { required: true })}
                className="checkbox checkbox-accent"
                defaultChecked
              />
              <span className="label-text text-xl text-gray-400">
                I acknowledge that I have reviewed and agree to the privacy
                policy.
              </span>
            </label>
            {errors.consent_privacy && (
              <p className="text-red-500">This field is required.</p>
            )}
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
