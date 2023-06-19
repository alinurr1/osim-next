import React from "react";

export default function Page() {
  return (
    <>
      <section>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-blue-800 opacity-90" />
          <nav className="relative flex flex-col py-8 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-16 pr-6">
              <a
                className="ml-16 mr-auto text-xl text-blue-800 font-semibold leading-none"
                href="#"
              />
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                    href="#"
                  >
                    О нас
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                    href="#"
                  >
                    Продукция
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                    href="#"
                  >
                    Галерея
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                    href="#"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto px-10">
              <p className="mt-6 mb-4 text-center text-blue-400 text-xs">
                <span className="">All rights reserved © Osim 2023</span>
              </p>
            </div>
          </nav>
        </div>
        <section className="relative py-24 bg-blue-50">
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
              <a
                className="inline-block w-full md:w-auto mb-4 md:mr-6 text-sm font-bold uppercase border-2 border-transparent bg-yellow-500 hover:bg-yellow-400 text-blue-800 transition duration-200 py-6 px-16"
                href="#"
              >
                Activate Demo
              </a>
            </div>
          </div>
        </section>
      </section>
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-3 -mb-6">
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10">
              <div className="max-w-xs mx-auto text-center">
                <span className="flex items-center justify-center mx-auto mb-8 w-28 h-16 bg-yellow-500 clip-path-both">
                  <svg
                    className="text-blue-800 w-8 h-8"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path d="M16 -0.0533447L0 15.7333L16 31.52L32 15.7333L16 -0.0533447ZM3.7708 15.7333L16 3.66718L21.172 8.77022L19.2864 10.6307L16 7.38889L7.5428 15.7333L10.828 18.9759L8.9424 20.8364L3.7708 15.7333ZM20.6876 15.7333L16 20.3596L11.3136 15.7333L16 11.1094L20.6876 15.7333ZM10.828 22.6968L12.7136 20.8364L16 24.0778L24.4584 15.7333L21.172 12.4907L23.0576 10.6303L28.2292 15.7333L16 27.7995L10.828 22.6968Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-lg font-bold uppercase text-blue-800 font-heading">
                    Change of access
                  </h3>
                  <p className="text-base text-gray-500 leading-loose">
                    Take care to develop resources continually and integrity
                    them with previous projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10">
              <div className="max-w-xs mx-auto text-center">
                <span className="flex items-center justify-center mx-auto mb-8 w-28 h-16 bg-yellow-500 clip-path-both">
                  <svg
                    className="text-blue-800 w-8 h-8"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.3333 0V2.64111C24.0733 3.30415 29.3333 8.93644 29.3333 15.7867C29.3333 22.6357 24.0733 28.2676 17.3333 28.9306V31.5733C25.5457 30.9016 32.0001 24.0952 32.0001 15.7867C32.0001 7.47696 25.5457 0.673301 17.3333 0Z" />
                    <path d="M14.6668 28.9306C7.9296 28.2676 2.6668 22.6357 2.6668 15.7867C2.6668 8.93683 7.9296 3.30415 14.6668 2.64111V0C6.456 0.673301 0 7.47696 0 15.7867C0 24.0952 6.456 30.9016 14.6668 31.5733V28.9306Z" />
                    <path d="M8.12006 14.4712C8.75526 10.7389 12.0365 7.89333 16.0001 7.89333C19.9637 7.89333 23.2449 10.7389 23.8801 14.4712H26.5741C25.9181 9.28098 21.4405 5.26208 16.0001 5.26208C10.5625 5.26208 6.08326 9.28098 5.42566 14.4712H8.12006Z" />
                    <path d="M23.88 17.1021C23.2448 20.8328 19.9636 23.68 16 23.68C12.0364 23.68 8.75522 20.8328 8.12002 17.1021H5.42603C6.08323 22.2923 10.5624 26.3112 16 26.3112C21.4404 26.3112 25.918 22.2923 26.5744 17.1021H23.88Z" />
                    <path d="M15.9999 10.5245C13.0547 10.5245 10.6667 12.8807 10.6667 15.7866C10.6667 18.6926 13.0547 21.0487 15.9999 21.0487C18.9463 21.0487 21.3331 18.6926 21.3331 15.7866C21.3331 12.8807 18.9463 10.5245 15.9999 10.5245ZM15.9999 18.4179C14.5271 18.4179 13.3331 17.2398 13.3331 15.7866C13.3331 14.3335 14.5271 13.1554 15.9999 13.1554C17.4739 13.1554 18.6667 14.3335 18.6667 15.7866C18.6667 17.2398 17.4739 18.4179 15.9999 18.4179Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-lg font-bold uppercase text-blue-800 font-heading">
                    Frequent authentication
                  </h3>
                  <p className="text-base text-gray-500 leading-loose">
                    Take care to develop resources continually and integrity
                    them with previous projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mx-auto mb-10">
              <div className="max-w-xs mx-auto text-center">
                <span className="flex items-center justify-center mx-auto mb-8 w-28 h-16 bg-yellow-500 clip-path-both">
                  <svg
                    className="text-blue-800 w-8 h-8"
                    viewBox="0 0 30 31"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 0.404419H0.333374V15.2666C0.333374 23.4743 6.90037 30.1289 15 30.1289H29.6667V15.2666C29.6667 7.05898 23.0997 0.404419 15 0.404419ZM27.2221 27.6517H15C8.26107 27.6517 2.77794 22.0955 2.77794 15.2666V2.88158H15C21.739 2.88158 27.2221 8.43819 27.2221 15.2666V27.6517Z" />
                    <path d="M15.0001 5.3584C9.60017 5.3584 5.22217 9.79477 5.22217 15.2667C5.22217 20.7386 9.60017 25.1749 15.0001 25.1749C20.4 25.1749 24.778 20.7386 24.778 15.2667C24.778 9.79477 20.4 5.3584 15.0001 5.3584ZM15.0001 22.6978C10.9491 22.6978 7.66673 19.3705 7.66673 15.2667C7.66673 11.1628 10.9491 7.83556 15.0001 7.83556C19.0499 7.83556 22.3334 11.1628 22.3334 15.2667C22.3334 19.3705 19.0499 22.6978 15.0001 22.6978Z" />
                    <path d="M15 10.3127C12.3002 10.3127 10.1112 12.5309 10.1112 15.2667C10.1112 18.0025 12.3002 20.2206 15 20.2206C17.6997 20.2206 19.8887 18.0025 19.8887 15.2667C19.8887 12.5309 17.6997 10.3127 15 10.3127ZM15 17.7439C13.6499 17.7439 12.5554 16.6348 12.5554 15.2667C12.5554 13.8986 13.6499 12.7895 15 12.7895C16.35 12.7895 17.4445 13.8986 17.4445 15.2667C17.4445 16.6348 16.35 17.7439 15 17.7439Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-lg font-bold uppercase text-blue-800 font-heading">
                    List of regular users
                  </h3>
                  <p className="text-base text-gray-500 leading-loose">
                    Take care to develop resources continually and integrity
                    them with previous projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 pt-24">
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
