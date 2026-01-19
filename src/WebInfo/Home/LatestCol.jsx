import React, { useEffect, useState } from "react";
import Card from "../Card";

export default function LatestCol() {
  const [Data, setdata] = useState([]);

  useEffect(() => {
    fetch("/Json/Latest.json")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.error("JSON Fetch Error:", err));
  }, []);

  return (
    <>
      <div
        id="latestCol_area"
        className="w-full flex justify-center items-center sm:py-20 py-5"
      >
        {/* main lastest space for card and title  */}
        <div
          id="latest_collection"
          className="sm:w-[85%] w-[94%]  flex flex-col items-center"
        >
          {/* title section  */}
          <div id="title_area" className="flex flex-col items-center gap-4">
            {/* main title  */}
            <div
              id="main_titile"
              className=" relative flex gap-2 uppercase sm:text-3xl text-xl"
            >
              <h1 className="text-[#374151]">latest</h1>
              <h1>collections</h1>
              {/* line font of title  */}
              <div
                className=" absolute sm:w-15 w-6 border-b border-2 sm:top-5 sm:left-75 top-3 left-55"
                id="line"
              ></div>
            </div>

            {/* colection discreption  */}
            <p className="text-[#374151] sm:text-[1rem] text-xs text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>
          </div>

          <div id="card_display_area" className="mt-8 w-full flex flex-wrap">
            {/*card*/}

            {Data.map((e) => {
              return <Card info={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
