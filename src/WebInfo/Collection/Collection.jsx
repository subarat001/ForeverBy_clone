import React, { useEffect, useState } from "react";
import Card from "../Card";

export default function Collection() {
  const [coll, setcoll] = useState([]);
  // const [filteredProduct, setFilteredProduct] = useState([]);

  const [m, setM] = useState(false);
  const [w, setW] = useState(false);
  const [k, setK] = useState(false);
  const [t, setT] = useState(false);
  const [b, setB] = useState(false);
  const [v, setV] = useState(false);

  let res = coll
    .filter(
      (item) =>
        (m && item.category == "men") ||
        (w && item.category == "women") ||
        (k && item.category == "kids") ||
        (!m && !w && !k),
    )
    .filter(
      (item) =>
        (t && item.segment == "topwear") ||
        (v && item.segment == "winterweare") ||
        (b && item.segment == "bottomwear") ||
        (!t && !v && !b),
    );

  useEffect(() => {
    fetch("/Json/Product.json")
      .then((res) => res.json())
      .then((dta) => setcoll(dta))
      .catch((err) => console.log("err found in feth during product api "));
  }, []);
  return (
    <>
      <div className="w-full px-4 md:px-8 py-8">
        {/* MAIN WRAPPER */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/*  FILTER SECTION */}
          <div className="w-full md:w-[260px]">
            {/* MOBILE FILTER DROPDOWN */}
            <details className="md:hidden border p-4">
              <summary className="font-semibold cursor-pointer">
                FILTERS
              </summary>

              <div className="mt-4 space-y-6">
                {/* CATEGORY */}
                <div className="border p-4">
                  <p className="font-semibold mb-3">CATEGORIES</p>
                  <div className="space-y-2 text-sm">
                    <label className="flex gap-2">
                      <input type="checkbox" onChange={() => setM(!m)} /> Men
                    </label>
                    <label className="flex gap-2">
                      <input type="checkbox" onChange={() => setW(!w)} /> Women
                    </label>
                    <label className="flex gap-2">
                      <input type="checkbox" onChange={() => setK(!k)} /> Kids
                    </label>
                  </div>
                </div>

                {/* TYPE */}
                <div className="border p-4">
                  <p className="font-semibold mb-3">TYPE</p>
                  <div className="space-y-2 text-sm">
                    <label className="flex gap-2">
                      <input type="checkbox" onChange={() => setT(!t)} />{" "}
                      Topwear
                    </label>
                    <label className="flex gap-2">
                      <input type="checkbox" onChange={() => setB(!b)} />{" "}
                      Bottomwear
                    </label>
                    <label className="flex gap-2">
                      <input type="checkbox" onChange={() => setV(!v)} />{" "}
                      Winterwear
                    </label>
                  </div>
                </div>
              </div>
            </details>

            {/* DESKTOP FILTER SIDEBAR */}
            <div className="hidden md:block space-y-6">
              <p className="font-semibold">FILTERS</p>

              {/* CATEGORY */}
              <div className="border p-4">
                <p className="font-semibold mb-3">CATEGORIES</p>
                <div className="space-y-2 text-sm">
                  <label className="flex gap-2">
                    <input type="checkbox" onChange={() => setM(!m)} /> Men
                  </label>
                  <label className="flex gap-2">
                    <input type="checkbox" onChange={() => setW(!w)} /> Women
                  </label>
                  <label className="flex gap-2">
                    <input type="checkbox" onChange={() => setK(!k)} /> Kids
                  </label>
                </div>
              </div>

              {/* TYPE */}
              <div className="border p-4">
                <p className="font-semibold mb-3">TYPE</p>
                <div className="space-y-2 text-sm">
                  <label className="flex gap-2">
                    <input type="checkbox" onChange={() => setT(!t)} /> Topwear
                  </label>
                  <label className="flex gap-2">
                    <input type="checkbox" onChange={() => setB(!b)} />{" "}
                    Bottomwear
                  </label>
                  <label className="flex gap-2">
                    <input type="checkbox" onChange={() => setV(!v)} />{" "}
                    Winterwear
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCTS SECTION*/}
          <div className="flex-1">
            {/* TITLE + SORT */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">ALL COLLECTIONS —</h2>

              <select className="border px-3 py-2 text-sm">
                <option>Sort by: Relevant</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* CARD GRID (CONNECT YOUR CARD JSX HERE) */}
            <div className="flex flex-wrap -mx-3 ">
              {res.map((elm) => {
                return <Card info={elm} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
