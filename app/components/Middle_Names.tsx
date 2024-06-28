import React from 'react';
import Image from 'next/image';
import search_icon from "../../public/images/search_icon.svg";

type Props = {
    name: String,
}

const Middle_Names = (props: Props) => {
    return (
        <div>
            <div className='p-4 border-b-2 border-c_line_gray shadow-sm shadow-c_line_gray'>
                <div className='flex gap-4 border-b-2 shadow-slate-50 shadow-sm p-2 rounded-xl'>
                    <Image src={search_icon} alt="Image" height={25} width={20} className='w-20 h-14 p-1 border-2 rounded-xl border-c_line_gray' />
                    <div className='w-full flex justify-between'>
                        <p className='text-white'>Name</p>
                        <div>
                            <p className='text-white'>Message</p>
                            <p className='text-white'>Date</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Middle_Names;

