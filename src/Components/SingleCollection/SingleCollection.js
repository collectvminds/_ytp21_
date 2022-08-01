import React, { memo, useState, useEffect } from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import './SingleCollection.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { cost } from '../Config/Config'
import { nftContractAddress } from '../Config/Config'
import { ethers } from 'ethers';

const contractABI = require("../Abi/abi.json");

const SingleCollection = ({ data }) => {
    
    const infuraId = process.env.INFURA_ID;
    const navigate = useNavigate()
    const navigateArt = (id) => {
        navigate(`/YTP21/assets/nft/${id}`)
    }
        
        const [isAvailable, setIsAvailable] = useState([]);

        useEffect(() => {
            const provider = new ethers.providers.InfuraProvider("homestead", infuraId);
            const contract = new ethers.Contract(
            nftContractAddress,
            contractABI,
            provider
            );

            async function handleCheck() {
            var result = await contract.isContentOwned(data[0].id);
            setIsAvailable((isAvailable) => [...isAvailable, result])
            var result1 = await contract.isContentOwned(data[1].id);
            setIsAvailable((isAvailable) => [...isAvailable, result1])
            var result2 = await contract.isContentOwned(data[2].id);
            setIsAvailable((isAvailable) => [...isAvailable, result2])
            };    
            handleCheck()
            setIsAvailable([]);
            
        },[data])

        return (
            <div className='collectionCardWrapper'>
                <div className="flag py-8">
                    <img src={data[0].flag} className="inline-block laptop:w-[5%] desktop:w-[5%] mobile:w-[15%] rounded-md shadow-md mr-5" alt="flag" />
                    <p className='text-Dark text-xl font-bold inline'>{data[0].name}</p>
                </div> 
                <div className="collectionImages grid laptop:grid-cols-3 desktop:grid-cols-3 mobile:grid-cols-1 mobile:gap-y-6 laptop:gap-x-9 desktop:gap-x-9">
            
                    {data.map((img, index) => {
    
                        return (
                            <>
                                <div className="card card-compact rounded-lg items-center shadow-md cursor-pointer transition-all ease-in-out duration-300 hover:shadow-md text:Dark" onClick={() => navigateArt(img.id)}>
                                    <div className="imgContainer mx-auto">
                                        <LazyLoadImage
                                            alt={"artImages"}
                                            effect="blur"
                                            src={img.thumbnail}
                                            threshold={500}
                                            loading="lazy"
                                            className='artImages w-full'
                                        />
                                    </div>
                
                                    <div className="card-actions mt-1 gap-7 font-light text-Dark">
                                        <p className='text-sm text-Dark justify-start '>ID: {img.id}</p>
                                        <p className='text-sm text-Dark justify-center '>Style: {img.AI_Prompt}</p>
                                        <p className='text-sm text-Dark justify-wnd '>Price:  {cost} ETH</p>

                                    </div>
                                    <button type="button" className="w-15 rounded-lg text-Dark focus:outline-none text-sm font-bold px-2 py-1 border-0 border-Dark text-center mr-0 mb-0 transition-all ease-in-out duration-300 hover:bg-Dark hover:text-white">
                                            {isAvailable[index] ? "Details" : "Buy"}
                                        </button>  
                                </div>
                                
                            </>
                        )
                    })}
                </div>
            </div>
        );
    };
    export default trackWindowScroll(memo(SingleCollection));