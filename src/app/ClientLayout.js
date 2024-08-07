"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviderContext from "@/AuthProviderContext/AuthProviderContext";

export default function ClientLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <AuthProviderContext>
      <QueryClientProvider client={queryClient}>
        <div>
          <main>{children}</main>
        </div>
      </QueryClientProvider>
    </AuthProviderContext>
  );
}
