import React from 'react';
import Image from 'next/image';
import search_icon from "../../../public/images/search_icon.svg";

type MiddleNamesProps = {
    name: string;
};

const Middle_Names: React.FC<MiddleNamesProps> = ({ name }) => {
    return (

        <div className=" bg-c_black rounded-xl  my-4  shadow-sm shadow-c_white">
            <div className="flex items-center justify-between border-b-2 py-2  rounded-xl px-4">
                <div className="flex items-center">
                    <Image src={search_icon} alt="Image" height={25} width={20} className="w-16 h-12 mr-4 border-2  border-c_white rounded-xl " />
                    <p className=" text-white">{name}</p>
                </div>
                <div className="text-left text-white">
                    <p>Message</p>
                    <p>Date</p>
                </div>
            </div>
        </div>

    );
}

export default Middle_Names;
