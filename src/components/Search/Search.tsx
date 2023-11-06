"use client";

import { KeyboardEventHandler, useState } from "react";
import { Search } from "lucide-react";

import { useRouter } from "next/navigation";

export default function SearchMovie() {
  const [value, setValue] = useState("");

  const ENTER_KEY = 13;

  const { push } = useRouter();

  const handleClick = () => {
    push(`/search/${value}`);
    setValue("");
  };

  const onKeyDown = (event: KeyboardEventHandler<HTMLInputElement>) => {
    if (event.which === ENTER_KEY) {
      handleClick();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Movie..."
        className="outline-none border-none rounded-none bg-none focus:outline-none pl-2 text-black w-full"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        onKeyDown={onKeyDown}
      />
      <button
        className="outline-none bg-none border-none"
        onClick={handleClick}
      >
        <Search color="black" />
      </button>
    </>
  );
}
