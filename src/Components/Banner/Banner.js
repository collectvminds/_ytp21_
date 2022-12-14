import React from 'react';
import './Banner.css'
import Navbar from '../Navbar';
import v1 from "../../Assets/videos/v01.mp4";
import v2 from "../../Assets/videos/v02.mp4";
import v3 from "../../Assets/videos/v03.mp4";
import v4 from "../../Assets/videos/v04.mp4";
import v5 from "../../Assets/videos/v05.mp4";
import v6 from "../../Assets/videos/v06.mp4";
import v7 from "../../Assets/videos/v07.mp4";
import v8 from "../../Assets/videos/v08.mp4";
import v9 from "../../Assets/videos/v09.mp4";
import v10 from "../../Assets/videos/v10.mp4";
import { useState } from 'react';
import { useContext } from 'react';
import { ChainContext } from '../Context/BlockchainContext';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, where } from 'firebase/firestore';
import db from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, connectorsForWallets, wallet } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig, useSigner } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';

const infuraId = process.env.INFURA_ID;

const { chains, provider } = configureChains(
  [chain.mainnet], [infuraProvider({ infuraId }), publicProvider(),]
);

// const { connectors } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   chains
// });

const connectors = connectorsForWallets([{
    groupName: 'Recommended',
    wallets:[
      wallet.metaMask({chains})
    ]
  },
  {
    groupName: 'Popular',
    wallets:[
      wallet.brave({chains}),
      wallet.coinbase({chains}),
      wallet.ledger({chains}),
      wallet.rainbow({chains}),    
      wallet.trust({chains}),
      wallet.walletConnect({chains})
    ]
  }
  ])

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export let bannerSigner = '';

