import React from 'react';
import './Ukraine.css'
import Navbar from '../Navbar';
import unhcr from '../../Assets/unhcr.png'



const UkraineBanner = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
<div>
        <div className='ukrainewrapper text-Dark bg-refugees'>
            <div className="navbar text-white">
                <Navbar />
            </div>    


            <div className="mobile:pt-60 tablet:pt-50 desktop:pt-60 mobile:px-10 mx-auto max-w-[900px]">
                <div className="content" data-aos="fade-left">
                        <div className="image-container">
                                <img class="desktop:w-36 mobile:w-24" src={unhcr} alt="unhcr"/>
                        </div>
                        <div class="box">
                            <p className='text-white desktop:text-3xl mobile:text-2xl font-extrabold text-center pt-10'>Ukraine Emergency Appeal</p>
                        </div>
                        <div class="box">
                            <p className='text-white desktop:text-xl mobile:text-base font-normal text-center pt-10'>Join us in a charity auction to raise funds for UK UNHCR’s Ukraine Emergency Appeal and support Ukrainian refugees and displaced families. </p>
                        </div> 
                        <div className="image-container pt-20">
                            <button type="button" className="w-70 text-lg font-bold bg-Yellow text-center mr-2 mb-2 px-5 py-2.5 rounded-lg hover:bg-Blue hover:text-white"
                                onClick={() => openInNewTab('https://opensea.io/collection/you-the-people?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[toggles][0]=ON_AUCTION')}
                            >View auction</button> 
                        </div>
                    </div>
                 </div>
        </div>
</div>
    );
};

export default UkraineBanner;