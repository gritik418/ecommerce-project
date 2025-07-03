import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/?search=${searchQuery}`);
      inputRef.current?.blur();
    }
  };
  return (
    <div className="flex border h-12 px-4 w-full sm:w-[350px] border-white/50 rounded-lg items-center gap-4">
      <Search className="text-white" />
      <input
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        className="placeholder:text-white grow text-white font-medium outline-none placeholder:font-medium"
        placeholder="Search for products... "
      />
    </div>
  );
};

export default SearchBar;
