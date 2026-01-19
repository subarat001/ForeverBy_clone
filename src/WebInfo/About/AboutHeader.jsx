import React from "react";

export default function AboutHeader() {
  return (
    <>
      <div className="w-full px-4 md:px-10 py-14">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium tracking-wide">
            ABOUT US{" "}
            <span className="inline-block w-10 h-1 bg-black ml-2 align-middle"></span>
          </h2>
        </div>

        {/* main section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src="/images/aboutPg/about_img-BAJyTXw9.png"
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-gray-700 leading-7 space-y-6">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>

            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <h3 className="text-black font-semibold text-lg">Our Mission</h3>

            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
