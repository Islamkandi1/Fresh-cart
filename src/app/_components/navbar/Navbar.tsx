"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/freshcart-logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { GoX } from "react-icons/go";
const Navbar = () => {
  const pathName = usePathname();
  const [nav, setName] = useState("h-0");

  // handle navbar======================================================
  function handleNav() {
    if (nav == "h-0") {
      setName("h-[250px]");
    } else {
      setName("h-0");
    }
  }

  // ?jsx code ==========================================================
  return (
    <>
      <nav className="bg-[#F0F3F2] fixed top-0 left-0 right-0 z-20">
        <section className=" w-full md-[85%] px-3 md:px-7 lg:px-10 flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
          {/* logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} alt="fresh  cart logo" className="w-[140px] sm:w-[150px]" />
          </Link>
          {/* right side */}
          <section className="flex md:order-2">
            <section className="relative flex items-center gap-3">
              {/* <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="w-[40px] h-[40px]  cursor-pointer mr-2 md:mr-0">
                    <section className="w-full text-[2.4rem] text-[#a0a0a0]"><LuCircleUser className="w-full" /></section>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link
                    href="/login"
                    className="block p-1 px-2 text-[1rem]  text-[#404247] font-[500] hover:bg-main hover:text-white transition-all duration-300 capitalize rounded-sm "
                  >
                    my account
                  </Link>

                  <DropdownMenuSeparator />
                  <Link
                    href="/wishList"
                    className="block p-1 px-2 text-[1rem]  text-[#404247] font-[400] hover:bg-main hover:text-white transition-all duration-300 capitalize rounded-sm "
                  >
                    wish list
                  </Link>
                  <button
                    type="button"
                    className="block p-1 px-2 text-[1rem] w-full text-left cursor-pointer text-[#404247] font-[400] hover:bg-red-500 hover:text-white transition-all duration-300 capitalize rounded-sm "
                  >
                    log out
                  </button>
                </DropdownMenuContent>
              </DropdownMenu> */}
              <Link
                href="/login"
                className="block text-[.8rem] p-2 sm:text-[1rem]   font-[400] bg-main hover:bg-green-500 transition-all duration-300 text-white  capitalize rounded-sm "
              >
                login
              </Link>
              <Link
                href="/register"
                className="block p-2  text-[.8rem] sm:text-[1rem]  font-[400] bg-main hover:bg-green-500 transition-all duration-300 text-white  capitalize rounded-sm "
              >
                register
              </Link>
            </section>
            <button
              data-collapse-toggle="navbar-search"
              onClick={handleNav}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-[3rem] cursor-pointer text-gray-500 rounded-lg md:hidden "
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              {nav == "h-0" ? <HiMiniBars3 /> : <GoX />}
            </button>
          </section>
          {/* nav */}
          <section
            className={`items-center   ${nav}  overflow-hidden transition-all duration-300 md:overflow-visible  justify-between  w-full md:flex md:w-auto md:order-1 bg-[#F0F3F2]`}
            id="navbar-search"
          >
            <ul className="flex flex-col p-2 md:p-0 mt-4 font-medium   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0   ">
              <li className="!mx-4">
                <Link
                  href="/"
                  className={` ${
                    pathName == "/" && "active"
                  }  block text-[1.1rem] py-2 md:py-0 text-[#404247] font-[400] hover:text-main transition-all duration-300 capitalize rounded-sm `}
                >
                  home
                </Link>
              </li>
              <li className="!mx-4">
                <Link
                  href="/products"
                  className={` ${
                    pathName == "/products" && "active"
                  }  block text-[1.1rem] py-2 md:py-0 text-[#404247] font-[400] hover:text-main transition-all duration-300 capitalize rounded-sm `}
                >
                  products
                </Link>
              </li>
              <li className="!mx-4">
                <Link
                  href="/brands"
                  className={` ${
                    pathName == "/brands" && "active"
                  }  block text-[1.1rem] py-2 md:py-0 text-[#404247] font-[400] hover:text-main transition-all duration-300 capitalize rounded-sm `}
                >
                  brands
                </Link>
              </li>
              <li className="!mx-4">
                <Link
                  href="/category"
                  className={` ${
                    pathName == "/category" && "active"
                  }  block text-[1.1rem] py-2 md:py-0 text-[#404247] font-[400] hover:text-main transition-all duration-300 capitalize rounded-sm `}
                >
                  category
                </Link>
              </li>
              <li className="!mx-4">
                <Link
                  href="/orders"
                  className={` ${
                    pathName == "/orders" && "active"
                  }  block text-[1.1rem] py-2 md:py-0 text-[#404247] font-[400] hover:text-main transition-all duration-300 capitalize rounded-sm `}
                >
                  orders
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
