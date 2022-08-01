import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import About from '../Components/About/About';
import Banner from '../Components/Banner/Banner';
import { artContext } from '../Components/Context/ArtContext';
import Donation from '../Components/Donations/Donation';
import How from '../Components/How/How';
import Loading from '../Components/Loading/Loading';
import Next from '../Components/Next/Next';
import Overview from '../Components/Overview/Overview';

const HomePage = () => {
    const [userLocation, setUserLocation] = useState({})
    const [loading, setLoading] = useState(false)
    let overviewData;

    const { findDataByCountry, loading: contextLoading } = useContext(artContext)

    useEffect(() => {
        setLoading(true)
        fetch("https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708")
            .then(res => res.json())
            .then(data => setUserLocation(data))
        setLoading(false)
    }, [])

    if (loading || contextLoading) {
        return <Loading />
    }

    if (Object.keys(userLocation).length === 0) {
        overviewData = findDataByCountry("BR")

    } else {
        overviewData = findDataByCountry(userLocation.country_code)

    }

    if (!overviewData.length) {
        return <Loading />
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Collective Minds</title>
            </Helmet>
            <Banner />
            <Overview overviewData={overviewData} />
            <About overviewData={overviewData} />
            <How />
            <Next />
            <Donation />
        </div>
    );
};

export default HomePage;