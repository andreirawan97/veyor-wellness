import type { Metadata } from "next";
import { Geist, Geist_Mono, Prociono } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

import "./globals.css";

const prociono = Prociono({
  variable: "--font-prociono",
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body
        className={`${prociono.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
