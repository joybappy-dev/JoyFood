"use client";
import React from "react";
import Button from "../Button/page";
import { usePathname, useRouter } from "next/navigation";

const SearchFood = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchText = e.target.search.value;
    router.push(`${pathname}?search=${searchText}`);
  };

  return (
    <form onSubmit={handleSearch} className="my-4 flex gap-4">
      <input
        className="border w-sm p-2 rounded-sm"
        type="text"
        name="search"
        placeholder="Enter Food Name"
        id=""
      />

      <button>
        <Button>Search</Button>
      </button>
    </form>
  );
};

export default SearchFood;
