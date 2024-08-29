"use client";

import { useEffect } from "react";

export default function Loading({ h, t, loading }) {
  useEffect(() => {
    if (loading) {
      document.getElementById("my_modal_5").showModal();
    } else document.getElementById("my_modal_5").close();
  }, [loading]);
  return (
    <dialog id="my_modal_5">
      <div className="modal-box bg-accent text-white flex flex-col gap-3 ">
        <h3 className="font-bold text-lg">{h}</h3>
        <div className=" flex items-center justify-center ">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    </dialog>
  );
}
