import React, { useEffect, useState } from "react";
import Card from "../Card";

export default function BestSeller() {
  const [best, setbest] = useState([]);

  useEffect(() => {
    fetch("/Json/BestSeller.json")
      .then((res) => res.json())
      .then((data) => setbest(data))
      .catch((err) => console.log("error to fetch data from bestseller json"));
  }, []);
  return (
    <>
      <div
        id="bestsell_area"
        className="w-full flex justify-center items-center sm:py-20 py-5"
      >
        {/* main lastest space for card and title  */}
        <div
          id="best_collection"
          className="sm:w-[85%] w-[94%]  flex flex-col items-center"
        >
          {/* title section  */}
          <div id="title_area1" className="flex flex-col items-center gap-4">
            {/* main title  */}
            <div
              id="main_titile1"
              className=" relative flex gap-2 uppercase sm:text-3xl text-xl"
            >
              <h1 className="text-[#374151]">best</h1>
              <h1>seller</h1>
              {/* line font of title  */}
              <div
                className=" absolute sm:w-15 w-5 border-b border-2 sm:top-5 sm:left-45 top-3 left-35"
                id="line1"
              ></div>
            </div>

            {/* colection discreption  */}
            <p className="text-[#374151] sm:text-[1rem] text-xs text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>
          </div>

          <div id="card_display_area1" className="mt-8 w-full flex flex-wrap">
            {/*card*/}
            {best.map((e) => {
              return <Card info={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
