import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-950 p-8 flex flex-col justify-between items-center">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="flex flex-col">
          <Link href={"/"} className="text-white font-bold text-3xl">
            Logo
          </Link>
          <p className="mt-1 text-white max-w-[70%]">
            Your trusted destination for quality and style.
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-white font-bold text-3xl">About Us</p>

          <div className="flex flex-col text-white gap-4 text-xl font-normal mt-6">
            <p>About Us</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-white font-bold text-3xl">Follow Us</p>

          <div className="flex gap-6 mt-6">
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="flex bg-[var(--primary)] h-12 w-12 rounded-full items-center justify-center"
            >
              <Facebook fill="#fff" className="h-6 w-6 text-transparent" />
            </Link>

            <Link
              href={"https://twitter.com"}
              target="_blank"
              className="flex bg-[var(--primary)] h-12 w-12 rounded-full items-center justify-center"
            >
              <Twitter fill="#fff" className="h-6 w-6 text-transparent" />
            </Link>

            <Link
              href={"https://instagram.com"}
              target="_blank"
              className="flex bg-[var(--primary)] h-12 w-12 rounded-full items-center justify-center"
            >
              <Instagram fill="transparent" className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex container mt-8">
        <div className="text-center text-white md:text-left">
          <span className="font-semibold">Logo</span> &copy; 2025 — All rights
          reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
