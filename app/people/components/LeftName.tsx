// // import React from 'react';
// // import Middle_Names from './Middle_Names';

// // interface MiddleProps {
// //     className?: string;
// // }

// // const LeftName: React.FC<MiddleProps> = ({ className }) => {
// //     const names = ['John', 'Jane', 'Doe', 'Atharv'];
// //     return (

// //         <div className={`border-2 flex container mx-auto items-center px-2  bg-c_line_gray border-violet-900 h-full ${className}`}>
// //             <div className="  bg-c_black px-4 py-0  shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto" >
// //                 {names.map((name, index) => (
// //                     <Middle_Names key={index} name={name} />
// //                 ))}
// //             </div>
// //         </div>

// //     );
// // }

// // export default LeftName;

// import React from 'react';
// import Middle_Names from './Middle_Names';

// interface MiddleProps {
//     className?: string;
// }

// const LeftName: React.FC<MiddleProps> = ({ className }) => {
//     const names = ['John', 'Jamie', 'Doe', 'Atharv', 'James'];
//     const maxVisibleNames = 5;
//     const nameHeight = 85; // Adjust this value to match the height of each name component in pixels

//     // Calculate the max height dynamically
//     const maxHeight = names.length <= maxVisibleNames ? names.length * nameHeight : maxVisibleNames * nameHeight;

//     return (
//         <div className={`flex container mx-auto items-center px-2 bg-c_line_gray h-full ${className}`}>
//             <div
//                 className="bg-c_black px-4 py-0 shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto"
//                 style={{ maxHeight: `${maxHeight}px` }}
//             >
//                 {names.map((name, index) => (
//                     <Middle_Names key={index} name={name} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default LeftName;


'use client'

import React, { useEffect, useState } from 'react';
import Middle_Names from './Middle_Names';

interface MiddleProps {
    className?: string;
}

const LeftName: React.FC<MiddleProps> = ({ className }) => {
    const names = ['John', 'Jamie', 'Doe', 'Atharv', 'James'];
    const nameHeight = 85; // Adjust this value to match the height of each name component in pixels

    // State to hold the max number of visible names
    const [maxVisibleNames, setMaxVisibleNames] = useState(4);

    // Function to update maxVisibleNames based on screen size
    const updateMaxVisibleNames = () => {
        if (window.innerWidth >= 640) { // 'xl' breakpoint
            setMaxVisibleNames(5);
        } else {
            setMaxVisibleNames(5);
        }
    };

    // Use useEffect to add event listener on mount and clean up on unmount
    useEffect(() => {
        updateMaxVisibleNames();
        window.addEventListener('resize', updateMaxVisibleNames);
        return () => {
            window.removeEventListener('resize', updateMaxVisibleNames);
        };
    }, []);

    // Calculate the max height dynamically
    const maxHeight = names.length <= maxVisibleNames ? names.length * nameHeight : maxVisibleNames * nameHeight;

    return (
        <div className={`flex container mx-auto items-center px-2 bg-c_line_gray h-full ${className}`}>
            <div
                className="bg-c_black px-4 py-0 shadow-md shadow-c_blue flex-grow rounded-xl hide-scrollbar overflow-y-auto"
                style={{ maxHeight: `${maxHeight}px` }}
            >
                {names.map((name, index) => (
                    <Middle_Names key={index} name={name} />
                ))}
            </div>
        </div>
    );
}

export default LeftName;
