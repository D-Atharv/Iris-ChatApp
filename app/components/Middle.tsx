// import React from 'react';
// import Middle_Names from './Middle_Names';

// const Middle = () => {
//     const names = ['John', 'Jane', 'Doe', 'Atharv', 'James'];
//     const containerStyle: React.CSSProperties = {
//         maxHeight: '424px',
//         overflowY: names.length > 4 ? 'scroll' : 'hidden',
//     };

//     return (
//         <div className='p-4 py-8 pb-10 bg-c_line_gray'>
//             <div className='w-full bg-c_black rounded-xl shadow-c_blue shadow-md lg:w-2/5 hide-scrollbar'
//                 style={containerStyle}>
//                 {names.map((name, index) => (
//                     <Middle_Names key={index} name={name} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Middle;


import React from 'react';
import Middle_Names from './Middle_Names';

interface MiddleProps {
    className?: string;
}

const Middle: React.FC<MiddleProps> = ({ className }) => {
    const names = ['John', 'Jane', 'Doe', 'Atharv', 'James'];
    return (
        <div className={`p-4 py-8 pb-10 bg-c_line_gray ${className}`}>
            <div className="w-full bg-c_black rounded-xl shadow-c_blue shadow-md lg:w-2/5 hide-scrollbar overflow-y-auto">
                {names.map((name, index) => (
                    <Middle_Names key={index} name={name} />
                ))}
            </div>
        </div>
    );
}

export default Middle;


