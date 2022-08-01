import { BigNumber, ethers } from 'ethers';
import { nftContractAddress } from '../Config/Config';
import React, { useState } from 'react';
import { createContext } from 'react';
import Swal from 'sweetalert2';


const contractABI = require("../Abi/abi.json");

const ChainContext = createContext({})

const BlockchainContext = ({ children }) => {

    const [wallet, setWallet] = useState([]);
    let contract



    const showAlerts = (alert, message, title = '') => {
        switch (alert) {
            case "success":
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: title,
                    text: message,
                    background: "#0b1225"
                })
                break;
            case "error":
                Swal.fire({
                    icon: 'error',
                    toast: true,
                    title: title,
                    text: message,
                    background: "#0b1225"
                })
                break;
            case "warning":
                Swal.fire({
                    icon: 'warning',
                    title: title,
                    text: message,
                    background: "#0b1225"
                })
                break;
            default:
        }
    }



    const connectWallet = async () => {

        if (!sessionStorage.getItem("walletConnected")) {
            sessionStorage.setItem("walletConnected", false)
        }

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setWallet(accounts);
                sessionStorage.setItem("walletConnected", true)
                showAlerts('success', "Connection Successful", "Connected")

            } catch (err) {
                showAlerts('error', "Metamask connection failed, please make sure Metamask is connected and has funds. ", "Walled Connection failed")
                sessionStorage.setItem("walletConnected", false)
                return;
            }

        }
    


    const getConnect = async () => {

            const provider = new ethers.providers.Web3Provider(window.ethereum);

            const signer = provider.getSigner();

            contract = new ethers.Contract(
                nftContractAddress,
                contractABI,
                signer
            );
        }
    
        //Check if sold - doesn't need wallet
        const checkIfSold = async (tokenID) => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(
                            nftContractAddress,
                            contractABI,
                            provider
                            );
            console.log("Token: ", tokenID); 
            try {
                    const response = await contract.ownerOf(BigNumber.from(tokenID));
                    console.log("Owner found, token not for sale: ", response);
                    if (response) {
                        return true
                    }                    
            } catch (err) {
                    console.log("Owner not found, token for sale", err);
                    return false
            }
        }

    const handlePurchase = async (tokenID) => {
        connectWallet()
        getConnect()
        console.log("token ID", tokenID);
        try {
            const isSold = await contract.ownerOf(BigNumber.from(tokenID));
            if (isSold) {
                showAlerts('warning', `Token ${tokenID} already has an Owner.`, "Transaction cancelled!")
            }

        } catch (err) {
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
              showAlerts('success', `Purchase of token ${tokenID} submitted to the Ethereum network.`, "Transaction in process!")
              console.log("mint response: ", response);
            } catch (err) {
              showAlerts('warning', `Purchase of token ${tokenID} failed. Please check if wallet has enough funds.`, "Transaction cancelled!")
              console.log("mint error:", err);
            }

        }


    }

    const donationHandle = async (amount) => {

        getConnect()

        try {
            const response = await contract.donate({ value: ethers.utils.parseEther(amount.toString()) });
            showAlerts('success', "Donation successful", "Thank you")
            console.log("Donation response: ", response);
        } catch (err) {
            showAlerts('error', "Donation error! Please check that a wallet is connected and that it has enough funds.", "Try again")

        }
    }

    const getMintedStatus = async (tokenID) => {
        const result = await contract.isContentOwned(tokenID);
        return result
             };

    return (


        <ChainContext.Provider value={{ connectWallet, wallet, getConnect, checkIfSold, handlePurchase, donationHandle, getMintedStatus}}>
            {children}
        </ChainContext.Provider>

    )




};

export { BlockchainContext, ChainContext };