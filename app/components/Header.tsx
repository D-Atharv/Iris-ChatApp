// import React from "react";
// import Image from "next/image";
// import iris_log from "../../public/images/iris_logo.svg";
// import v_ellipsis from "../../public/images/v_ellipsis.svg";

// const People = () => {
//     return (
//         <>
//             <div className="px-2 pt-2 ">
//                 <div className="p-2 bg-c_line_gray">
//                     <header className="flex bg-c_black items-center justify-between p-2 px-3 rounded-md shadow-sm shadow-c_blue" >
//                         <div className="flex justify-start items-center gap-2">
//                             <p className="text-white">Iris</p>
//                             <Image src={iris_log} alt="Iris logo" className="w-5 h-5"></Image>
//                         </div>
//                         <Image src={v_ellipsis} alt="list" className="w-5 h-5"></Image>
//                     </header >
//                 </div >
//             </div>

//         </>
//     );
// };

// export default People;


import React from "react";
import Image from "next/image";
import iris_log from "../../public/images/iris_logo.svg";
import v_ellipsis from "../../public/images/v_ellipsis.svg";

const People = () => {
    return (

        <div className="px-2 pt-2 ">

            <div className="p-2 bg-c_line_gray ">
                <header className="flex bg-custom-linear-gradient  items-center justify-between p-2 px-3 rounded-md shadow-sm shadow-c_blue" >
                    <div className="flex justify-start items-center gap-2">
                        <p className="text-white">Iris</p>
                        <Image src={iris_log} alt="Iris logo" className="w-5 h-5"></Image>
                    </div>
                    <Image src={v_ellipsis} alt="list" className="w-5 h-5"></Image>
                </header >
            </div >
        </div>

    );
};

export default People;
