import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import React, { useContext, useEffect, useRef, useState } from 'react';
import logo from '../Assets/9.png'
import ig from '../Assets/instagram.png'
import wallet from '../Assets/wallet_w.png'
import dc from '../Assets/discord.png'
import tw from '../Assets/twitter_w.png'
import open from '../Assets/opensea_w.png'
import whitepaper from '../Assets/whitepaper.pdf'
import { Link } from 'react-router-dom';
import { ChainContext } from './Context/BlockchainContext';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';

const infuraId = process.env.INFURA_ID;

    const { chains, provider } = configureChains(
    [chain.mainnet],
    [infuraProvider({ infuraId }),publicProvider(),]
)
const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

export const YourApp = () => {
    return (
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          return (
            <div
              {...(!mounted && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!mounted || !account || !chain) {
                  return (
                  
                    <img src={wallet} className='laptop:w-6 desktop:w-6 mobile:w-3' onClick={openConnectModal} alt="wallet" title='wallet' />
                    
                  );
                }
  
                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }
  
                return (
                  <div style={{ display: 'flex', gap: 5 }}>
                    <button
                      onClick={openAccountModal}
                      style={{ display: 'flex', alignItems: 'center' }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 25,
                            height: 25,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 25, height: 25 }}
                            />
                          )}
                        </div>
                      )}
                      {/* {chain.name} */}
                    </button>
  
                    <button onClick={openAccountModal} type="button" className="text-xs font-light">
                      {/*{account.displayName}*/}
                       {account.displayBalance
                        ? `${account.displayBalance}`
                     : ''} 
                    </button> 
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    );
  };

const Navbar = () => {

    const [themeMenuOpened, setThemeMenuOpened] = useState(true);
    const themeMenu = useRef(null);
    const themeMenuButton = useRef(null);
    const [stickyClass, setStickyClass] = useState('bg-transparent');

    const { connectWallet } = useContext(ChainContext)

    const connectToWallet = () => {
        connectWallet()
    }



    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 10 ? setStickyClass('sticky z-10 bg-deepDarkBg') : setStickyClass('bg-transparent');
        }
    };

    useEffect(() => {
        if (!themeMenuOpened) {
            document.activeElement.blur();
        } else if (
            themeMenuOpened &&
            !themeMenu.current.contains(document.activeElement)
        ) {
            setThemeMenuOpened(false);

        }
    }, [themeMenuOpened]);

    


    return (
        <div className='navbarWrapper max-w-xs'>
            <div className={`navbar ${stickyClass} laptop:pl-30 mx-auto mobile:p-1 desktop:px-40 `}>
                <div className="navbar-start">
                    <div ref={themeMenu} className="dropdown">
                        <div className="content flex flex-row items-center">
                            <label ref={themeMenuButton}
                                onBlur={(e) => {
                                    setThemeMenuOpened(false);
                                }}
                                onClick={(e) => {
                                    if (themeMenuOpened) {
                                        setThemeMenuOpened(false);
                                    } else {
                                        setThemeMenuOpened(true);
                                    }
                                }}
                                tabIndex="0" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </label>

                            <div className="laptop:inline-block desktop:inline-block mobile:hidden  ">
                                <Link to={'/'} className="laptop:text-xl desktop:text-xl mobile:text-xs hover:bg-transparent">
                                    <span><img className='laptop:w-9 desktop:w-9 mobile:w-7 mr-2 inline-block' src={logo} alt="logo" srcSet="" /></span> 
                                </Link> collective Minds
                            </div>

                            <div className=" laptop:hidden desktop:hidden mobile:inline-block  ">
                                <Link to={'/'} className="">
                                    <img className='laptop:w-9 desktop:w-9 mobile:w-7 ml-2 inline-block' src={logo} alt="logo" srcSet="" />
                                </Link>
                            </div>

                        </div>

                        <ul
                            onBlur={(e) => {
                                themeMenuButton.current.focus();
                            }}
                            onFocus={(e) => {
                                setThemeMenuOpened(true);
                            }}
                            tabIndex="0" className="menu menu-vertical dropdown-content text-white mt-3 p-2 shadow bg-deepDarkBg rounded-box w-52  ">

                            <li className='hover:text-primaryBg'>
                                <Link to='/' className="link link-hover hover:text-white">Home</Link></li>

                            <li className='hover:text-primaryBg'>
                                <Link to='/collections' className="link link-hover hover:text-white">Collection</Link></li>

                            <li className='hover:text-primaryBg'>
                                <Link to='/#aboutUs' className="link link-hover hover:text-white">About</Link></li>

                            <li className='hover:text-primaryBg'>
                                <Link to='/#plan' className="link link-hover hover:text-white">Roadmap</Link></li>

                            <li className='hover:text-primaryBg'>
                                <Link to='/#donate' className="link link-hover hover:text-white">Get involved</Link></li>

                            <li className='hover:text-primaryBg'>
                            <Link to='/team' className="link link-hover hover:text-white">The team</Link></li>      

                            <li className='hover:text-primaryBg'>
                            <a rel='noreferrer' target={"_blank"} href={whitepaper} className="link link-hover hover:text-white">Whitepaper</a></li>                           
                        </ul>
                    </div>
                </div>

                <div className="navbar-end m-0 desktop:p-0 laptop:pr-8 mobile:pr-10">

                    <div className="grid grid-flow-col gap-4 text-white hover:cursor-pointer items-center">

                        {/* This acts like a custom connect button */}
                        <WagmiConfig client={wagmiClient}>
                        <RainbowKitProvider chains={chains}>
                        <YourApp />
                        </RainbowKitProvider>
                        </WagmiConfig>
                        {connectToWallet}
                        <a href='https://twitter.com/collectvminds' target="_blank" rel="noopener noreferrer">
                            <img src={tw} className='visible laptop:w-6 desktop:w-6 mobile:w-3' alt="twitter" title='twitter' />
                        </a>
                        <a href='https://opensea.io/collection/you-the-people' target="_blank" rel="noopener noreferrer">

                            <img src={open} className='laptop:w-6 desktop:w-6 mobile:w-3' alt="opensea" title='opensea' />
                        </a>
                        <a href='https://www.instagram.com/collectvminds' target="_blank" rel="noopener noreferrer">
                            <img src={ig} className='laptop:w-6 desktop:w-6 mobile:w-3' alt="instagram" title='instagram' />
                        </a>
                        <a href='https://discord.gg/x6QFgg4tXB' target="_blank" rel="noopener noreferrer">
                            <img src={dc} className='laptop:w-6 desktop:w-6 mobile:w-3' alt="discord" title='discord' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;