"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviderContext from "@/AuthProviderContext/AuthProviderContext";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {
  const queryClient = new QueryClient();
  const path = usePathname();

  // Use useMemo to determine if the Navbar should be displayed
  const shouldShowNavbar = useMemo(() => {
    const hiddenPaths = ["/signup", "/login", "/", "/patient-form-page"];
    return !hiddenPaths.includes(path);
  }, [path]);

  return (
    <Provider store={store}>
      <AuthProviderContext>
        <QueryClientProvider client={queryClient}>
          <html lang="en">
            <body className={`${inter.className} flex justify-between `}>
              <div className=" flex-1 h-auto ">{shouldShowNavbar && <Navbar />}</div>

              <div className="  w-[75%] h-auto ">{children}</div>
            </body>
          </html>
        </QueryClientProvider>
      </AuthProviderContext>
    </Provider>
  );
}
