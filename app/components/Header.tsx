import React from "react";
import Image from "next/image";
import iris_log from "../../public/images/iris_logo.svg";
import v_ellipsis from "../../public/images/v_ellipsis.svg";

const People = () => {
    return (
        <>
            <div className="p-2 bg-c_line_gray">
                <header className="flex bg-c_blue items-center justify-between p-2 px-3 rounded-md border-4 border-blue-600" >
                    <Image src={iris_log} alt="Iris logo" className="w-5 h-5"></Image>
                    <Image src={v_ellipsis} alt="list" className="w-5 h-5"></Image>
                </header >
            </div >
        </>
    );
};

export default People;
