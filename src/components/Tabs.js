import React from "react";
import { useGlobalContext } from "../context/context";
import { motion } from "framer-motion";

export default function Tabs() {
  const { disco, value, setValue } = useGlobalContext();
  let sortedItem = [...disco].sort((a, b) => a.year - b.year);
  const { title, desc } = sortedItem[value];
  return (
    <section className="bg-purple-200 " id="music">
      <h1 className="text-center py-8 text-2xl underline text-purple-500 font-bold tracking-widest">
        Discography
      </h1>
      <article className="flex flex-col md:flex-row w-11/12 md:w-1/3 mx-auto justify-between items-center md:mt-24">
        <div className="md:flex md:flex-col w-full grid grid-cols-3 mx-auto text-purple-600 text-2xl font-bold md:flex-no-wrap mb-8 md:mb-0">
          {sortedItem.map((item, index) => {
            return (
              <motion.button
                key={item.id}
                className={`${
                  value === index
                    ? "md:my-2 underline font-bold text-purple-700 mx-2"
                    : "md:my-2 mx-2"
                }`}
                onClick={() => {
                  setValue(index);
                }}
                whileTap={{ scale: 0.95, originX: 0 }}
                whileHover={{ scale: 1.1, originX: 0 }}
              >
                <h1>{item.year}</h1>
              </motion.button>
            );
          })}
        </div>
        <div className="flex flex-col justify-center w-full items-center">
          <h1 className="font-bold tracking-widest text-purple-600 capitalize">
            {title}
          </h1>
          {desc.map((item) => {
            return (
              <h1 className="my-2 italic capitalize">
                <span className="underline text-purple-600 mr-2 not-italic">
                  Song:
                </span>
                {item}
              </h1>
            );
          })}
        </div>
      </article>
    </section>
  );
}
