import React from "react";
import { ArticleCard } from "./components/article-card";
import articlesJson from "@/app/data/articles.json";

export default function Page() {
  return (
    <section className="pb-10">
      <div className="container px-4 mx-auto pt-5">
        <div className="mx-auto mb-16">
          <h2 className="my-5 text-4xl font-bold font-heading text-blue-800">
            Статьи
          </h2>
        </div>
        <ul className="flex flex-wrap -mx-4 -mb-20">
          {
            articlesJson.map((article, articleId) => {
              return (
                <ArticleCard
                  key={article.id}
                  picture={article.picture}
                  date={article.date}
                  title={article.title}
                  header={article.header}
                  isBigCard={articleId === 0}
                />
              );
            })
          }
        </ul>
      </div>
    </section>
  );
}
