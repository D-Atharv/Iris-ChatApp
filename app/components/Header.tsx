// import React from "react";
// import Image from "next/image";
// import iris_log from "../../public/images/iris_logo.svg";
// import v_ellipsis from "../../public/images/v_ellipsis.svg";

// const People = () => {
//     return (
//         <div className="border-2 border-c_blue flex flex-col">
//             <div className="px-2 pt-4">

//                 <div className="p-2 bg-c_line_gray ">
//                     <header className="flex h-14 bg-custom-linear-gradient  items-center justify-between p-2 px-3 rounded-md shadow-sm shadow-c_blue" >
//                         <div className="flex justify-start items-center gap-5 px-5">
//                             <p className="text-white font-semibold text-2xl">Iris</p>
//                             <Image src={iris_log} alt="Iris logo" className="w-8 h-8"></Image>
//                         </div>
//                         <Image src={v_ellipsis} alt="list" className="w-5 h-5 lg:hidden"></Image>
//                         {/* <button type="button" className="text-white hidden lg:flex lg:font-semibold lg:text-2xl">Add Number</button> */}
//                     </header >
//                 </div >
//             </div>
//         </div>

//     );
// };

// export default People;


import React from "react";
import Image from "next/image";
import iris_log from "../../public/images/iris_logo.svg";
import v_ellipsis from "../../public/images/v_ellipsis.svg";

const Header = () => {
    return (
        <div className="flex-none">
            <header className="flex h-14 bg-custom-linear-gradient items-center justify-between p-2 px-3 rounded-md shadow-sm shadow-c_blue">
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


