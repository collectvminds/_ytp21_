import React from 'react';
import './Steps.css'
import logo1 from '../../Assets/31.png'
import logo2 from '../../Assets/29.png'
import logo3 from '../../Assets/30.png'

const Steps = () => {

    return (
        <>
            <div className=" howSteps mx-auto max-w-[800px] flex laptop:flex-row desktop:flex-row mobile:flex-col justify-evenly items-center" >
                <div className="card card-1 bg-white border-0" data-aos="fade-right">
                    <div className="card-body text-center" d>
                        <img src={logo1} className="block mx-auto w-10" alt="logo" />
                        <h2 className="text-deepDarkBg text-xl font-bold">Text prompt</h2>
                        <p className='text-deepDarkBg text-sm'>The sentence "The countryside in England in a sunny day with a castle in the background" was submitted to the AI.</p>
                    </div>
                </div>
                <div className="card card-2 bg-white border-0 laptop:mx-1 desktop:mx-1 mobile:my-1" data-aos="fade-right">
                    <div className="card-body text-center">
                        <img src={logo2} className="block mx-auto w-10" alt="logo" />
                        <h2 className="text-deepDarkBg text-xl font-bold ">Image seed</h2>
                        <p className='text-deepDarkBg text-sm'>The AI starts to work by generating a seed image that contains just noise - similar to what we see in our TV when it is receiving no signal.</p>
                    </div>
                </div>
                <div className="card card-3 bg-white border-0" data-aos="fade-right">
                    <div className="card-body text-center"  >
                        <img src={logo3} className="block mx-auto w-10" alt="logo" />
                        <h2 className="text-deepDarkBg text-xl font-bold ">Multiple Iterations</h2>
                        <p className='text-deepDarkBg text-sm'>The AI makes small changes to the image and asks itself "does it look like the text given to me?". This is iterated hundreds of times.</p>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Steps;