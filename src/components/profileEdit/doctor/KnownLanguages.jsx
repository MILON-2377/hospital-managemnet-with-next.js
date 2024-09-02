"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function KnownLanguages() {
  const [languages, setLanguages] = useState(["English", "Bangla", "Hindi"]);
  const { register, handleSubmit, reset } = useForm();

  //   handle form actions
  const onSubmit = (data) => {
    const { name } = data;

    setLanguages([...languages, name]);
    reset();
  };

  //   handle delete languages
  const deleteLanguage = (name) => {
    const newLanguages = languages.filter((item) => item !== name);
    setLanguages([...newLanguages]);
  };

  return (
    <div className=" mt-5 w-full ">
      <span className=" text-[16px] font-[500] text-black ">
        Known languages
      </span>
      <div className=" mt-2 border rounded-md px-3 sm:px-5 py-3 flex sm:flex-row flex-col items-center gap-5 ">
        {/* displaying languages */}
        <div
          className={` ${
            languages.length < 6
              ? " grid grid-cols-3 sm:flex sm:flex-row items-center"
              : "grid grid-cols-7"
          } gap-5 max-w-full h-auto `}
        >
          {languages.map((item, idx) => (
            <p
              key={idx}
              className=" rounded-3xl px-2 py-1 bg-gray-100 text-sm flex items-center gap-2 text-gray-500 "
            >
              <span>{item}</span>
              <span
                onClick={() => deleteLanguage(item)}
                className=" hover:cursor-pointer text-[16px] "
              >
                x
              </span>
            </p>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Type new"
            {...register("name", { required: true })}
            className=" focus:outline-none focus:border-none placeholder:text-[16px] "
          />
        </form>
      </div>
    </div>
  );
}
