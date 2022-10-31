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



const Banner = () => {

    const videos = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10];
    const handleVideoEnded = () => {setCurrent(current < 9 ? current + 1 : 0)};
    const [current, setCurrent] = React.useState(0);
    const [loading, setLoading] = useState(false);
    const { checkIfSold, handlePurchase, sold, loading: contextLoading, minted: mintedDone } = useContext(ChainContext);

    const findMintedID = async (mintedId) => {  
        const q = query(
            collection(db, "Minted"),
            where("id", "==", mintedId),
        );
        const res = getDocs(q).then((qs) => {
            if (!qs.empty) {
                setLoading(false);
                console.log("status of tokenId= ", mintedId, " is MINTED");
                return true
            } else {
                console.log("status of tokenId= ", mintedId, " is AVAILABLE");
                return false

            }
        })
        return res;
    }

    const handleBuy = async () => { 
        setLoading(true);
        let i;
        for (i = 1; i <= 750; i++) {
            console.log("check status of tokenId= ", i)
            const res = await findMintedID(i)                                   //finding in firestore
            if (res) {                                                          //found in database
                continue;

            } else {                                                            // did not find in firebase
                await checkIfSold(i);                                           //checking if sold in blockchain
                if (sold) {
                    await addDoc(collection(db, "Minted"), {                    // add to the firebase
                        id: i
                    });
                    console.log("found in Blockchain, added to DB this tokenID:", i);
                    continue;
                } else {
                    console.log("Banner: perparing to mint", i);
                    const minted = await handlePurchase(i); 
                    console.log("returned from handlePurchase", minted);

                    if (minted)                                                 //MINT SUCCESSFULL
                    {
                        const docRef = await addDoc(collection(db, "Minted"), {id: i });
                        console.log("Minted: ", i);
                        console.log("Inserted to DB: ", docRef);
                        setLoading(false);
                        break;

                        // navigate to art detail page
                    }
                    else {
                        console.log("minted failed for tokenID:", i);
                        const docRef = await addDoc(collection(db, "MintFailed"), {id: i });
                        console.log("Inserted faield to DB: ", docRef);
                        setLoading(false);
                        break;
                }
                }
            }
        }
    }


    {/* old handle buy - delete!
    const  handleBuy = async () => {

        let i = 1;
        while (i < 751){
            const art = data.find((data) => data.id === i);
            console.log("tokenID", i, "  status in file:",art);
            if (art == null)  //exist in the database
                {
                console.log("try to mint", i);
                const ret = await checkIfSold(i); //then check if exists in the blockchain
                if (ret == true)
                    {
                    //update database
                    i++;
                    }
                    else if (ret == false) // didn't find token in the database or blockchain
                        {
                        if (handlePurchase(i)) //MINT
                            { 
                            console.log("minted!", i);    
                            //minted success update database
                            i = 751;
                            }
                        }
                        else {i=751;}   // if error minting, stop loop, show error message, user can try again
   
                }
                else 
                    {
                    console.log("not minted, it has an owner: ",art);
                    i++;
                    }
        }
    }

*/}

    
    return (
        <div className='bannar-wrapper text-white bg-deepDarkBg'>

            <Navbar />
 
            <video className='bannerVideo' src={videos[current]} onEnded={handleVideoEnded}
                        autoPlay muted playsInline></video>

            <div className="hero min-h-[100vh] max-h-auto">
                <div className="hero-content py-10 max-w-[700px] desktop:left-96">
                    <div className='mobile:pt-10 laptop:pt-20' data-aos="fade-up">
                        <h1 className="laptop:text-4xl desktop:text-5xl mobile:text-3xl font-bold">The world,
                            <br />imagined ​by AI.</h1>

                        <p className="pt-20 laptop:text-2xl desktop:text-2xl mobile:text-xl font-light">
                            We asked an artificial intelligence to create art
                            representing its own thoughts on human sentiment.  
                        </p>

                        <p className="py-20 laptop:text-2xl desktop:text-2xl mobile:text-xl font-light">
                        These historic images of our world are now available as the digital art collection "You, the People!".
                        </p>

                        {
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
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;