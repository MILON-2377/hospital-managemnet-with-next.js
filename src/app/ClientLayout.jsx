"use client";

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviderContext from "@/AuthProviderContext/AuthProviderContext";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviderContext>
          <div className="h-screen">
            {/* navbar section */}
            <div className="w-full ">
              <Navbar></Navbar>
            </div>

            {/* main section */}
            <main>{children}</main>
          </div>
        </AuthProviderContext>
      </body>
    </html>
  );
}
