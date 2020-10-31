import React from "react";
import { music, images } from "../assets/data";

export const Appcontext = React.createContext();

export const AppProvider = ({ children }) => {
  // Navbar
  const [navToggle, setNavToggle] = React.useState(true);

  const openNav = () => {
    setNavToggle(false);
  };
  const closeNav = () => {
    setNavToggle(true);
  };

  // Tabs
  const [disco, setDisco] = React.useState(music);
  const [value, setValue] = React.useState(0);

  // Gallery
  const [pic, setPic] = React.useState(images);
  const [index, setIndex] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);

  return (
    <Appcontext.Provider
      value={{
        navToggle,
        setNavToggle,
        openNav,
        closeNav,
        disco,
        value,
        setDisco,
        setValue,
        pic,
        setPic,
        index,
        setIndex,
        showModal,
        setShowModal,
        setSelectedImg,
        selectedImg,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(Appcontext);
};
