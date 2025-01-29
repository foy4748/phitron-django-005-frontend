import type { Metadata } from "next";
import localFont from "next/font/local";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Main CSS
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { Toaster } from "@/components/ui/toaster";
import NextAuthSessionProvider from "@/lib/Providers/NextAuthSessionProvider";
import NavBar from "@/components/customUI/NavBar";
import Banner from "./home/components/Banner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 600 700 900",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 200 600 700 900",
// });

export const metadata: Metadata = {
  title: "Super Grocery Shop",
  description:
    "This is a super grocery shop that provides all the necesarry day-to-day necessities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <NextAuthSessionProvider>
          <NavBar />
          <Banner />
          <main className="px-2 md:px-4 mx-auto"> {children}</main>
          <Toaster />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
//className={`${geistSans.variable} ${geistMono.variable} antialiased`}
