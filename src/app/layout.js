import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "CareLife",
  description:
    "CareLife is a website to help doctors and patients for making appointments",
};

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
