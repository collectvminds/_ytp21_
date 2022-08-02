import React from 'react';
import './Banner.css'
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import v1 from "../../Assets/videos/v01.mp4";
import v2 from "../../Assets/videos/v02.mp4";
import v3 from "../../Assets/videos/v03.mp4";
import v4 from "../../Assets/videos/v04.mp4";
import v5 from "../../Assets/videos/v05.mp4";
import v6 from "../../Assets/videos/v06.mp4";
import v7 from "../../Assets/videos/v07.mp4";
import v8 from "../../Assets/videos/v08.mp4";
import v9 from "../../Assets/videos/v09.mp4";
import v10 from "../../Assets/videos/v10.mp4";


const Banner = () => {

    const navigate = useNavigate()
    const videos = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10];
    const [current, setCurrent] = React.useState(0);

    const handleVideoEnded = () => {
        setCurrent(current < 9 ? current + 1 : 0)
        
      };


    return (
        <div className='bannar-wrapper text-white bg-deepDarkBg'>
            <Navbar />
            

            <video className='bannerVideo' src={videos[current]} onEnded={handleVideoEnded}
                        autoPlay muted playsInline></video>

            <div className="hero min-h-[100vh] max-h-auto">
                <div className="hero-content py-10 max-w-[800px] desktop:left-96">
                    <div className='mobile:pt-10 laptop:pt-20' data-aos="fade-up">
                        <h1 className="laptop:text-4xl desktop:text-5xl mobile:text-3xl font-bold">The world,
                            <br />imagined ​by AI.</h1>

                        <p className="pt-20 laptop:text-2xl desktop:text-2xl mobile:text-xl font-light">
                            In December 2021 we asked an artificial intelligence to create art
                            representing its own thoughts on humanity's sentiment.  
                        </p>

                        <p className="py-20 laptop:text-2xl desktop:text-2xl mobile:text-xl font-light">
                             These historic images of our world are now available as the digital art collection "You, the People!". 
                        </p>

                        <button type="button" className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-2.5 border-2 border-white rounded-lg hover:bg-white hover:text-deepDarkBg"
                            onClick={() => navigate('/collections')}
                        >Explore collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;