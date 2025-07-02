import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="hidden sm:flex border py-5 w-full bg-[#0056A6]">
        <div className="flex items-center gap-2 container mx-auto justify-between">
          <h1 className="text-4xl font-bold text-white">Logo</h1>

          <div className="flex border h-12 px-4 w-[350px] border-white/50 rounded-lg items-center gap-4">
            <Search className="text-white" />
            <input
              type="text"
              className="placeholder:text-white grow text-white font-medium outline-none placeholder:font-medium"
              placeholder="Search for products... "
            />
          </div>

          <div className="flex items-center h-12 gap-6">
            <button className="flex cursor-pointer relative h-full gap-2 bg-blue-950/80 text-white px-7 rounded-xl font-bold text-base items-center">
              <ShoppingCart className="h-5" />
              Cart
              <p className="flex text-xs items-center justify-center text-blue-950 absolute bg-white h-4 w-4 -top-0.5 rounded-full -right-0.5">
                3
              </p>
            </button>

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

      <nav className="flex sm:hidden gap-1 px-3 py-5 w-full bg-[#0056A6]">
        <div className="flex gap-3 flex-col items-center container mx-auto justify-between">
          <div className="flex w-full justify-between">
            <h1 className="text-4xl font-bold text-white">Logo</h1>

            <div className="flex items-center h-12 gap-6">
              <button className="flex cursor-pointer relative h-full gap-2 bg-blue-950/80 text-white px-7 rounded-xl font-bold text-base items-center">
                <ShoppingCart className="h-5" />
                Cart
                <p className="flex text-xs items-center justify-center text-blue-950 absolute bg-white h-4 w-4 -top-0.5 rounded-full -right-0.5">
                  3
                </p>
              </button>

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

          <div className="flex border h-12 px-4 w-full border-white/50 rounded-lg items-center gap-4">
            <Search className="text-white" />
            <input
              type="text"
              className="placeholder:text-white grow text-white font-medium outline-none placeholder:font-medium"
              placeholder="Search for products... "
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
