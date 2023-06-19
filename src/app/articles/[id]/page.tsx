"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import articlesJson from "@/app/data/articles.json";

interface articlePageProps {
  readonly title: string;
  readonly picture: string;
  readonly text: string;
}

export default function Page(props: articlePageProps) {
  const [article, setArticle] = useState<articlePageProps>({
    title: "",
    picture: "",
    text: "",
  });
  const pathname = usePathname();

  useEffect(() => {
    const id = pathname.split("/")[2];
    const foundArticle = articlesJson.find((article) => article.id === id);
    if (foundArticle?.title) {
      setArticle(foundArticle);
    }
  }, [setArticle, pathname]);

  return (
    <>
      <section>
        <nav className="relative mb-10 py-8 px-4 xl:px-10 bg-blue-800">
          <div className="flex items-center">
            <ul className="absolute top-1/2 transform -translate-y-1/2 lg:flex lg:w-auto lg:space-x-20">
              <li>
                <Link
                  className="flex items-center text-white font-semibold hover:text-blue-50"
                  href="/articles"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span className="ml-3">Назад к статьям</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section className="pb-24 px-4">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl lg:mb-12 mb-6 mx-auto text-center">
            <h2 className="lg:mb-6 mb-2 lg:text-5xl text-2xl text-blue-800 font-bold font-heading">
              {article.title}
            </h2>
          </div>
        </div>
        <div className="relative flex max-w-5xl mx-auto h-96 mb-8 overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={"/" + article.picture}
            alt={article.title}
            fill
          />
        </div>
        <div className="container px-2 mx-auto">
          <div className="max-w-2xl mx-auto">{article.text}</div>
        </div>
      </section>
    </>
  );
}
