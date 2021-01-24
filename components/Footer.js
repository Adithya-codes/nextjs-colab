import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const footerLinks = ["home", "services", "edi", "team", "faq", "blog"];
  return (
    <div>
      <footer className="bg-footer fixed bottom-0 inset-x-0 lg:py-0.5 sm: px-2.5 py-2.5 z-50 ">
        <div className=" md:flex justify-between font-Roboto px-10 py-0.5 font text-sm sm: text-center ">
          <div className="mb-1">
            <p className="text-white font-smallText">© 2019 IDC, Inc. All rights reserved</p>
          </div>

          <div className="lg:m-0">
            <ul className="flex sm:text-center justify-center">
              {footerLinks.map((link) => (
                <li className="text-sm uppercase text-white font-thin md:border-none sm:border-solid border-r-2 border-white">
                  <Link href="#" className="">
                    <a className="px-2 font-smallText  font-normal ">{link}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
