import React from "react";
import Image from "next/image";
import cn from "classnames";

interface articleCardProps {
  picture: string;
  date: string;
  title: string;
  header: string;
  isBigCard: boolean;
}

export const ArticleCard = ({ picture, date, title, header, isBigCard = false }: articleCardProps) => {
  return (
    <li
      className={cn('w-full px-4 mb-20',{
        'lg:w-2/3': isBigCard,
        'lg:w-1/3': !isBigCard
      })}
    >
      <div className="relative flex h-96 mb-8 overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={'/' + picture}
          alt={header}
          fill
        />
        <span className="absolute bottom-0 right-0 pl-10 pr-8 py-3 -mr-1 text-xs font-semibold text-gray-500 bg-blue-50 clip-path-left-small">
          {date}
        </span>
      </div>
      <h2 className="mb-4 text-2xl font-semibold font-heading text-blue-800">
        {title}
      </h2>
      <p className="mb-3 text-base text-gray-500 leading-loose">
        {header}
      </p>
    </li>
  )
}