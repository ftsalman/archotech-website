import React, { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { IconSearch } from "../../assets/icons/InterfaceIcons";
import { cn } from "../../utils/utils";

export const Searchbar = ({
  isSearchExpanded,
  setIsSearchExpanded,
  setSearchValue,
  searchValue,
  className,
}) => {
  const inputRef = useRef(null);

  const searchbarRef = useClickOutside(() => {
    if (!searchValue) {
      setIsSearchExpanded(false);
    }
  });

  const handleSearchExpand = () => {
    setIsSearchExpanded(true);
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
  };

  const handleKeyPressInSearchBar = (e) => {
    if (e.key === "Escape" && searchValue === "") {
      setIsSearchExpanded(false);
    }
  };

  return (
    <div ref={searchbarRef} className="relative w-full max-w-md mx-auto">
      {/* Input Field */}
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyPressInSearchBar}
        ref={inputRef}
        disabled={!isSearchExpanded}
        className={cn(
          `transition-all duration-300 ease-in-out 
          ${isSearchExpanded ? "pl-10" : "w-10 placeholder:opacity-0"}
          h-12 w-full  rounded-md border px-2 border-gray-200 bg-[#F7F7F7] 
          shadow-inner text-sm text-gray-800 outline-none`,
          className
        )}
      />

      {/* Search Icon Button */}
      <button
        onClick={handleSearchExpand}
        className={`absolute inset-y-0 left-0 w-10 flex items-center justify-center 
          ${
            isSearchExpanded
              ? "pointer-events-none text-gray-400"
              : "pointer-events-auto text-gray-600"
          }`}
      >
        <IconSearch size={18} />
      </button>
    </div>
  );
};
