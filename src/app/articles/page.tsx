import React from "react";
import { ArticleCard } from "./components/article-card";
import articlesJson from "@/app/data/articles.json";
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
                  <span className="ml-3">К основной странице</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section className="pb-10">
        <div className="container px-4 mx-auto pt-5">
          <div className="mx-auto mb-16">
            <h2 className="my-5 text-4xl font-bold font-heading text-blue-800">
              Статьи
            </h2>
          </div>
          <ul className="flex flex-wrap -mx-4 -mb-20">
            {articlesJson.map((article, articleId) => {
              return (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  picture={article.picture}
                  date={article.date}
                  title={article.title}
                  header={article.header}
                  isBigCard={articleId === 0}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
