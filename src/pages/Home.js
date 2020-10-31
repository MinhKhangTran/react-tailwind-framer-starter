import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Hero, About, Tabs, Gallery, Sidebar } from "../components";
import { useGlobalContext } from "../context/context";

export default function Home() {
  const { navToggle } = useGlobalContext();

  return (
    <>
      <Sidebar />
      <Navbar />
      <Hero></Hero>
      <About></About>
      <Tabs></Tabs>
      <Gallery></Gallery>
    </>
  );
}
