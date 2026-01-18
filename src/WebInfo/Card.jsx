import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Card({ info }) {
  return (
    <>
      <div className="w-[50%] sm:w-[33.33%] md:w-[25%] lg:w-[20%] px-3">
        <Link to={`/product/${info.id}`}>
          <div className="bg-white overflow-hidden transition-all duration-300">
            {/* Image */}
            <div className="w-full bg-gray-100 overflow-hidden aspect-[3/4]">
              <img
                src={info.image_url}
                alt="Kid Tapered Slim Fit Trouser"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="pt-3">
              <p className="text-sm text-gray-800">{info.title}</p>
              <p className="text-base font-semibold mt-1">${info.price}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
