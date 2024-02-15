'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { navLinks } from "@/layouts/main/config-navigation";

export default function NavBarDesktop() {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-3xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            My Portfolio
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {navLinks.map(({ title, path }) => (
          <li
            key={title}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map(({ title, path }) => (
            <li
              key={title}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={path}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
