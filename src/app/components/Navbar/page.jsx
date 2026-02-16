import React from "react";
import Logo from "../Logo/page";
import Link from "next/link";
import Button from "../Button/page";

const Navbar = () => {
  const navlinks = (
    <>
      <li><Button>Foods</Button></li>
      <li><Button>Reviews</Button></li>
    </>
  );
  return (
    <nav>
      <div className="flex justify-between items-center">
        <Link href="/"><Logo /></Link>
        <ul className="flex justify-between gap-4">{navlinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
