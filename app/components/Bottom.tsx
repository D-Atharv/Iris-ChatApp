// import React from 'react';
// import Image from 'next/image';
// import chat_icon from '../../public/images/chats.svg';
// import user from '../../public/images/user.svg';
// import calls from '../../public/images/calls.svg';

// const Bottom = () => {
//     return (
//         <div className='p-4 pt-0 w-full '>
//             <div className=' bg-c_black h-20 sm:h-26 rounded-xl shadow-md shadow-c_blue flex items-center justify-around lg:w-2/5'>
//                 <div className='flex flex-col items-center'>
//                     <Image src={chat_icon} alt="chat" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                     <p className='text-white'>Chat</p>
//                 </div>
//                 <div className='flex flex-col items-center'>
//                     <Image src={calls} alt="calls" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                     <p className='text-white'>Calls</p>
//                 </div>
//                 <div className='flex flex-col items-center'>
//                     <Image src={user} alt="user" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
//                     <p className='text-white'>Profile</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Bottom;

import React from 'react';
import Image from 'next/image';
import chat_icon from '../../public/images/chats.svg';
import user from '../../public/images/user.svg';
import calls from '../../public/images/calls.svg';

const Bottom = () => {
    return (
        <div className='px-4 pb-4'>
            <div className='flex-none '>
                <div className='bg-c_black h-20 sm:h-26 rounded-xl shadow-md shadow-c_blue flex items-center justify-around lg:w-2/5'>
                    <div className='flex flex-col items-center'>
                        <Image src={chat_icon} alt="chat" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
                        <p className='text-white'>Chat</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={calls} alt="calls" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
                        <p className='text-white'>Calls</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={user} alt="user" height={25} width={20} className='w-8 h-7 p-1 border-2 rounded-xl border-c_line_gray' />
                        <p className='text-white'>Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bottom;

