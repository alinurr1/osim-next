'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import cn from "classnames";

export const Header = () => {
  const pathname = usePathname();
  const [isNavHidden, setIsNavHidden] = useState(true);

  const isMainPage = pathname === '/';

  return (
    <section>
      <nav className="relative py-2 lg:py-8 px-4 xl:px-10 bg-blue-800">
        <div className="flex justify-between items-center">
          <a className="text-xl text-white font-semibold" href="#" />
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center p-3 rounded" onClick={() => setIsNavHidden(false)}>
              <svg
                className="text-white block h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-20">
            <li>
              <Link
                className="text-white font-semibold hover:text-blue-50"
                href="/articles"
              >
                Статьи
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold hover:text-blue-50"
                href="/recipes"
              >
                Рецепты
              </Link>
            </li>
            <li>
              <Link href="/#production" className="text-white font-semibold hover:text-blue-50">
                Продукция
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold hover:text-blue-50"
                href="/#gallery"
              >
                Галерея
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold hover:text-blue-50"
                href="/#contacts"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {
        isMainPage ?
          <div
            className="relative text-center bg-cover overflow-hidden py-72"
            style={{
              backgroundImage: 'url("images/about-jpg-1684070765310.webp")',
            }}
          >
            <div className="absolute top-0 bottom-0 -left-1/4 -right-1/4 flex items-center justify-center"></div>
            <div className="relative max-w-4xl mx-auto px-4"></div>
          </div>
          :
          <></>
      }
      <div
        className={cn("navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50", {
          "hidden": isNavHidden
          })
        }
      >
        <div className="navbar-backdrop fixed inset-0 bg-blue-800 opacity-90" onClick={() => setIsNavHidden(true)}/>
        <nav className="relative flex flex-col py-8 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-16 pr-6">
            <Link
              className="ml-16 mr-auto text-xl text-blue-800 font-semibold leading-none"
              href="/"
            />
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                  href="/articles"
                >
                  Статьи
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                  href="/recipes"
                >
                  Рецепты
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  onClick={() => setIsNavHidden(true)}
                  className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                  href="/#production"
                >
                  Продукция
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  onClick={() => setIsNavHidden(true)}
                  className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                  href="/#gallery"
                >
                  Галерея
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  onClick={() => setIsNavHidden(true)}
                  className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                  href="/#contacts"
                >
                  Контакты
                </Link>
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
    </section>
  )
}