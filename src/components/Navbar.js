import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
export default function Navbar() {
  const { openNav } = useGlobalContext();
  return (
    <section className="bg-purple-300 overflow-hidden">
      <nav className="w-11/12 md:w-2/3 mx-auto md:flex items-center">
        <div className="text-purple-700 text-2xl font-sans-serif font-bold tracking-wider flex justify-between p-2 md:flex-grow">
          <button className="" onClick={openNav}>
            <FaBars></FaBars>
          </button>
          <h1 className="text-purple-300">Joy</h1>
        </div>
      </nav>
    </section>
  );
}
