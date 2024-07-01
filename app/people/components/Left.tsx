import React from "react";
import Image from "next/image";
import search_icon from "../../../public/images/search_icon.svg";

const Left = () => {
    return (
        <div className="  bg-c_line_gray h-full">
            <div className=" ">
                <div className="px-2 xl:px-4 pt-3 xl:pt-3  ">
                    <form className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Image src={search_icon} alt="Search" width={15} height={15} />
                        </div>
                        <input
                            type="search"
                            placeholder="Search"
                            className=" pl-10  bg-c_black w-full  p-2   xl:pl-10 pr-4 rounded-md shadow-sm shadow-c_blue text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Left;