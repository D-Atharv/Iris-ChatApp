'use client';

import React, { useEffect, useState } from 'react';
import styles from './Right.module.css';

const Right = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // Check for lg screen size (1024px)
        };

        // Initial check on component mount
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${isLargeScreen ? styles.relative : ''} text-white lg:bg-c_gray lg:w-[860px] lg:min-h-[624px] lg:rounded-xl lg:shadow-md lg:shadow-c_blue lg:p-4`}>
            <p className='hidden lg:block'>Your content here</p>
        </div>
    );
};

export default Right;
