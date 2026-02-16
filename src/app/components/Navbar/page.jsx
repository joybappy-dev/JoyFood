"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Logo/page";
import Link from "next/link";
import Button from "../Button/page";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY);
    });

    window.removeEventListener("scroll", () => {});
  }, []);

  const navlinks = (
    <>
      <li>
        <Link href="/foods">
          <Button>Foods</Button>
        </Link>
      </li>
      <li>
        <Link href="/reviews">
          <Button>Reviews</Button>
        </Link>
      </li>
    </>
  );
  return (
    <nav
      className={`bg-white/20 px-3 border border-gray-400 rounded-sm backdrop-blur-md`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex justify-between gap-4">{navlinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
