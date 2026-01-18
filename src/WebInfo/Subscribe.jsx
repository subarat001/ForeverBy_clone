import React from "react";

export default function Subscribe() {
  return (
    <>
      <div
        id="subscribe_area"
        className="w-full flex justify-center items-center sm:py-5 py-4"
      >
        <div
          id="subs_section"
          className="sm:w-[85%] w-[94%] flex flex-col justify-center items-center gap-5"
        >
          {/* main titile  */}
          <h1 className="sm:text-2xl text-xl  font-bold capitalize">
            subscribe now & get 20% off
          </h1>

          {/* title discreption  */}
          <p className="text-[#374151]/50 font-semibold sm:text-md text-xs text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {/* input and suscribe area  */}
          <div id="input_area" className="flex sm:w-[50%] w-[90%]">
            <div
              id="input_sec"
              className="border border-[#374151]/50 md:w-[80%] sm:w-[50%] w-[70%]"
            >
              <input
                className="w-full py-2 px-2 placeholder:capitalize placeholder:font-semibold"
                placeholder="enter your email"
                type="text"
              />
            </div>
            <button className="border md:w-[20%] sm:w-[50%] w-[30%] cursor-pointer bg-black text-white">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
