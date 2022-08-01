import React from 'react';
import './Loading.css'
import icon from '../../Assets/9.png'

const Loading = () => {
    return (
        <div className='bg-liteDarkBg min-h-[100vh] flex justify-center items-center'>
            <span className='imgIcon text-white text-lg font-bold'> <img src={icon} alt="icon" className='w-10 inline-block' /> Collective Minds </span>
        </div>
    );
};

export default Loading;