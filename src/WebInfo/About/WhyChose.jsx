import React from "react";

export default function WhyChose() {
  return (
    <>
      <div
        id="chooseUs_area"
        className="w-full flex justify-center items-center"
      >
        <div
          id="chooseUs_section"
          className="sm:w-[85%] w-[95%] flex flex-col py-12"
        >
          {/* title area  */}
          <div
            id="titile_area"
            className=" relative flex gap-1 text-xl uppercase"
          >
            <h1>why</h1>
            <h1>choose us</h1>
            <div
              className=" absolute w-7 border-b-3 bottom-3 left-40"
              id="line"
            ></div>
          </div>

          <div id="quality_cards_area" className="sm:flex justify-evenly p-10">
            {/* card 1  */}
            <div
              id="card1"
              className=" border border-[#374151]/30 py-20 px-10 flex flex-col gap-6"
            >
              <h1 className="text-sm font-bold capitalize ">
                Quality Assurance:
              </h1>
              <p className="text-sm text-[#374151] ">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>

            {/* card 2  */}
            <div
              id="card2"
              className=" border border-[#374151]/30 py-20 px-10 flex flex-col gap-6"
            >
              <h1 className="text-sm font-bold capitalize ">Convenience:</h1>
              <p className="text-sm text-[#374151] ">
                With our user-friendly interface and hassle-free ordering
                process, shopping has never been easier.
              </p>
            </div>

            {/* card 3  */}
            <div
              id="card3"
              className=" border border-[#374151]/30 py-20 px-10 flex flex-col gap-6"
            >
              <h1 className="text-sm font-bold capitalize ">
                Exceptional Customer Service:
              </h1>
              <p className="text-sm text-[#374151] ">
                Our team of dedicated professionals is here to assist you the
                way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
