import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [prod, setprod] = useState([]);

  useEffect(() => {
    fetch("/Json/Product.json")
      .then((res) => res.json())
      .then((dta) => setprod(dta))
      .catch((err) => console.log("err found in feth during product api "));
  }, []);

  return (
    <>
      {prod.map((elim) => {
        if (elim.id === Number(id)) {
          return (
            <div className="w-full px-4 md:px-10 py-10">
              {/*TOP SECTION */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* LEFT : IMAGES */}
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 border bg-gray-100 overflow-hidden">
                    <img
                      src={elim.image_url}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Main Image */}
                  <div className="flex-1 h-[500px] bg-gray-100 overflow-hidden">
                    <img
                      src={elim.image_url}
                      alt="main product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/*  RIGHT : PRODUCT INFO  */}
                <div className="space-y-6">
                  {/* Title */}
                  <h1 className="text-2xl font-semibold">{elim.title}</h1>

                  {/* Rating (dummy) */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-500">★★★★☆</span>
                    <span className="text-gray-500">(122)</span>
                  </div>

                  {/* Price */}
                  <p className="text-3xl font-semibold">${elim.price}</p>

                  {/* Short Description */}
                  <p className="text-gray-600 leading-relaxed">
                    A lightweight, usually knitted, pullover shirt with a round
                    neckline and comfortable fabric.
                  </p>

                  {/* Size (dummy) */}
                  <div>
                    <p className="font-medium mb-2">Select Size</p>
                    <div className="flex gap-3 flex-wrap">
                      <button className="border px-4 py-2">S</button>
                      <button className="border px-4 py-2">M</button>
                      <button className="border px-4 py-2">L</button>
                      <button className="border px-4 py-2">XL</button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <button className="bg-black text-white px-8 py-3">
                    ADD TO CART
                  </button>

                  {/* Extra Info */}
                  <div className="text-sm text-gray-600 space-y-1 border-t pt-4">
                    <p>100% Original product.</p>
                    <p>Cash on delivery available.</p>
                    <p>Easy return within 7 days.</p>
                  </div>
                </div>
              </div>

              {/* BOTTOM SECTION*/}
              <div className="max-w-7xl mx-auto mt-16">
                {/* Tabs (dummy) */}
                <div className="flex border-b">
                  <button className="px-6 py-3 border border-b-0 font-medium">
                    Description
                  </button>
                  <button className="px-6 py-3 border border-l-0 text-gray-500">
                    Reviews (122)
                  </button>
                </div>

                {/* Content */}
                <div className="border p-6 text-gray-600 leading-relaxed text-sm space-y-4">
                  <p>
                    An e-commerce website is an online platform that facilitates
                    the buying and selling of products or services over the
                    internet. It serves as a virtual marketplace where
                    businesses and individuals can showcase their products,
                    interact with customers, and conduct transactions without
                    the need for a physical presence. E-commerce websites have
                    gained immense popularity due to their convenience,
                    accessibility, and the global reach they offer.
                  </p>

                  <p>
                    E-commerce websites typically display products or services
                    along with detailed descriptions, images, prices, and any
                    available variations (e.g., sizes, colors). Each product
                    usually has its own dedicated page with relevant
                    information.
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
