import React from "react";

export default function Policy() {
  return (
    <>
      <div
        id="policy_area"
        className="w-full flex justify-center items-center sm:py-5"
      >
        <div
          id="policy_section"
          className="sm:w-[85%] sm:flex w-[91%] justify-evenly text-center space-y-6"
        >
          {/* card1 easy exchang  */}
          <div
            id="card1"
            className="flex flex-col justify-center items-center gap-2"
          >
            <img
              className="w-13"
              src=".\public\images\icons\energy.png"
              alt=""
            />
            <h1 className="text-[#374151] font-semibold ">
              Easy Exchange Policy
            </h1>
            <p className="text-[#374151]/40 font-semibold text-sm ">
              We offer hassle free exchange policy
            </p>
          </div>

          {/* card2 7days policy */}
          <div id="card2" className="flex flex-col justify-center items-center">
            <img
              className="w-13"
              src=".\public\images\icons\tickmark.png"
              alt=""
            />
            <h1 className="text-[#374151] font-semibold ">
              7 Days Return Policy
            </h1>
            <p className="text-[#374151]/40 font-semibold text-sm ">
              We provide 7 days free return policy
            </p>
          </div>

          {/* card3 coustomer saport */}
          <div id="card3" className="flex flex-col justify-center items-center">
            <img
              className="w-13"
              src=".\public\images\icons\headphone.png"
              alt=""
            />
            <h1 className="text-[#374151] font-semibold ">
              Best customer support
            </h1>
            <p className="text-[#374151]/40 font-semibold text-sm ">
              we provide 24/7 customer support
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
