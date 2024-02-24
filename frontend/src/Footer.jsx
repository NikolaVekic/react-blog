/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Facebook, Twitter, Youtube, Instagram } from "react-feather";

const Footer = () => {
  return (
    <footer className="bg-gray-800 h-full w-full text-white py-12">
      <div className="items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-bold text-md">Contact the Publisher</h3>
            <small className="text-sm cursor-pointer">
              journeymasters@gmail.com
            </small>
            <small className="text-sm cursor-pointer">+000-123-456-789</small>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-bold text-md">Explore</h3>

            <p className="text-sm cursor-pointer">Partners</p>
            <p className="text-sm cursor-pointer">Advertise</p>
            <p className="text-sm cursor-pointer">Membership</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-bold text-md">Headquarter</h3>
            <p className="text-sm">123 Middle Road</p>
            <p className="text-sm">NY 1001, Sydney</p>
            <p className="text-sm">Australia</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold text-md">Connections</h3>
            <div className="flex gap-2">
              <Facebook className="w-6 h-6 cursor-pointer" />
              <Instagram className="w-6 h-6 cursor-pointer" />
              <Twitter className="w-6 h-6 cursor-pointer" />
              <Youtube className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
