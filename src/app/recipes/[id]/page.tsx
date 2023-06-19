import React from "react";

export default function Page() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="h-64 lg:h-144 mb-12 lg:mb-16">
          <img
            className="w-full h-full object-cover"
            src="images/photo-1612966874574-e0a92ad2bc43-1683675236541.webp"
            alt=""
          />
        </div>
        <div className="max-w-2xl mb-12 mx-auto text-center">
          <h2 className="mb-6 text-5xl text-blue-800 font-bold font-heading">
            Спагетти со шпинатом и кедровыми орехами
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="mb-6 text-lg text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            eveniet est laborum exercitationem!
          </p>
          <p className="mb-6 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illo
            ipsa magni dolore doloribus? Velit laboriosam est nostrum ducimus,
            amet enim sed quidem excepturi?
          </p>
          <p className="mb-6 text-lg text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            aperiam ipsum vel facilis, quibusdam velit. Et, ipsam repellat?
            Possimus id exercitationem aut voluptatum cumque, nemo quaerat
            officiis accusamus.
          </p>
          <p className="mb-6 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illo
            ipsa magni dolore doloribus? Velit laboriosam est nostrum ducimus,
            amet enim sed quidem excepturi?
          </p>
        </div>
      </div>
    </section>
  );
}
