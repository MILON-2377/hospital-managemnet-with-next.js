import React from 'react'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/PagesComponents/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className='h-screen'>
        <Navbar></Navbar>
        <main>{children}</main>
      </div>
    </body>
  </html>
  )
}
