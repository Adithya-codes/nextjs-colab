import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [hoverColor, setHoverColor] = useState(false);

  const links = [
    {
      name: "Services",
      route: "/services",
    },
    {
      name: "edi",
      route: "/edi",
    },
    {
      name: "team",
      route: "/team",
    },
    {
      name: "faq",
      route: "/faq",
    },
    {
      name: "blog",
      route: "/blog",
    },
  ];
  const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "256px";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0px";
    setHoverColor(true);
  };

  const handleLinkClick = () => {
    setHoverColor(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNav(true);
    
      } else {
        setNav(false);
   
      }
    });
  }, [nav]);

  const handleClick = () =>
  {
    window.focus();
    setTimeout(function () {
      window.scrollTo({top:'4500',behavior:'smooth'})
  },2)
}


  return (
    <div
      className=" w-full h-20 fixed py-4 z-50 "
      id={nav ? "nav-bg-color" : "nav-bg-none"}
    >
      <div className="container px-4 mt-4 lg:mt-2 xl:mt-4">
        <header className="flex  md:ml-offset  ">
          <div className="mr-12  ">
            <Link href="/" className="outline-none">
              <a className="px-2  z-50 uppercase fixed font-display ml-0 top-2  xl:top-4 ">
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
            <ul className="xxs:hidden lg:flex lg:px-20 lg:pb-10">
              {links.map((link) => (
                <li>
                  <Link href={link.route} className="outline-none">
                    <a className="px-4 uppercase font-button outline-none">{link.name}</a>
                  </Link>
                </li>
              ))}

              <Link href="" >
                <a className="px-4 py-1 text-1.3 uppercase font-button"onClick={handleClick}>
                  <BiEnvelope />
                </a>
              </Link>
            
            </ul>
          </div>
        </header>

        <div
          className="bg-sidebar fixed top-4 right-4 px-4 cursor-pointer py-2 border-none z-50 text-2xl text-white lg:hidden"
          id="sidebar-ham-button"
        >
          <button className="text-2xl" onClick={openSidebar}>
            {" "}
            ☰{" "}
          </button>
        </div>

        <div
          className="h-full duration-500 w-0 bg-sidebar fixed top-0 right-0 py-20 overflow-x-hidden z-50  lg:hidden"
          id="mySidebar"
        >
          <a
            className="absolute block top-4 right-6 text-4xl font-button text-sidebar-text cursor-pointer duration-300"
            onClick={closeSidebar}
            id={hoverColor ? "hover-color" : ""}
          >
            {" "}
            ×{" "}
          </a>
          {links.map((link) => (
            <Link href={link.route}>
              <a className="block uppercase pr-2 pl-8 py-2 text-1.125 font-button text-sidebar-text duration-300 bg-transparent">
                {link.name}{" "}
              </a>
            </Link>
          ))}
        </div>

        <div
          className="h-full duration-500 w-0 bg-sidebar fixed top-0 right-0 py-20 overflow-x-hidden z-10  lg:hidden"
          id="mySidebar"
        >
          <a
            className="absolute top-4 right-6 text-4xl font-button text-sidebar-text  cursor-pointer duration-300"
            onClick={closeSidebar}
          >
            {" "}
            X{" "}
          </a>
          {links.map((link) => (
            <Link href={link.route}>
              <a className="block uppercase  pr-2 pl-8 py-2 text-2xl text-sidebar-text">
                {link.name}{" "}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
