// import React from 'react'

// const Header = () => {
//     return <div className="text-white p-4">Header</div>;

// }

// export default Header

import React from "react";
import Image from "next/image";
import iris_log from "../../../public/images/iris_logo.svg"
import v_ellipsis from "../../../public/images/v_ellipsis.svg";

const Header = () => {
    return (
        <div className=" p-2 px-2 xl:px-4 h-full bg-c_line_gray ">
            <header className="flex items-center xl:pl-3 bg-custom-linear-gradient justify-between p-2 px-3 rounded-md shadow-sm shadow-c_blue">
                <div className="flex justify-start items-center gap-5 px-5">
                    <p className="text-white font-semibold text-2xl">Iris</p>
                    <Image src={iris_log} alt="Iris logo" className="w-8 h-8" />
                </div>
                <Image src={v_ellipsis} alt="list" className="w-5 h-5 lg:hidden" />
            </header>
        </div>
    );
};

export default Header;