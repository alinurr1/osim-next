import React from "react";
import Link from "next/link";
import Image from "next/image";

interface articlePageProps {
  readonly title: string;
  readonly picture: string;
  readonly text: string;
}

export default function Page(props: articlePageProps) {
  return (
    <>
      <div>
        <Link
          className="inline-block w-full md:w-auto px-8 py-5 text-sm font-bold transition duration-200 bg-blue-800 hover:bg-blue-600 text-white"
          href="/articles"
        >
          Назад к статьям
        </Link>
      </div>
      <section className="pb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mb-12 mx-auto text-center">
            <h2 className="mb-6 text-5xl text-blue-800 font-bold font-heading">
              {props.title}
            </h2>
          </div>
        </div>
        <div className="h-64 lg:h-144 mb-12">
          <Image
            className="w-full h-full object-cover"
            src={'/' + props.picture}
            alt={props.title}
            fill
          />
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            {props.text}
          </div>
        </div>
      </section>
    </>
  );
}

// export async function getStaticProps({ params }) {
//   const data = await import('@/app/data/articles.json');
//   let article = data.find(article => {
//     return article === params.id;
//   });
//
//   if (article === undefined) {
//     article = {
//       id: "",
//       header: "",
//       title: "",
//       picture: "",
//       text: "",
//       date: ""
//     }
//   }
//
//   return {
//     props: {
//       title: article.title,
//       picture: article.picture,
//       text: article.text
//     }
//   }
// }
