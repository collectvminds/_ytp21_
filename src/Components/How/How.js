import React from 'react';
import video from '../../Assets/video.mp4'
import Steps from '../Steps/Steps';

const How = () => {
    return (

        <div className='bg-white'  id='how'>

            <div className="mx-auto max-w-[900px] py-20 ">
                <p className='px-10 text-Dark text-4xl text-left font-bold'>Artificial imagination</p>

                <p className='pt-10 text-Dark px-10 font-normal text-left text-xl'>
                    This animation shows in a sequence the 300 iterations the AI went through to create an image showing the countryside in England.
                    <br/><br/>Press play to see it in action.</p>

                <div className="video px-10 pt-10">
                <video className="embed-responsive-item-16by9 rounded-lg w-800" controls preload disablepictureinpicture muted controlsList="nofullscreen nodownload noremoteplayback "
                        playsInline __idm_id__="450562" src={video} data-aos="fade-up"></video>
                </div>
                <Steps />

            </div>
        </div>

    );
};

export default How;