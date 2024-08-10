"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviderContext from "@/AuthProviderContext/AuthProviderContext";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  const queryClient = new QueryClient();
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    if (path === "/signup" || path === "/login") {
      setIsPath(true);
    }
  }, [path]);

  return (
    <AuthProviderContext>
      <QueryClientProvider client={queryClient}>
        <div>
          <div className={isPath ? "hidden" : "block"}>
            <Navbar />
          </div>
          <main>{children}</main>
        </div>
      </QueryClientProvider>
    </AuthProviderContext>
  );
}
