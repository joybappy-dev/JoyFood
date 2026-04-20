import Image from "next/image";
import React from "react";


const Logo = () => {
  return (
    <figure>
      {/* <img className="w-20" src="/logo.png" alt="logo" /> */}

      <Image className="w-20" src="/logo.png" width={100} height={50} alt="logo"/>
    </figure>
  );
};

export default Logo;