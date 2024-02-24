/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Menu, X, Facebook, Twitter, Youtube, Instagram } from "react-feather";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full top-0 bg-black bg-opacity-15  py-3 h-[5rem] text-white">
      <div className="flex justify-between">
        {/* Logo */}
        <div>
          <a href="#" className="flex items-center py-3 pl-10 pr-4">
            <span className="font-semibold text-xl">Journey Masters</span>
          </a>
        </div>
        {/* Navbar */}
        <div className="hidden text-sm lg:flex lg:text-md  items-center pr-16 space-x-1">
          <a
            href="#"
            className="py-2 px-3 font-semibold border-b-2 border-transparent hover:border-amber-400 "
          >
            Home
          </a>
          <a
            href="#"
            className="py-2 px-3 font-semibold border-b-2 border-transparent hover:border-amber-400"
          >
            Articles
          </a>
          <a
            href="#"
            className="py-2 px-3 font-semibold border-b-2 border-transparent hover:border-amber-400"
          >
            About
          </a>

          <a
            href="#"
            className="py-2 px-3 font-semibold border-b-2 border-transparent hover:border-amber-400"
          >
            Contact
          </a>

          <div className="flex space-x-4 border-r-2 border-l-2 pr-4 pl-2.5 border-white">
            <Facebook className="w-6 h-6 cursor-pointer" />
            <Instagram className="w-6 h-6 cursor-pointer" />
            <Twitter className="w-6 h-6 cursor-pointer" />
            <Youtube className="w-6 h-6 cursor-pointer" />
          </div>
          <div className=" flex px-4 gap-3 items-center">
            <a
              href="#"
              className="py-2 font-semibold border-b-2 pr-3 border-transparent hover:border-amber-400 "
            >
              Login
            </a>

            <a
              href="#"
              className="py-2 font-semibold border-b-2 border-transparent hover:border-amber-400 "
            >
              Signup
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex flex-col pr-10 items-center">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="outline-none px-3 py-4 mobile-menu-button"
          >
            {!isMenuOpen ? (
              <Menu className="w-6 h-6 " />
            ) : (
              <X className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden mt-3 w-100 transition-all ease-out transform origin-top duration-400 pt-1 bg-black bg-opacity-15 ${
          isMenuOpen
            ? "scale-y-100 opacity-100 max-h-96"
            : "scale-y-0 opacity-0 max-h-0"
        } `}
      >
        <a
          href="#"
          className="block py-2 pl-10 text-sm  hover:bg-black hover:bg-opacity-25"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-2 pl-10 text-sm   hover:bg-black hover:bg-opacity-25"
        >
          Articles
        </a>
        <a
          href="#"
          className="block py-2 pl-10 text-sm   hover:bg-black hover:bg-opacity-25"
        >
          About
        </a>

        <a
          href="#"
          className="block pt-2 pb-2 pl-10 text-sm   hover:bg-black hover:bg-opacity-25"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
