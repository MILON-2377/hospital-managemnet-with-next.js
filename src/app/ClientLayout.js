"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviderContext from "@/AuthProviderContext/AuthProviderContext";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store/store";

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
          <div className="flex justify-between">
            {shouldShowNavbar && (
              <div className="block bg-white">
                <Navbar />
              </div>
            )}
            <main className="w-full overflow-x-scroll h-full">{children}</main>
          </div>
        </QueryClientProvider>
      </AuthProviderContext>
    </Provider>
  );
}