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
import Footer from "@/components/customUI/Footer";
import Notification from "@/components/customUI/Notification";
import { Suspense } from "react";
import CartProvider from "@/lib/Providers/CartProvider";
import NextTopLoader from "nextjs-toploader";

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
  title: {
    template: "%s | Super Grocery Shop",
    default: "Super Grocery Shop",
  },
  description:
    "This is a super grocery shop that provides all the day-to-day needs",
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
          <CartProvider>
            <NextTopLoader showSpinner={false} color="#1daa5c" />
            <NavBar />
            <Banner />
            <main className="px-2 md:px-8 mx-auto max-w-[1400px]">
              {" "}
              {children}
            </main>
            <Footer />
            <Toaster />
            <Suspense fallback={<p>Loading...</p>}>
              <Notification />
            </Suspense>
          </CartProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
//className={`${geistSans.variable} ${geistMono.variable} antialiased`}
