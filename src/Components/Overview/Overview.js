import React from 'react';
import './Overview.css'
import Art from './Art/Art';
import { useNavigate } from 'react-router-dom';


const Overview = ({ overviewData }) => {

    const navigate = useNavigate()

    return (
        <div className='bg-white py-20 min-h-[80vh]' id='overview'>


            <div className="overViewWrapper px-5 max-w-[1400px] mx-auto ">

                <div className="overViewContent grid mobile: gap-y-2 laptop:gap-x-2 desktop:gap-x-2 grid-cols-12 mobile:overflow-hidden">


                    <div className="aboutContent laptop:col-span-12 desktop:col-span-12 mobile:col-span-12 flex flex-col text-center" data-aos="fade-right">
                        <div className="grid grid-rows-1">
                            <p className='text-Dark text-4xl font-bold pt-10'>Collection highlights</p>
                            <p className='text-Dark text-xl font-normal pt-3'>These are the images created for {overviewData[0]?.name.slice(0,-8)}.</p>
                            <p className='text-Dark text-xl font-normal pt-1'>In total, 250 countries and territories are represented in the collection.</p>
                        </div>
                    </div>


                    <div className="aboutImg py-20 laptop:col-span-12 desktop:col-span-12 mobile:col-span-12" data-aos="fade-left">


                        <div className="country flex laptop:flex-row desktop:flex-row mobile:flex-col items-center mobile:items-start mb-0">
                            <img src={overviewData[0]?.flag} className="w-20 rounded-md desktop:ml-10 tablet:ml-10 mr-5 mobile:ml-1 desktop:mb-0 tablet:mb-0 mobile:mb-5" alt="countryFlag" />
                            <p className='text-Dark text-xl font-normal'>{overviewData[0]?.description}</p>

                        </div>
                        
                        <div className="artImg w-full flex laptop:flex-row desktop:flex-row mobile:flex-col justify-center items-center  ">

                            {
                                overviewData?.map((data) => {
                                    return (
                                        <>

                                            <Art
                                                key={data.id}
                                                art={data}
                                            />
                                            
                                        </>
                                    )
                                })
                            }

                        </div>
                        <br/> <br/>
                        <button type="button" className="w-70 rounded-lg block laptop:ml-auto desktop:ml-auto mobile:mx-auto text-Dark focus:outline-none text-lg font-bold px-5 py-2.5 border-2 border-Dark text-center mr-2 mb-2 transition-all ease-in-out duration-300 hover:bg-Dark hover:text-white" onClick={() => navigate('/collections')}>Explore collection</button>


                    </div>

                </div>

            </div>
        </div >
    );
};

export default Overview;


