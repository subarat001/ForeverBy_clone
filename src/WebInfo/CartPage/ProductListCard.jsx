import React, { useContext, useState } from "react";
import { commoncontext } from "../ContextInfo";

export default function ProductListCard(props) {
  const { removeFromCart } = useContext(commoncontext);

  const handlechange = (eve) => {
    setinp(eve.target.value);
  };
  return (
    <>
      <div
        id="product_card_section"
        className="w-full flex justify-between items-center md:px-11 py-2 border-y border-[#808080]/40 text-[#525252]"
      >
        {/* image section  */}
        <div id="imageAndTitile" className="flex gap-6 w-[50%]">
          <div id="image_section" className="w-13 overflow-hidden">
            <img
              className="w-full h-fit object-cover"
              src={props.info.image_url}
              alt=""
            />
          </div>  

          <div
            id="info_section"
            className="flex flex-col justify-center sm:gap-6 gap-2"
          >
            <h1 className="sm:text-lg text-xs font-semibold ">
              {props.info.title}
            </h1>
            <div id="price_size" className="flex gap-7">
              <p className="font-bold">$ {props.info.price}</p>
              <p className="border w-8 h-8 flex justify-center items-center text-l font-semibold">
                L
              </p>
            </div>
          </div>
        </div>

        <div
          id="quantity_section"
          className="flex gap-2 justify-center items-center"
        >
          {/* minus icon  */}
          <button className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer">
            <i class="fa-solid fa-minus"></i>
          </button>
          <h1 className="text-lg">{props.info.quantity}</h1>
          {/* plus icon  */}
          <button
            className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>

        <div id="delet_section">
          <button onClick={() => removeFromCart(props.info)}>
            <i className="fa-regular fa-trash-can text-xl cursor-pointer"></i>
          </button>
        </div>
      </div>
    </>
  );
}
