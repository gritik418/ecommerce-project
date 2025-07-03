"use client";
import { selectCartItemsCount } from "@/store/slices/cartSlice";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const cartCount = useSelector(selectCartItemsCount);

  return (
    <>
      <nav className="hidden sm:flex border py-5 w-full bg-[var(--primary)]">
        <div className="flex items-center gap-2 container mx-auto justify-between">
          <Link href={"/"} className="text-4xl font-bold text-white">
            Logo
          </Link>

          <SearchBar />

          <div className="flex items-center h-12 gap-6">
            <Link
              href={"/cart"}
              className="flex cursor-pointer relative h-full gap-2 bg-blue-950/80 text-white px-7 rounded-xl font-bold text-base items-center"
            >
              <ShoppingCart className="h-5" />
              Cart
              {cartCount > 0 && (
                <p className="flex text-xs items-center justify-center text-blue-950 absolute bg-white h-5 w-5 -top-0.5 rounded-full -right-0.5">
                  {cartCount > 9 ? "9+" : cartCount}
                </p>
              )}
            </Link>

            <div className="flex h-11 w-11 rounded-full overflow-hidden cursor-pointer">
              <Image
                src={"/assets/images/default-profile.jpg"}
                alt="avatar"
                height={40}
                width={40}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </nav>

      <nav className="flex sm:hidden gap-1 px-3 py-5 w-full bg-[var(--primary)]">
        <div className="flex gap-3 flex-col items-center container mx-auto justify-between">
          <div className="flex w-full justify-between">
            <Link href={"/"} className="text-4xl font-bold text-white">
              Logo
            </Link>

            <div className="flex items-center h-12 gap-6">
              <Link
                href={"/cart"}
                className="flex cursor-pointer relative h-full gap-2 bg-blue-950/80 text-white px-7 rounded-xl font-bold text-base items-center"
              >
                <ShoppingCart className="h-5" />
                Cart
                {cartCount > 0 && (
                  <p className="flex text-xs items-center justify-center text-blue-950 absolute bg-white h-5 w-5 -top-0.5 rounded-full -right-0.5">
                    {cartCount > 9 ? "9+" : cartCount}
                  </p>
                )}
              </Link>

              <div className="flex h-11 w-11 rounded-full overflow-hidden cursor-pointer">
                <Image
                  src={"/assets/images/default-profile.jpg"}
                  alt="avatar"
                  height={40}
                  width={40}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          <SearchBar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
