import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "CareLife",
  description:
    "CareLife is a website to help doctors and patients for making appointments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
