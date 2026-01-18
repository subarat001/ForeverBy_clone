import React from "react";

export default function Footer() {
  return (
    <>
      <div
        id="footer_area"
        className="w-full flex flex-col justify-center items-center"
      >
        <div id="footer_section" className="sm:w-[85%] w-[95%] sm:flex  py-10">
          {/* left logo and discreption area */}
          <div id="left_section" className="sm:w-[50%] w-full">
            {/* logo */}
            <img
              className="sm:w-[20%] w-[30%] mb-7"
              src=".\public\images\logo\forever.png"
              alt=""
            />

            {/* logo discreption  */}
            <p className="sm:w-[72%]  text-sm text-[#374151]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* right menu and address area  */}

          <div id="right_area" className="w-[50%] sm:flex justify-between">
            {/* company section */}
            <div id="company_section" className="sm:w-[50%] sm:mt-0 mt-15">
              <h1 className="text-xl uppercase font-semibold mb-7">company</h1>
              <div
                id="menu_area"
                className="flex flex-col text-xs capitalize text-[#374151] font-medium gap-2 "
              >
                <a href="#">home</a>
                <a href="#">about us</a>
                <a href="#">delivery</a>
                <a href="#">privacy policy</a>
              </div>
            </div>

            {/* get in touch section  */}

            <div id="getInTouch" className="sm:w-[50%] sm:mt-0 mt-15">
              <h1 className="text-xl uppercase font-semibold mb-7">
                get in touch
              </h1>
              <div
                id="address"
                className="text-sm capitalize text-[#374151]  gap-2"
              >
                <p>+1-000-000-0000</p>
                <p>greatstackdev@gmail.com</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="copyRight_section"
          className="py-4 border-t border-[#374151]/20 w-[85%] flex justify-center text-sm items-center text-center"
        >
          <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
        </div>
      </div>
    </>
  );
}
