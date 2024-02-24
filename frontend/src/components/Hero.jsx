import React from "react";

const Hero = (props) => {
  return (
    <div
      className={`${props.style} w-full min-h-[600px] bg-cover bg-center md:bg-center flex flex-col justify-center ${props.position}`}
    >
      <div className={`w-2/3 lg:w-1/2 text-white ${props.space}`}>
        <h1 className="text-2xl font-bold lg:text-4xl md:text-4xl">
          Start your Adventure.
        </h1>
        <p className="text-md lg:text-2xl md:text-xl">
          Embrace the wilderness, where freedom meets the thrill of the
          outdoors.
        </p>
      </div>
    </div>
  );
};

export default Hero;
