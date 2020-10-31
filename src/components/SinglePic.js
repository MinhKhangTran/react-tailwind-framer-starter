import React from "react";
import { useGlobalContext } from "../context/context";
import { motion, useCycle } from "framer-motion";

// const picVariants = {
//   open: {
//     y: "-10vh",
//     opacity: "0",
//     transition: {
//       duration: 0.1,
//       type: "spring",
//       stiffness: 100,
//       ease: "easeInOut",
//     },
//   },
//   closed: {
//     y: "10vh",
//     opacity: "1",
//     transition: {
//       duration: 0.1,
//       type: "spring",
//       stiffness: 100,
//       ease: "easeInOut",
//     },
//   },
// };

export default function SinglePic() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const { setShowModal, selectedImg } = useGlobalContext();
  return (
    <motion.section
      className="fixed top-0 left-0 h-screen w-screen z-50 grid place-items-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={() => {
        setShowModal(false);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="md:w-1/2 w-11/12 bg-purple-100 rounded-md"
        style={{ height: "90vh" }}
        initial={{ y: "-10vh" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 100,
          ease: "easeInOut",
        }}
      >
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src={selectedImg}
          alt="joy"
        />
      </motion.div>
    </motion.section>
  );
}
