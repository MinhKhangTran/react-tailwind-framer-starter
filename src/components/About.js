import React from "react";
import { images } from "../assets/data";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex flex-col-reverse md:flex-row bg-purple-200"
    >
      <div className="md:w-1/2 w-full h-64 md:h-full">
        <img
          className="w-full h-full object-cover object-top"
          src={images[5]}
          alt="joy-about"
        />
      </div>
      <div className=" md:w-1/2 w-full h-full grid place-items-center">
        <div className="text-xl text-purple-600">
          <h1 className="text-2xl font-bold tracking-widest">Joy</h1>
          <p>Birth Name: Park Soo-young</p>
          <p>Hangul: 박수영</p>
          <p>Birth Date: September 3, 1996 (age 24)</p>
          <p>Birth Place: Jeju Island, South Korea</p>
          <p>Height: 170cm cm (Official)</p>
          <p>Weight: 48 kg</p>
        </div>
      </div>
    </section>
  );
}
