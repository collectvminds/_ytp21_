import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

const artContext = createContext({})

const ArtContext = ({ children }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/metadata.json')
            .then(res => res.json())
            .then(data => setData(data))
        setLoading(false)
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