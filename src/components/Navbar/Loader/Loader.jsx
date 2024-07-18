import React from "react";

export default function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
}
