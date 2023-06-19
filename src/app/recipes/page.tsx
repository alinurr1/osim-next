import React from "react";
import { RecipeCard } from "./components/recipe-card";
import recipesJson from "@/app/data/recipes.json";

export default function Page() {
  return (
    <section className="pt-6 pb-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="w-full mx-auto mb-16">
          <h2 className="my-5 text-4xl font-bold font-heading text-blue-800">
            Рецепты
          </h2>
        </div>
        <ul className="flex flex-wrap -m-4 mb-16">
          {
            recipesJson.map((recipe, id) => {
              return (
                <RecipeCard key={id} picture={recipe.picture} title={recipe.title} />
              )
            }
          )}
        </ul>
      </div>
    </section>
  );
}
