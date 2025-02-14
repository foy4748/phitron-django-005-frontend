"use client";
import Link from "next/link";
import { Sprout, Linkedin, Github, Facebook } from "lucide-react";
import Col from "./GridSystem/Col";
import GridSystem from "./GridSystem/GridSystem";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const bankIcons = [
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/bkash.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/nagad.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/dbblmobilebank.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/abbank.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/tap.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/upay.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/okwallet.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/cellfin.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/ibblmobile.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/abbank.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/ibbl.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/citytouch.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/mtbl.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/bankasia.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/tapnpay.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/eblsky.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/instapay.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/pmoney.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/woori.png",
    "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/modhumoti.png",
    // "https://sandbox.sslcommerz.com/gwprocess/v4/image/gw2/FsiblCloudLogo.png",
  ];
  if (!pathname.startsWith("/dashboard"))
    return (
      <>
        <GridSystem className="max-w-[1400px] mx-auto bg-green-900 px-20 py-10 text-white md:gap-x-10 mt-24">
          <Col className="flex justify-center">
            <section>
              <figure className="flex justify-start mb-3">
                <Link
                  href="/"
                  className="flex gap-x-3 items-center text-primary"
                >
                  <Sprout className={"text-primary"} size={60} />{" "}
                  <h4 className="text-2xl">Super Grocery</h4>
                </Link>
              </figure>
              <article className="space-y-4">
                <div className="footer-section">
                  <h3 className="font-bold">Freshness Delivered Daily</h3>
                  <p className="text-justify">
                    Discover the freshest produce, dairy, and more at unbeatable
                    prices. Shop now and taste the difference!
                  </p>
                </div>
                <div className="footer-section">
                  <h3 className="font-bold">Your One-Stop Grocery Shop</h3>
                  <p className="text-justify">
                    From farm-fresh fruits and vegetables to pantry staples,
                    we&apos;ve got everything you need. Start your shopping
                    journey with us today!
                  </p>
                </div>
              </article>
            </section>
          </Col>
          <Col className="space-y-6 pt-5">
            <h5 className="font-bold text-xl">Payment Options</h5>
            <GridSystem>
              {bankIcons.map((imgSrc, idx) => {
                return (
                  <Col
                    className="col-span-3 md:col-span-3 lg:col-span-3"
                    key={idx}
                  >
                    <figure className="w-full h-full object-scale-down flex justify-center items-center bg-slate-50 bg-opacity-50 rounded-md">
                      <Image
                        src={imgSrc}
                        alt={`Bank Icon ${idx}`}
                        width={50}
                        height={50}
                      />
                    </figure>
                  </Col>
                );
              })}
            </GridSystem>
          </Col>
          <Col className=" pt-5">
            <article className="space-y-6">
              <h5 className="font-bold text-xl">Navigate</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <hr className="me-12" />

                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </ul>
            </article>
          </Col>
          <Col className=" pt-5">
            <article className="space-y-6">
              <h5 className="font-bold text-xl">Socials</h5>
              <ul className="space-y-3">
                <li>
                  <a
                    className="flex items-center"
                    href="https://www.linkedin.com/in/foy4748/"
                    target="_blank"
                  >
                    <Linkedin className="me-4 box-content border rounded-md p-[5px]" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center"
                    href="https://www.github.com/foy4748"
                    target="_blank"
                  >
                    <Github className="me-4 box-content border rounded-md p-[5px]" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center"
                    href="https://www.facebook.com/faisal.rahman.4748/"
                    target="_blank"
                  >
                    <Facebook className="me-4 box-content border rounded-md p-[5px]" />
                    Facebook
                  </a>
                </li>
              </ul>
            </article>
          </Col>
        </GridSystem>
        <section className="md:col-span-12 lg:col-span-12 bg-green-950 text-white text-center py-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} Super Grocery. All
            rights preserved
          </p>
        </section>
      </>
    );
  else return <></>;
}
