import React, { useContext, useState } from "react";
import ProductListCard from "./ProductListCard";
import { commoncontext } from "../ContextInfo";

export default function Cart() {
  const { cartproduct } = useContext(commoncontext);

  // console.log(cartproduct[0].price);

    let totalPrice = cartproduct.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

  return (
    <>
      <div id="addtocart_section">
        {/* title section  */}
        <div
          id="title_section"
          className="w-full py-10 mt-5 md:px-31 sm:px-10 px-2 "
        >
          <h1 className="text-2xl uppercase text-[#808080] absolute">
            your
            <span className="ml-2 text-black font-semibold">
              cart{" "}
              <div className=" relative w-12 border-2 bottom-4 left-35"></div>
            </span>
          </h1>
        </div>

        {/* product section  */}
        <div
          id="product_section"
          className=" w-full md:px-31 sm:px-10 px-2 my-10 "
        >
          {cartproduct.map((el) => {
            return <ProductListCard info={el} />;
          })}
        </div>

        {/* cart total section  */}
        <div
          id="cartTotal_section"
          className="w-full py-10 md:px-31 sm:px-10 px-2 flex flex-col lg:items-end items-center  "
        >
          <div
            id="total_area"
            className="lg:w-[30%] md:w-[50%] sm:w-[80%] w-[95%]"
          >
            {/* title section  */}
            <div id="title_section">
              <h1 className="text-2xl uppercase text-[#808080] relative">
                cart
                <span className="ml-2 text-black font-semibold">
                  totals
                  <div className=" absolute w-12 border-2 bottom-3 left-40"></div>
                </span>
              </h1>
            </div>
            {/* subtotal section  */}
            <div
              id="sub_total"
              className="w-full flex justify-between py-1 mt-5"
            >
              <p>Subtotal</p>
              <p>${totalPrice}.00</p>
            </div>
            {/* shipping fee section  */}
            <div
              id="shipping"
              className="w-full flex justify-between py-1 border-y border-[#808080]/40"
            >
              <p>Shipping Fee</p>
              <p>$ 10.00</p>
            </div>

            {/* total section  */}

            <div
              id="total_price"
              className="w-full flex justify-between py-1 font-bold"
            >
              <p>Total</p>
              <p>$ {totalPrice + 10}.00</p>
            </div>

            {/* procead to check btn */}
            <div id="buttion_area" className="flex justify-end mt-5">
              <button className="bg-black text-white px-8 py-2 uppercase cursor-pointer">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
