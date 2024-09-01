"use client";

import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    document.getElementById("my_modal_3").showModal();
  }, []);
  return (
    <dialog id="my_modal_3" className="modal">
      <div className=" w-24 flex items-center justify-center modal-box bg-accent text-white ">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
      </div>
    </dialog>
  );
}
