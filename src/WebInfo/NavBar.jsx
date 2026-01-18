import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div id="navbar_area" className="flex sticky top-0 backdrop-blur-sm z-10">
        {/* main navbar */}
        <div
          id="navBar"
          className="w-full lg:px-32 md:px-19 sm:px-10 md:py-5 sm:py-4 px-6 py-4 flex justify-between items-center border border-[#374151]/20 "
        >
          {/* right part or logo area */}
          <div
            id="left_area"
            className="lg:w-[10%] md:w-[17%] sm:w-[20%] w-[25%]"
          >
            <img
              className="w-full"
              src=".\public\images\logo\forever.png"
              alt=""
            />
          </div>

          {/* mid menu area */}
          <div
            id="mid_area"
            className="lg:w-[40%] md:w-[60%] sm:w-[70%] lg:gap-8 md:gap-4 sm:gap-3 sm:flex hidden uppercase text-sm font-semibold text-[#374151] justify-center items-center "
          >
            <NavLink to="/">home</NavLink>
            <NavLink to="/collection">collection</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contact">contact</NavLink>

            <button className="border border-[#374151]/30 px-4 py-1 rounded-full text-sm capitalize">
              admin panel
            </button>
          </div>

          {/* right side for icons and search btn */}

          <div
            id="right_area"
            className="flex lg:gap-8 md:gap-6 sm:gap-4 sm:w-[10%] w-[30%] gap-5"
          >
            {/* search button */}
            <div id="search_btn">
              <a href="#">
                <img
                  className="w-5"
                  src=".\public\images\icons\magnifing_Glass.png"
                  alt=""
                />
              </a>
            </div>

            {/* account button */}
            <div id="accout_but">
              <a href="#">
                <img
                  className="w-5"
                  src=".\public\images\icons\admin.png"
                  alt=""
                />
              </a>
            </div>

            {/* shoping button */}
            <div id="shoping_btn" className=" relative">
              <a href="#">
                <img
                  className="w-5"
                  src=".\public\images\icons\shoping.png"
                  alt=""
                />
                <div
                  id="shop_cout"
                  className=" absolute w-4 h-4  flex justify-center items-center rounded-full bg-black top-3 left-2 text-white text-xs"
                >
                  0
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
