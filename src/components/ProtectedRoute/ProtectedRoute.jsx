"use client";

import { useAuth } from "@/AuthProviderContext/AuthProviderContext";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const { push } = useRouter();

  if (!user) return push("/login");

  return children;
}
