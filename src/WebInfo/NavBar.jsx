import React, { useContext, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { commoncontext } from "./ContextInfo";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { totalPrice } = useContext(commoncontext);

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
            <img className="w-full" src="\images\logo\forever.png" alt="" />
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
            className="flex lg:gap-8 md:gap-6 sm:gap-4 sm:w-[10%] w-[60%] justify-end gap-5"
          >
            {/* search button */}
            <div id="search_btn">
              <a href="#">
                <img
                  className="w-5"
                  src="\images\icons\magnifing_Glass.png"
                  alt=""
                />
              </a>
            </div>

            {/* account button */}
            <div id="accout_but">
              <a href="#">
                <img className="w-5" src="\images\icons\admin.png" alt="" />
              </a>
            </div>

            {/* shoping button */}
            <div id="shoping_btn" className=" relative">
              <Link to={"/oncart"}>
                <img className="w-5" src="\images\icons\shoping.png" alt="" />
                <div
                  id="shop_cout"
                  className=" absolute w-4 h-4  flex justify-center items-center rounded-full bg-black top-3 left-2 text-white text-xs"
                >
                  {totalPrice}
                </div>
              </Link>
            </div>

            <div className="sm:hidden flex items-center gap-4">
              {/* MENU ICON (ONLY < LG) */}
              <button className=" text-2xl" onClick={() => setOpen(true)}>
                <i className="fa-solid fa-bars text-black"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[360px] rounded-l-2xl backdrop-blur-2xl text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE ICON */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-2xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="flex flex-col gap-5 px-6 text-sm uppercase items-start ">
          <Link
            onClick={() => setOpen(false)}
            className="text-xl font-semibold "
            to="/"
          >
            home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="text-xl font-semibold flex justify-center items-center gap-5"
            to="/collection"
          >
            collection
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="text-xl font-semibold flex justify-center items-center gap-5"
            to="/about"
          >
            about
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="text-xl font-semibold flex justify-center items-center gap-5"
            to="/contact"
          >
            contact
          </Link>

          <button className="border border-[#374151]/30 px-4 py-1 rounded-full text-sm capitalize">
            admin panel
          </button>
        </div>
      </div>
    </>
  );
}
