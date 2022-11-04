import { BigNumber, ethers } from 'ethers';
import { nftContractAddress } from '../Config/Config';
import React, { useState } from 'react';
import { createContext } from 'react';
import Swal from 'sweetalert2';
import {wagmiClient} from '../Navbar';
const infuraId = process.env.INFURA_ID;
const contractABI = require("../Abi/abi.json");
const ChainContext = createContext({})

const BlockchainContext = ({ children }) => {

    const [wallet, setWallet] = useState([]);
    const [sold, setSold] = useState(false);

    let contract;

    const showAlerts = (alert, message, title = '') => {
        switch (alert) {
            case "success":
                Swal.fire({
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    position: 'center',
                    icon: 'success',
                    title: title,
                    text: message,
                    background: "#0b1225",
                    width: 300
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.open('https://discord.gg/bk5q7h5fVu', '_blank', 'noopener,noreferrer');
                    } 
                  })
                break;
            case "error":
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: title,
                    text: message,
                    background: "#0b1225",
                    width: 300
                })
                break;
            case "warning":
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: title,
                    html: message,
                    background: "#0b1225",
                    width: 300
                })
                break;
            default:
        }
    }

    const connectWallet = async () => {

        console.log ("wallet status: ", wagmiClient.status);
        if (wagmiClient.status !== "connected"){
                showAlerts('warning', `Please click on the wallet button above to connect your wallet.`, "Wallet not connected!");
                return false;
        }
            else{
                    console.log ("wallet connected: ", wagmiClient.data.account);
                    return true;
            }

        }

    const getConnect = async () => {
           const provider = new ethers.providers.Web3Provider(window.ethereum);
           const signer = provider.getSigner(wagmiClient.data.account);
            try{
                contract = new ethers.Contract(
                    nftContractAddress,
                    contractABI,
                    signer
                );
                console.log("getConnect successfull, contract ready for minting"); 
                return true;
            } catch(err){
                console.log("Connection with blockchain failed with error", err);
                return false;
        }
    }
    
    //Check if sold - doesn't need wallet
    const checkIfSold = async (tokenID) => {

        console.log("check if this token ID is minted in blockchain:", tokenID); 
        const provider = new ethers.providers.InfuraProvider("homestead", infuraId);
        const contractRead = new ethers.Contract(
                                 nftContractAddress,
                                 contractABI,
                                 provider);
        const response = await contractRead.isContentOwned(BigNumber.from(tokenID));
        console.log("minted status of token is:", response);
        return response;

    }

    const handlePurchase = async (tokenID) => {
        console.log("check wallet status");
        const walletStatus = await connectWallet();
        console.log("wallet status is ", walletStatus);
        if (!walletStatus) 
            {
            console.log("returning with false from handlePurchase because wallet is not connected");
            return false;
            }
        console.log("get contract instance for minting");
        if (getConnect()){
            console.log("will try to mint token ID", tokenID);
            const costContract = (await contract.cost()).toString();
            const user = await contract.signer.getAddress();
            const owner = (await contract.owner());
            const cost = user === owner? 0 : costContract;
            console.log("1- signer: ", await contract.signer.getAddress());
            console.log("2- CostContract: ", costContract.toString());
            console.log("3- Contract: ", nftContractAddress); 
            console.log("4- Owner: ", owner); 
            console.log("5- ActualCost: ", cost.toString());   
        
            try {
                console.log(cost);
                const response = await contract.mint(BigNumber.from(tokenID), {
                value: cost
                });
                showAlerts('success', `This is your new NFT. Please register your ownership on Discord.`, "Well done!");
                console.log("mint response: ", response);
                return true;
            } catch (err) {
                //showAlerts('warning', `${err.toString().split('(')[0]}`, "Transaction cancelled!");
                showAlerts('warning', `${err}`, "Transaction cancelled!");
                console.log("mint error:", err.toString().split('(')[0]);
                return false;
            }
        } else{
            console.log("Minting failed because of blockchain connection");
            return false;
        }
    }

    const donationHandle = async (amount) => {

        getConnect();

        try {
            const response = await contract.donate({ value: ethers.utils.parseEther(amount.toString()) });
            showAlerts('success', "Donation successful", "Thank you");
            console.log("Donation response: ", response);
        } catch (err) {
            showAlerts('error', "Donation error! Please check that a wallet is connected and that it has enough funds.", "Try again")

        }
    }

    // const getMintedStatus = async (tokenID) => {
    //     const provider = new ethers.providers.InfuraProvider("homestead", infuraId);
    //     const contractRead = new ethers.Contract(
    //                              nftContractAddress,
    //                              contractABI,
    //                              provider);
    //     const result = await contractRead.isContentOwned(tokenID);
    //     return result
    //          };

    return (


        <ChainContext.Provider value={{ connectWallet, wallet, getConnect, checkIfSold, handlePurchase, donationHandle}}>
            {children}
        </ChainContext.Provider>

    )




};

export { BlockchainContext, ChainContext };