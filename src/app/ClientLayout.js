"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviderContext from "@/AuthProviderContext/AuthProviderContext";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const queryClient = new QueryClient();
  const path = usePathname();

  return (
    <AuthProviderContext>
      <QueryClientProvider client={queryClient}>
        <div>
          <div className={path === "/signup" ? "hidden" : "block"}>
            <Navbar />
          </div>
          <main>{children}</main>
        </div>
      </QueryClientProvider>
    </AuthProviderContext>
  );
}
