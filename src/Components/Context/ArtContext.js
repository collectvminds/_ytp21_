import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, where } from 'firebase/firestore';
import db from '../../Firebase.init';

const artContext = createContext({})

const ArtContext = ({ children }) => {

    const [data, setData] = useState([])
    //const [minted, setMinted] = useState([])          //used to initialise MintedDB
    const [loading, setLoading] = useState(false)

  
    useEffect(() => {
        setLoading(true)
        fetch('/metadata.json')
            .then(res => res.json())
            .then(data => setData(data))
        setLoading(false)
        console.log("Loaded art details")

        //used to initialise MintedDB
        // fetch('/minted.json')
        // .then(mintedRes => mintedRes.json())
        // .then(minted => { setMinted(minted)

        //     console.log("Loading 1 Minted DB");
        //     console.log(minted)
        //     minted.map (async (id) => {
        //         const newId = doc(collection(db, "Minted"));
        //         console.log("Loading 2 Minted DB");
        //         await setDoc(newId, id);
        //         console.log("Inserted ID", id);
        //     })
        // console.log("Loaded Minted DB")}) 
        
    }, [])


    const findDataByCountry = (country) => {
        const art = data.filter((data) => data.Country_Code === country)
        return art
    }

    const findDataById = (id) => {
        const art = data.find((data) => data.id == id)
        return art
    }


    return (
        <artContext.Provider value={{ data, findDataByCountry, findDataById, loading }} >
            {children}
        </artContext.Provider>
    );
};

export { ArtContext, artContext };