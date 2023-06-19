import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section>
        <nav className="relative py-8 px-4 xl:px-10 bg-blue-800">
          <div className="flex items-center">
            <ul className="absolute top-1/2 transform -translate-y-1/2 lg:flex lg:w-auto lg:space-x-20">
              <li>
                <Link
                  className="flex items-center text-white font-semibold hover:text-blue-50"
                  href="/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                  </svg>
                  <span className="ml-3">К основной странице</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        <section className="relative py-24 bg-yellow-500">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-blue-800">
                Take quick action that increases your brand's regular profit.
              </h2>
              <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-500">
                If you have ever wondered how to develop your brand, this is the
                place for you. Take a big step forward in growing your business
                with this great tool.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-yellow-500 pt-24">
        <div className="relative container px-4 mx-auto z-10">
          <div className="p-12 md:p-20 bg-white">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-3/5 px-4 mb-6 lg:mb-0">
                <h2 className="text-4xl font-bold font-heading text-blue-800">
                  Take quick action that increases your brand's regular profit.
                </h2>
              </div>
              <div className="w-full lg:w-2/5 px-4">
                <h3 className="uppercase text-blue-400 font-semibold leading-loose tracking-widest">
                  Address
                </h3>
                <p className="mb-4 text-gray-500">
                  1686 Geraldine Lane New York, NY 10013
                </p>
                <h3 className="uppercase text-blue-400 font-semibold leading-loose tracking-widest">
                  Contacts
                </h3>
                <p className="text-gray-500">hello@wireframes.org</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative -mt-40">
          <img
            className="w-full h-80 lg:h-auto object-cover"
            src="images/about-jpg-1684070064376.webp"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
