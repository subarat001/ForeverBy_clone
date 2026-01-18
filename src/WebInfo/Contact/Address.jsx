import React from 'react'

export default function Address() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20">
        {/* ===== Title ===== */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl font-semibold tracking-wide">CONTACT US</h2>
          <span className="w-20 h-[2px] bg-gray-800 mt-4"></span>
        </div>

        {/* ===== Content ===== */}
        <div className="flex flex-col lg:flex-row items-start gap-20">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/contactImg/contact_img-CyOum2vk.png"
              alt="Contact"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Store</h3>
              <p className="text-gray-600 leading-7">
                54709 Willms Station <br />
                Suite 350, Washington, USA
              </p>

              <p className="text-gray-600 mt-6 leading-7">
                Tel: (415) 555-0132 <br />
                Email: admin@forever.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Careers at Forever</h3>
              <p className="text-gray-600 mb-6">
                Learn more about our teams and job openings.
              </p>

              <button className="border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
