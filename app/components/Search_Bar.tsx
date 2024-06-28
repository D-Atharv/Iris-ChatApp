import React from "react";
import Image from "next/image";
import search_icon from "../../public/images/search_icon.svg";

const Search_Bar = () => {
    return (
        <div className="px-2">
            <div className="w-full p-2 bg-c_line_gray">
                <form className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Image src={search_icon} alt="Search" width={15} height={15} />
                    </div>
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full bg-c_gray p-2 pl-10 pr-4 rounded-md shadow-sm shadow-c_blue text-white"
                    />
                </form>
            </div>
        </div>
    );
};

export default Search_Bar;
