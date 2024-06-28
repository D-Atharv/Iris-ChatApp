import React from 'react';
import Middle_Names from './Middle_Names';

const Middle = () => {
    const names = ['John', 'Jane', 'Doe', 'Atharv', 'James'];
    const containerStyle: React.CSSProperties = {
        maxHeight: '424px',
        overflowY: names.length > 4 ? 'scroll' : 'hidden',
    };

    return (
        <div className='p-4 bg-c_line_gray pt-5'>
            <div
                className={`w-full bg-c_black rounded-xl shadow-c_blue shadow-md`}
                style={containerStyle}>
                {names.map((name, index) => (
                    <Middle_Names key={index} name={name} />
                ))}
            </div>
        </div>
    );
}

export default Middle;
