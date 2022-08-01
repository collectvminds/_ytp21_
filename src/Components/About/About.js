import React from 'react';
import './About.css';
import whitepaper from '../../Assets/whitepaper.pdf'




const About = ({ overviewData }) => {

    return (


        <div className='bg-hero-about bg-cover py-20 mx-auto' id='aboutUs'>

            <div className="aboutWrapper px-10 mx-auto max-w-[960px]" >
                <div className="aboutContent" data-aos="fade-left">

                    <div className="grid grid-cols-1 w-full pb-2 px-1 ">
                        <p className='text-white text-4xl font-extrabold my-5 text-left '>About You, the People!</p>
                    </div>

                    <p className='text-white font-light mb-3 text-xl text-left'>
                        For the first time in history it's possible to request an AI to create original, realistic images from a natural language prompt.
                        <br /> <br /> <br />
                        The "You, the People!" collection was created by giving this AI three styles of prompts
                        and asking it to create images from these prompts for every country in the world. <br />
                    </p>

                    <div className="steps p-1 flex laptop:flex-row desktop:flex-row mobile:flex-col items-center justify-center">
                        <div className="card card-1 bg-white border-0">
                            <div className="card-body text-center -space-y-10">
                                <p className="text-deepDarkBg text-xs font-normal">AI PROMPT</p>
                                <p className="text-deepDarkBg text-4xl font-bold">AR</p>
                                <p className='text-deepDarkBg'>The sentiment in the country in contemporary art style</p>
                            </div>
                        </div>
                        <div className="card card-2 bg-white border-0 laptop:mx-10 desktop:mx-10 mobile:my-10">
                            <div className="card-body text-center -space-y-10">
                                <p className="text-deepDarkBg text-xs font-normal">AI PROMPT</p>
                                <p className="text-deepDarkBg text-4xl font-bold ">3D</p>
                                <p className='text-deepDarkBg'>The sentiment in the country in 3D digital art style</p>
                            </div>
                        </div>
                        <div className="card card-3 bg-white border-0">
                            <div className="card-body text-center -space-y-10">
                                <p className="text-deepDarkBg text-xs font-normal">AI PROMPT</p>
                                <p className="text-deepDarkBg text-4xl font-bold ">A3</p>
                                <p className='text-deepDarkBg'>The sentiment in the country combining 3D and contemporary art styles</p>
                            </div>
                        </div>
                    </div>

                    <p className='text-white font-light mb-3 text-xl text-left'> <br />
                        The AI was able to identify with surprising accuracy a number of social issues in many countries despite not being specifically trained on the subject.<br /> <br />
                        It recognized authoritarianism, climate change, pollution, wild fires and the rise of sea levels along with other events that occur frequently around the world such as over-tourism or social divide between people. <br/> <br/>
                        The images in the collection have historical significance, as they were created right at the end of the longest period of peace in Europe, when the world was just getting back to normal after the Covid-19 pandemic
                        and at a moment when AI had evolved just enough to represent its own insight into human condition.<br />
                    </p>


                    <div className="button flex justify-center items-center w-full pt-16 text-white">
                        <a rel='noreferrer' target={"_blank"} href={whitepaper}>
                         <button type="button" className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-2.5 border-2 border-white rounded-lg hover:bg-white hover:text-deepDarkBg" data-aos="fade-up">Whitepaper</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        
    );
};

export default About;