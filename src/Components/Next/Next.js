import React from 'react';
import './Next.css'
import { useNavigate } from 'react-router-dom';


const Next = () => {
    const navigate = useNavigate()
    return (
        <div className='nextBg bg-hero bg-cover pb-20 mx-auto' id='plan'>
            <div className="nextContent max-w-[960px] mx-auto">
                <div className="title px-4 py-10 text-left mx-auto">
                    <p className='text-white text-4xl font-extrabold my-5 text-left'>
                        Roadmap</p>
                </div>

                <div className="nextContent">
                    <div className="nextText flex pb-16">
                        <p className='text-white text-left font-light text-xl px-6' data-aos="fade-up">AI is evolving at a very rapid pace, with new architectures and models emerging on a weekly basis. <br /> 
                        <br/> We are continuously evaluating the state-of-the-art of AI and will launch new editions of "You, the People!" that will reflect the changes in technology and people's sentiment around the world. <br /> 
                        <br/> Our objective is to understand the evolving perception that AI has of our world and make representations of this perception available to everyone. <br />
                        <br/> Creating AI art is a fun way to explore human bias within AI algorithms. We will publish artwork created by artists in different countries alongside AI created art, both meant to represent the ideas and beliefs of people around the world, and will provide a forum to discuss their similarities and differences.<br/>
                        <br/> We are also reaching out to charities in the development world and facilitating our patrons involvement with local artists, volunteering and charity work.
                        </p>
                    </div>
                </div>

                <div className="nextContent px-10">
                    <ol class="relative border-l border-gray-200 dark:border-gray-700 text-white">
                        <li class="mb-10 ml-4  ">
                            <div class="absolute w-3 h-3 bg-lightGray rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none">Q3 2022</time>
                            <h3 class="text-lg font-semibold ">You, the people! 2021 launch</h3>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">VQGAN+CLIP images, smart contract, website, social media and Opensea</p>
                        </li>
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-lightGray rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Q2 2023</time>
                            <h3 class="text-lg font-semibold ">You, the people! 2022 launch</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">DALL.E-2 images, smart contract supports charities with donations and split sales commissions</p>
                        </li>
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-lightGray rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Q4 2023</time>
                            <h3 class="text-lg font-semibold ">Patrons area in the website</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Patrons have early access to upcoming collections</p>
                        </li>
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-lightGray rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Q1 2024</time>
                            <h3 class="text-lg font-semibold ">Beyond AI art</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Launch of digital gallery for artists in the developing world to publish and sell their art</p>
                        </li>
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-lightGray rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Q2 2024</time>
                            <h3 class="text-lg font-semibold ">You the people 2023 launch</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Pre-sale for patrons, collection brings a combination of art produced by AI and local artists</p>
                        </li>
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-lightGray rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Q3 2024</time>
                            <h3 class="text-lg font-semibold ">Charity and volunteering hub</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Exciting opportunities to get involved with art and help those in need all over the world</p>
                        </li>
                    </ol>
                </div>
                {/*
                <div className="image-container pt-20">
                            <button type="button" className="w-70 text-lg font-bold bg-Yellow text-center mr-2 mb-2 px-5 py-2.5 rounded-lg hover:bg-Blue hover:text-white"
                                onClick={() => navigate('/ukraine')}
                            >Our currenty charity campaign</button> 
                        </div>
                */}
            </div>
        </div>
    );
};

export default Next;