import React from "react";
import { images } from "../assets/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="bg-purple-200 overflow-hidden"
      style={{ height: "calc(100vh - 52px)" }}
    >
      <div className="w-screen  md:w-11/12 mx-auto bg-purple-200">
        <div
          className="w-1/2 grid place-items-center absolute md:relative"
          style={{ height: "calc(100vh - 52px)" }}
        >
          <h1 className="md:relative invisible md:visible ">
            <motion.span
              className="text-6xl font-bold text-purple-600 tracking-widest"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: "0" }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.75,
                type: "spring",
              }}
            >
              Joy
            </motion.span>
            <br />
            <motion.span
              className="opacity-50 text-purple-600 tracking-widest md:absolute top-0 left-0 -ml-48 mt-20 w-screen z-10 "
              style={{ fontSize: "6rem" }}
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: "0" }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.75,
                type: "spring",
                stiffness: "100",
              }}
            >
              Red Velvet
            </motion.span>
          </h1>
        </div>
        <motion.div
          className="md:w-2/5 w-full h-full  md:absolute md:top-0"
          style={{ right: "10%", height: "90%" }}
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <img
            className="w-full h-screen md:h-full object-top object-cover md:rounded-b-3xl"
            src={images[4]}
            alt="joy-landing"
          />
        </motion.div>
      </div>
    </section>
  );
}
