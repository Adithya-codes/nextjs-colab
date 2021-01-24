import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";

const Header = () => {
  const names = ["services", "edi", "team", "faq", "blog"];
  const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "256px";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0px";
  };


    
  
  return (
    <div className=' w-full h-20 fixed py-4 z-50 bg-white'>
      <div className="container px-4 md:ml-offset mt-4  ">
        <header className="flex  ">
          <div className="mr-12  ">
            <Link href="#" className="">
              <a className="px-2  z-50 uppercase fixed font-display font-bold ml-0 top-2 md:ml-offset md:-left-4 lg:left-16  xl:top-4 ">
                <Image
                  src="/images/svg/IDC-Nav-Logo.svg"
                  className=""
                  layout="fixed"
                  width={65}
                  height={60}
                />
              </a>
            </Link>
          </div>

          <div>
            <ul className="xxs:hidden lg:flex lg:px-40">
              {names.map((index) => (
                <li>
                  <Link href="#" className="">
                    <a className="px-4 uppercase font-body font-bold font-display">
                      {index}
                    </a>
                  </Link>
                </li>
              ))}
              <Link href="#" className="">
                <a className="px-4 py-1 text-1xl uppercase font-body font-bold">
                  <FaEnvelope />
                </a>
              </Link>
            </ul>
          </div>
        </header>

        <div className="bg-sidebar fixed top-4 right-4 px-4 cursor-pointer py-2 border-none z-50 text-2xl text-white lg:hidden">
          <button className="text-2xl" onClick={openSidebar}>
            {" "}
            ={" "}
          </button>
        </div>

        <div
          className="h-full duration-500 w-0 bg-sidebar fixed top-0 right-0 py-20 overflow-x-hidden z-50  lg:hidden"
          id="mySidebar"
        >
          <a
            className="absolute top-4 right-6 text-4xl font-bold text-sidebar-text cursor-pointer duration-300"
            onClick={closeSidebar}
          >
            {" "}
            X{" "}
          </a>
          {names.map((index) => (
            <Link href="#">
              <a className="block uppercase pr-2 pl-8 py-2 text-2xl  font-display text-sidebar-text">
                {index}{" "}
              </a>
            </Link>
          ))}
        </div>

        <div
          className="h-full duration-500 w-0 bg-sidebar fixed top-0 right-0 py-20 overflow-x-hidden z-10  lg:hidden"
          id="mySidebar"
        >
          <a
            className="absolute top-4 right-6 text-4xl font-bold text-sidebar-text font-display cursor-pointer duration-300"
            onClick={closeSidebar}
          >
            {" "}
            X{" "}
          </a>
          {names.map((index) => (
            <Link href="#">
              <a className="block uppercase font-Proxima-nova pr-2 pl-8 py-2 text-2xl text-sidebar-text">
                {index}{" "}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Header
