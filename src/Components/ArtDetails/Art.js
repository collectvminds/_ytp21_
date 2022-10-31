import React from 'react';
import './Art.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { artContext } from '../Context/ArtContext';
import Navbar from '../Navbar';
import Loading from '../Loading/Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cost } from '../Config/Config';
import { ChainContext } from '../Context/BlockchainContext';
import { nftContractAddress } from '../Config/Config'
import { ethers } from 'ethers';


const contractABI = require("../Abi/abi.json");

const Art = () => {

    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const { findDataById, loading: contextLoading } = useContext(artContext)
    const [notSold, setNotSold] = useState([]);
    const [link, setLink] = useState('');

    const { handlePurchase } = useContext(ChainContext)
    const infuraId = process.env.INFURA_ID;

    useEffect(() => {
        const provider = new ethers.providers.InfuraProvider("homestead", infuraId);
            const contract = new ethers.Contract(
            nftContractAddress,
            contractABI,
            provider
            );

        async function handleCheck() {
            var result = await contract.isContentOwned(id);
            setNotSold(result);
            setLink("https://opensea.io/assets/ethereum/0x6b5ccc5eb0647b85c195d10d33c1fe0603987418/" + id);
        }
        handleCheck();


        window.scrollTo({
            top: 0,
            behavior: 'auto'
          });
        setLoading(true)
        setData(findDataById(id))
        setLoading(false)
        console.log(id);
        setNotSold([])
    }, [findDataById, id])


    if (loading || contextLoading || data?.length === 0) {
        return <Loading />
    }
 

    return (
        <div className="artwrapper text-Dark bg-white">
            <div className="navbar text-white bg-deepDarkBg">
                <Navbar />
            </div>
            <div className="content overflow-hidden mobile:pt-20 tablet:pt-20 desktop:pt-36 mx-auto max-w-[1000px] ">
               <div className="art w-full overflow-x-hidden grid gap-5 laptop:grid-cols-1 desktop:grid-cols-1 mobile:grid-cols-1 mobile:px-4">
                    {/* <img  /> */}

                    <div className="contryname flex flex-col">
                        <div className="flag flex flex-row items-center">
                            <img src={data?.flag} className="rounded-md shadow-md w-[80px] mobile:w-[40px] inline-block mr-5" alt="flag" />
                            <p className='desktop:text-3xl laptop:text-xl mobile:text-base font-black text-Dark '>{data?.name}</p>
                        </div>
                        <div className="des">
                            <p className='text-xl mobile:text-sm font-normal text-Dark pt-1'>{data?.description}</p>
                        </div>
                    </div>

                    <div className="Art_img">
                            <LazyLoadImage
                                src={data?.image}
                                className="block w-full mx-auto"
                                alt="artImg"
                                loading="lazy"
                                data-aos="fade-right"
                                position="absolute"

                            />
                    </div>

                    
                    <div className="artPrice flex flex-row justify-between items-center text-Dark" >
                    {notSold ? <a className="w-15 rounded-lg focus:outline-none text-sm font-bold px-5 py-2.5 border-2 border-Dark text-center mr-2 mb-2 transition-all ease-in-out duration-300 hover:bg-Dark hover:text-white"
                        href={link} target="_blank" rel="noopener noreferrer">
                        View on Opensea
                        </a> : ""}
                        
                    </div>
                
{/*
                    <div className="artPrice flex flex-row justify-between items-center text-Dark" >
                    {notSold ? <a className="w-15 rounded-lg focus:outline-none text-sm font-bold px-5 py-2.5 border-2 border-Dark text-center mr-2 mb-2 transition-all ease-in-out duration-300 hover:bg-Dark hover:text-white"
                        href={link} target="_blank" rel="noopener noreferrer">
                        Buy on Opensea
                        </a> : <button type="button" className="w-15 rounded-lg focus:outline-none text-sm font-bold px-5 py-2.5 border-2 border-Dark text-center mr-2 mb-2 transition-all ease-in-out duration-300 hover:bg-Dark hover:text-white"
                            onClick={() => handleBuy()}
                        >
                            Buy
                        </button>}
                        
                    </div>
    */}
                    <p className='text-2xl font-bold text-Dark'>Attributes</p>
                    <hr />
                    <div className="attributes uppercase grid laptop:grid-cols-2 desktop:grid-cols-2 mobile:grid-cols-1 overflow-hidden pb-40">

                        <div className="left text-Dark">
                            <p className='text-xs font-normal pt-3'>id:</p>
                            <p className='text-xl font-bold'>{data?.id}</p>
                           {/*} <p className='text-xs font-normal pt-3'>PRICE:</p>
                            <p className='text-xl font-bold'>{cost} ETH</p> */}
                            <p className='text-xs font-normal pt-3'>AI PROMPT:</p>
                            <p className='text-xl font-bold'>{data?.AI_Prompt}</p>
                            <p className='text-xs font-normal pt-3'>DEPENDENCY / TERRITORRY / PART OF:</p>
                            <p className='text-xl font-bold'>{data?.Territory?.Dependency?.PartOf}</p>
                        </div>
                        <div className="right text-Dark">
                            <p className='text-xs font-normal pt-3'>Region:</p>
                            <p className='text-xl font-bold'>{data?.Region}</p>
                            <p className='text-xs font-normal pt-3'>Subregion:</p>
                            <p className='text-xl font-bold'>{data?.Subregion}</p>
                            <p className='text-xs font-normal pt-3'>sub-subregion:</p>
                            <p className='text-xl font-bold'>{data?.Sub_subregion}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Art;