"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviderContext from "@/AuthProviderContext/AuthProviderContext";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store/store";

export default function ClientLayout({ children }) {
  const queryClient = new QueryClient();
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    if (path === "/signup" || path === "/login" || path === "/" || path === "/patient-form-page") {
      setIsPath(true);
    } else {
      setIsPath(false);
    }
  }, [path]);

  return (
    <Provider store={store}>
      <AuthProviderContext>
        <QueryClientProvider client={queryClient}>
          <div className=" flex justify-between ">
            <div className={isPath || path === "/" ? " hidden " : " block bg-white "}>
              <Navbar />
            </div>
            <main className=" w-full h-full ">{children}</main>
          </div>
        </QueryClientProvider>
      </AuthProviderContext>
    </Provider>
  );
}
