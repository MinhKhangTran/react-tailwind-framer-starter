import React from "react";
import { navbar } from "../assets/data";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  const { closeNav, navToggle } = useGlobalContext();
  return (
    <section
      className={`${
        navToggle
          ? "bg-purple-300 transform -translate-x-full w-screen h-screen md:w-1/3 absolute top-0 left-0 transition transition-all duration-700 ease-in-out z-20"
          : "bg-purple-300 tranform translate-x-full w-screen h-screen md:w-1/3 absolute top-0 left-0 transition transition-all duration-700 ease-in-out z-20"
      }`}
    >
      <div className="w-11/12 md:w-2/3 md:mx-auto text-purple-700 text-xl md:text-3xl font-sans-serif font-bold tracking-wider flex justify-between p-2 md:flex-grow">
        <h1 className="">Joy</h1>
        <button className="" onClick={closeNav}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className="w-11/12 md:w-2/3 md:mx-auto p-2 text-purple-700 text-lg">
        {navbar.map((link) => {
          const { id, url, text } = link;
          return (
            <motion.li
              key={id}
              className="my-4 text-xl"
              whileHover={{ scale: 1.2, originX: 0 }}
              whileTap={{ scale: 0.8, originX: 0 }}
            >
              <a className="capitalize" href={url} onClick={closeNav}>
                {text}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
