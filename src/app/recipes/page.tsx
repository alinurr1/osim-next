import React from "react";
import { RecipeCard } from "./components/recipe-card";
import recipesJson from "@/app/data/recipes.json";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-blue-50">
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
      <section className="pt-6 pb-20">
        <div className="container px-4 mx-auto">
          <div className="w-full mx-auto mb-16">
            <h2 className="my-5 text-4xl font-bold font-heading text-blue-800">
              Рецепты
            </h2>
          </div>
          <ul className="flex flex-wrap -m-4 mb-16">
            {
              recipesJson.map((recipe) => {
                  return (
                    <RecipeCard
                      key={recipe.id}
                      id={recipe.id}
                      picture={recipe.picture}
                      title={recipe.title}
                    />
                  )
                }
              )}
          </ul>
        </div>
      </section>
    </div>
  );
}
