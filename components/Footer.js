import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const links = [

    {
      name:'Home',
      route:'/'
    },
    {
      name:'Services',
      route:'/services'
    },
    {
      name:'edi',
      route:'/edi'
    },
    {
      name:'team',
      route:'/team'
    },
    {
      name:'faq',
      route:'/faq'
    },
    {
      name:'blog',
      route:'/blog'
    },
  ]
  return (
    <div>
      <footer className="bg-footer relative bottom-0 inset-x-0 lg:py-0.5 sm: px-2.5 py-2.5 z-50 ">
        <div className=" sm:flex justify-between font-Roboto px-10 py-0.5 font text-sm xxs:text-center sm:text-left ">
          <div className="mb-4 sm:mb-0">
            <p className="text-white font-smallText xxs:text-xs sm:text-0.87">© 2019 IDC, Inc. All rights reserved</p>
          </div>

          <div className="lg:m-0 ">
            <ul className="flex xxs:text-center xxs:justify-center">
              {links.map((link) => (
                <li className="text-sm px-1 uppercase text-white font-thin md:border-none xxs:border-solid border-r-2 border-white sm:border-none">
                  <Link href={link.route}className="">
                    <a className="px-2 font-smallText  font-normal ">{link.name}</a>
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
