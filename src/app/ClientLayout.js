"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {

  const path = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);


  useEffect(() => {
    const handleShow = async() => {
      if(window.scrollY > 2 && path === "/"){
        await setShowNavbar(true);
      }else{
        await setShowNavbar(false);
      }
    }

    window.addEventListener("scroll", handleShow);

    return () => window.removeEventListener("scroll", handleShow);

  },[])

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen ">
          {/* navbar section */}
          <div className={`fixed top-0 w-full bg-gray-50 text-white py-4 px-8 transition-transform transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <Navbar></Navbar>
          </div>

          {/* main section */}
          <div className="h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
