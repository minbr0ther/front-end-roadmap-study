import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <header className="flex h-16 px-4 py-4 bg-black text-white">
      <div className="flex items-center mr-4">
        <img className="" src="/images/logo.png" alt="logo" />
        <h1 className="text-4xl font-bold">Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className="flex-grow text-lg text-black outline-none"
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button
        className="bg-gray-400 p-1 outline-none hover:opacity-90"
        type="submit"
        onClick={onClick}
      >
        <img className="h-full" src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
