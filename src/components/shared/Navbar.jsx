"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import DoctorNavbar from "./DoctorNavbar";
import PatientNavbar from "./PatientNavbar";

const NavbarComponents = {
  Doctor: DoctorNavbar,
  Patient: PatientNavbar,
};

export default function Navbar() {
  const { user } = useAuth();

  const NavbarComponent = NavbarComponents[user?.profession] || null;

  return NavbarComponent ? <NavbarComponent /> : null;
}
