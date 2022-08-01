import React from 'react';
import './Team.css'
import Navbar from '../Navbar';
import avatar from '../../Assets/avatar.png'
import twitter from '../../Assets/twitter_w.png'
import linkedin from '../../Assets/linkedin.png'
import tech from '../../Assets/tech.png'

const Team = () => {

    return (

        <div className='teamwrapper text-white bg-team'>
            <Navbar />        
            <div className="mobile:pt-40 tablet:pt-40 desktop:pt-60 mobile:px-10 mx-auto max-w-[960px]">
                <div className="content" data-aos="fade-left">
                    <div className="content grid laptop:grid-cols-1 desktop:grid-cols-1 mobile:grid-cols-1 mobile:overflow-hidden" >
                        <div className="right flex flex-col justify-start items-left " data-aos="fade-up" >
                            <div className="grid grid-rows-1">
                                <p className='text-white text-4xl font-extrabold py-5 '>The team</p>
                            </div>
                            <div className="contentText text-white flex flex-col justify-start items-left">
                                <img class="mb-6 w-20" src={avatar} alt="avatar"/>
                                <h5 class="text-lg font-bold mb-4">Fabio Hofer</h5>
                                <ul class="list-inside flex">
                                    <a href="https://twitter.com/FabioHofer" target="_blank" rel="noopener noreferrer" class="px-2">
                                        <img src={twitter} className='w-6' alt="twitter"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/fabiohofer/" target="_blank" rel="noopener noreferrer" class="px-2">
                                        <img src={linkedin} className='w-6' alt="avatar"/>
                                    </a>
                                </ul>
                                <p className=' text-white text-xl text-left my-3'>Fabio Hofer is an Oxford graduate in Software Engineering with extensive experience in software development and product management. In 2021 he founded collective Minds to create solutions for the blockchain and artificial intelligence markets. His interest in concepts of the collective unconscious by Carl Jung, the Zeitgeist from 18th Century German Philosophy and the Akashic Record by the ancient Hindu sages of the Himalayas gave origin to the NFT collection You, The People!</p>

                            </div>
                            <p className='text-white text-4xl font-extrabold pt-24'>Our technology</p>
                            <img className="pt-10 mb-6 mx-auto w-4/5" src={tech} alt="tech"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;