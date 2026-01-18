import React from "react";

export default function () {
  return (
    <>
      <div id="header_area" className="w-full flex justify-center items-center">
        <div
          id="header"
          className="sm:w-[85%] w-[91%] sm:flex border border-[#374151]/30"
        >
          {/* left side font */}
          <div
            id="left_area"
            className="sm:w-[50%] flex flex-col justify-center items-center p-20 sm:p-0"
          >
            {/* out bestseller font */}
            <div
              id="word1"
              className=" relative flex justify-center items-center sm:text-md text-sm uppercase"
            >
              {/* first line front of font  */}
              <div
                className="absolute sm:right-32 sm:top-3.4 right-28 border-t w-15 border-2"
                id="line1"
              ></div>
              {/* font  */}
              <p>our bestseller</p>
            </div>

            {/* word two  */}
            <p
              id="latest_title"
              className="sm:text-6xl text-3xl text-[#374151] capitalize"
            >
              latest arrivals
            </p>

            {/* #word three */}
            <div
              id="word3"
              className="relative flex justify-center items-center font-bold uppercase sm:text-md text-sm"
            >
              <p>shop now</p>
              <div
                className=" absolute border-b w-12 sm:left-25 sm:top-3.5  left-20 border-2"
                id="line2"
              ></div>
            </div>
          </div>

          {/* right area for model  */}

          <div id="right_area" className="sm:w-[50%]">
            <img src=".\public\images\heroImg\hero_img.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
