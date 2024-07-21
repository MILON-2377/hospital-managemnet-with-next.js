"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {
  const path = usePathname();
  const [showNavbar, setShowNavbar] = useState(path !== "/");
  const isDashboardPath = /^\/dashboard(\/.*)?$/.test(path);

  useEffect(() => {
    const handleScroll = () => {
      if (path === "/") {
        setShowNavbar(window.scrollY > 2);
      }
    };

    if (path === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowNavbar(true); // Always show navbar for paths other than "/"
    }
  }, [path]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={isDashboardPath ? "flex justify-between gap-5" : ""}>
          {/* Navbar section */}
          {isDashboardPath ? (
            <div className="lg:w-[400px] w-[350px] h-full">
              <DashboardNavbar />
            </div>
          ) : (
            <div
              className={`fixed top-0 left-0 w-full h-[100px] bg-gray-50 z-50 py-4 px-8 transition-transform transform ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <Navbar />
            </div>
          )}

          {/* Main section */}
          <div className={isDashboardPath ? "flex-1 h-screen" : "mt-24 h-screen"}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
