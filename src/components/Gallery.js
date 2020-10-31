import React from "react";
import { useGlobalContext } from "../context/context";
import SinglePic from "./SinglePic";

export default function Gallery() {
  const { pic, showModal, setShowModal, setSelectedImg } = useGlobalContext();
  return (
    <section className="bg-purple-200 pb-8" id="gallery">
      <h1 className="text-center py-4 text-2xl underline text-purple-500 font-bold tracking-widest">
        Gallery
      </h1>
      <article className="grid md:grid-cols-3 grid-cols-1 gap-4 w-11/12 mx-auto">
        {pic.map((bild, i) => {
          return (
            <div
              key={i}
              style={{ height: "300px", width: "300px" }}
              className="border-purple-600 border-4 rounded-md mx-auto hover:shadow-xl cursor-pointer"
              onClick={() => {
                setShowModal(true);
                setSelectedImg(bild);
              }}
            >
              <img
                className="w-full h-full object-cover object-top"
                src={bild}
                alt={`bild-${i}`}
              />
            </div>
          );
        })}
      </article>
      {showModal && <SinglePic></SinglePic>}
    </section>
  );
}
