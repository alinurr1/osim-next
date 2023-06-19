"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import recipesJson from "@/app/data/recipes.json";

interface recipePageProps {
  readonly title: string;
  readonly picture: string;
  readonly text: string;
  readonly ingredients: string[];
}

export default function Page() {
  const [recipe, setRecipe] = useState<recipePageProps>({
    title: "",
    picture: "",
    text: "",
    ingredients: [],
  });
  const pathname = usePathname();

  useEffect(() => {
    const id = pathname.split("/")[2];
    const foundRecipe = recipesJson.find((recipe) => recipe.id === id);
    if (foundRecipe?.title) {
      setRecipe(foundRecipe);
    }
  }, [setRecipe, pathname]);

  return (
    <>
      <section>
        <nav className="relative mb-10 py-8 px-4 xl:px-10 bg-blue-800">
          <div className="flex items-center">
            <ul className="absolute top-1/2 transform -translate-y-1/2 lg:flex lg:w-auto lg:space-x-20">
              <li>
                <Link
                  className="flex items-center text-white font-semibold hover:text-blue-50"
                  href="/recipes"
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
                  <span className="ml-3">Назад к рецептам</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section className="pb-24">
        <div className="container px-4 mx-auto">
          <div className="h-64 lg:h-144 mb-12 lg:mb-16">
            <img
              className="w-full h-full object-cover"
              src={"/" + recipe.picture}
              alt={recipe.title}
            />
          </div>
          <div className="max-w-2xl lg:mb-12 mb-6 mx-auto text-center">
            <h2 className="mb-6 lg:text-5xl text-2xl text-blue-800 font-bold font-heading">
              {recipe.title}
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">{recipe.text}</div>
          <div className="mt-5 max-w-2xl mx-auto">
            <h3 className="mb-6 lg:text-3xl text-xl text-blue-800 font-bold font-heading">
              Ингредиенты
            </h3>
            <ul className="list-disc">
              {recipe.ingredients.map((ingredient, id) => {
                return (
                  <li className="ml-4" key={id}>
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