export const Banner = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const videos = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10];
    const handleVideoEnded = () => { setCurrent(current < 9 ? current + 1 : 0) };
    const [current, setCurrent] = React.useState(0);
    const [loading, setLoading] = useState(false);
    const { checkIfSold, connectWallet, handlePurchase, sold, loading: contextLoading, minted: mintedDone } = useContext(ChainContext);
    let [isConnected, setIsConnected] = useState(wagmiClient.status);

    const { data: signerData } = useSigner();

    bannerSigner = signerData;
    console.log("Banner signer", bannerSigner);

    useEffect(() => {
        setIsConnected(wagmiClient.status)
    }, [wagmiClient])

    const WalletButton = () => {

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
                        
                     //<img src={wallet} id="connectButton" className='laptop:w-6 desktop:w-6 mobile:w-3' onClick={openConnectModal} alt="wallet" title='wallet' />
                     <button type="button" onClick={openConnectModal} className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-1 border-2 border-white rounded-lg disabled hover:bg-white hover:text-deepDarkBg">
                     Connect wallet
                    </button>

                    );
                  }

                  if (chain.unsupported) {
                    return (
                    //   <button onClick={openChainModal} type="button">
                    //     Switch network
                    //   </button>

                    <button type="button" onClick={openChainModal} className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-1 border-2 border-white rounded-lg disabled hover:bg-white hover:text-deepDarkBg">
                        Switch to ETH network...
                    </button>
                    );
                  }
    

                  return (
                    <div style={{ display: 'flex', gap: 5 }}>
                         {
                                loading || contextLoading ? //from rafin
                                <button type="button" className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-1 border-2 border-white rounded-lg disabled hover:bg-white hover:text-deepDarkBg">
                                    Minting...
                                </button>
                            :
                            <button type="button" className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-1 border-2 border-white rounded-lg hover:bg-white hover:text-deepDarkBg"
                                onClick={() => {bannerSigner = signerData; 
                                                console.log("call handleBuy with signerData", bannerSigner);
                                                handleBuy()}}>
                                Mint NFT
                                <p className="py-1 laptop:text-xs desktop:text-xs mobile:text-xs font-light">
                                    0.02 ETH + small gas fee
                                </p>
                            </button>
                        }
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        );
    };

    const findMintedID = async (mintedId) => {
        const q = query(
            collection(db, "Minted"),
            where("id", "==", mintedId),
        );
        const res = getDocs(q).then((qs) => {
            if (!qs.empty) {
                console.log("status of tokenId= ", mintedId, " is MINTED");
                return true
            } else {
                console.log("status of tokenId= ", mintedId, " is AVAILABLE");
                return false

            }
        })
        return res;
    }

    const showLoading = async () => {
        Swal.fire({
            position: 'center',
            title: 'Preparing NFT!',
            text: 'This may take around 30 seconds...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            background: "#0b1225",
            width: 300,
            didOpen: () => {
                Swal.showLoading()
            }
        });
    };

    const showSoldOut = async () => {
        Swal.fire({
            position: 'center',
            title: 'Sold out...',
            text: 'Please check our sale on Opensea!',
            icon: 'warning',
            background: "#0b1225",
            width: 300,
            footer: '<a href="https://opensea.io/collection/you-the-people?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[toggles][0]=BUY_NOW&search[toggles][1]=ON_AUCTION&search[toggles][2]=IS_AVAILABLE_FOR_MOONPAY_FIAT_CHECKOUT" target="_blank" rel="noopener noreferrer">Click here to view Opensea sale</a>'
        });
    };


    const handleBuy = async () => {


        let i;
        setLoading(true);
        showLoading();

        for (i = 1; i <= 750; i++) {
            console.log("check status in MintedDB of tokenId= ", i);
            const res = await findMintedID(i)                                   //finding in firestore
            if (res) {                                                          //found in database
                continue;

            } else {                                                            // did not find in firebase
                console.log("found potentially not minted tokenId= ", i, "will now check blockchain to confirm");
                const isSold = await checkIfSold(i);                                           //checking if sold in blockchain
                console.log("minted status of taken id", i, " is", isSold);
                if (isSold) {
                    await addDoc(collection(db, "Minted"), {                    // add to the firebase
                        id: i
                    });
                    console.log("found in Blockchain, added to Minted DB this tokenID:", i);
                    continue;
                } else {
                    Swal.close();
                    console.log("Confirmed available token ID, preparing to mint:", i);
                    const minted = await handlePurchase(i, bannerSigner);
                    console.log("returned from Mint with status", minted);

                    if (minted)                                                 //MINT SUCCESSFULL
                    {
                        const docRef = await addDoc(collection(db, "Minted"), { id: i });
                        console.log("Minted: ", i);
                        console.log("Inserted to Minted DB: ", docRef);
                        setLoading(false);
                        navigate(`/YTP21/assets/nft/${i}`);
                        break;
                    }
                    else {
                        console.log("minted failed for tokenID:", i);
                        setLoading(false);
                        break;
                    }
                }
            }
        }
        setLoading(false);
        if (i >= 750) {
            console.log("SOLD OUT");
            showSoldOut();
        }

    }


    return (
        <div className='bannar-wrapper text-white bg-deepDarkBg'>

            <Navbar />

            <video className='bannerVideo' src={videos[current]} onEnded={handleVideoEnded} autoPlay muted playsInline>

            </video>

            <div className="hero min-h-[100vh] max-h-auto">
                <div className="hero-content py-10 max-w-[700px] desktop:left-96">
                    <div className='mobile:pt-10 laptop:pt-20' data-aos="fade-up">
                        <h1 className="laptop:text-4xl desktop:text-5xl mobile:text-3xl font-bold">The world,
                            <br />imagined ???by AI.</h1>

                        <p className="pt-20 laptop:text-2xl desktop:text-2xl mobile:text-xl font-light">
                            We asked an artificial intelligence to create art
                            representing its own thoughts on human sentiment.
                        </p>

                        <p className="py-20 laptop:text-2xl desktop:text-2xl mobile:text-xl font-light">
                            These historic images of our world are now available as the digital art collection "You, the People!".
                        </p>

                        {/* {

                            loading || contextLoading ? //from rafin
                                <button type="button" className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-1 border-2 border-white rounded-lg disabled hover:bg-white hover:text-deepDarkBg">
                                    Minting...
                                </button>
                                :
                                <button type="button" className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-1 border-2 border-white rounded-lg hover:bg-white hover:text-deepDarkBg"
                                    onClick={() => handleBuy()}>
                                    Mint NFT
                                    <p className="py-1 laptop:text-xs desktop:text-xs mobile:text-xs font-light">
                                        0.08 ETH + gas fee
                                    </p>
                                </button>
                        } */}

                                    {/* This acts like a custom connect button */}
            <WagmiConfig client={wagmiClient}>
              <RainbowKitProvider chains={chains}>
                <WalletButton />
              </RainbowKitProvider>
            </WagmiConfig>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;