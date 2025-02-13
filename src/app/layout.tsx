import type { Metadata } from "next";
import { Prociono } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

import "./globals.css";

const prociono = Prociono({
  variable: "--font-prociono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veyor Wellness",
  description: "Experience our massage as smooth as a conveyor belt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prociono.variable} antialiased`}>
        {children}

        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
