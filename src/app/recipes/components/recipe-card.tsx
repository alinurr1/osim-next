import React from "react";
import Image from "next/image";

interface recipeCardProps {
  picture: string;
  title: string;
}

export const RecipeCard = ({ picture, title }: recipeCardProps) => {
  return (
    <li className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white">
        <div className="relative h-52">
          <span className="absolute top left-0 pr-10 pl-8 py-4 text-xs uppercase text-gray-500 bg-white clip-path-right-small">
            Development
          </span>
          <Image
            className="w-full h-full object-cover"
            src={'/' + picture}
            alt={title}
            fill
          />
        </div>
        <div className="p-5 bg-yellow-500">
          <h2 className="text-xl font-semibold font-heading text-blue-800">
            {title}
          </h2>
        </div>
      </div>
    </li>
  )
}