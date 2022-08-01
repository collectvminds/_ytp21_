import React from 'react';
import { Link } from 'react-router-dom';
import ig from '../../Assets/instagram.png'
import tw from '../../Assets/twitter_w.png'
import open from '../../Assets/opensea_w.png'
import dc from '../../Assets/discord.png'
import eth from '../../Assets/ethereum_w.png'
import logo from '../../Assets/9.png'
import whitepaper from '../../Assets/whitepaper.pdf'

const Footer = () => {
    return (
        <div className='bg-deepDarkBg py-14 min-h-[30vh]'>
            <div className="footerWrapper px-10 max-w-[1700px] mx-auto mobile:overflow-hidden ">

                <footer className="footer footer-center p-10 bg-transparent " data-aos="fade-up">

                    <img src={logo} className='w-10' alt="logo" />


                    <div className="grid laptop:grid-flow-col desktop:grid-flow-col mobile:grid-flow-row gap-4 text-white">
                        <Link to='/' className="link link-hover hover:text-primaryBg">Home</Link>                        
                        <Link to='/collections' className="link link-hover hover:text-primaryBg">Collection</Link>
                        <Link to='/#aboutUs' className="link link-hover hover:text-primaryBg">About</Link>
                        <Link to='/#plan' className="link link-hover hover:text-primaryBg">Roadmap</Link>
                        <Link to='/#donate' className="link link-hover hover:text-primaryBg">Get involved</Link>
                        <Link to='/team' className="link link-hover hover:text-primaryBg">The team</Link>
                        <a rel='noreferrer' target={"_blank"} href={whitepaper} className="link link-hover hover:text-white">Whitepaper</a>

                    </div>
                    <div>
                        <div className="grid grid-flow-col gap-4 text-white hover:cursor-pointer items-center">
                            <a href='https://twitter.com/collectvminds' target="_blank" rel="noopener noreferrer">
                                <img src={tw} className='w-6' alt="twitter" title='twitter'/>
                            </a>

                            <a href='https://opensea.io/collection/you-the-people' target="_blank" rel="noopener noreferrer">
                                <img src={open} className='w-6' alt="opensea" title='opensea'/>
                            </a>

                            <a href='https://www.instagram.com/collectvminds/' target="_blank" rel="noopener noreferrer">
                                <img src={ig} className='w-6' alt="instagram" title='instagram'/>
                            </a>

                            <a href='https://discord.gg/x6QFgg4tXB' target="_blank" rel="noopener noreferrer">
                                <img src={dc} className='w-6' alt="discord" title='discord'/>
                            </a>
                            <a href='https://etherscan.io/address/0x6b5ccc5eb0647b85c195d10d33c1fe0603987418' target="_blank" rel="noopener noreferrer">
                                <img src={eth} className='w-6' alt="etherscan" title='smart contract'/>
                            </a>
                            
                        </div>
                    </div>
                    <div>
                        <p className='text-textGray'>Copyright © collective Minds {new Date().getFullYear()} - we are one</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;