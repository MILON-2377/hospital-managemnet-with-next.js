"use client";

export default function HomeNav() {
  return (
    <div className="navbar bg-base-100 lg:w-[987] w-[95%] border-b mx-auto lg:mt-5 py-5 ">
      <div className="flex-1 ">
        <a className="  text-4xl font-bold  ">CareLife</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div className="w-10 rounded-full hover:cursor-pointer ">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
