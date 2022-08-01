import React from 'react';
import { useNavigate } from 'react-router-dom';


const Art = ({ art }) => {
    const navigate = useNavigate()
    const navigateArt = (id) => {
        navigate(`/YTP21/assets/nft/${id}`)
    }
    return (
        <>
            <div class="img-with-text cursor-pointer" onClick={() => navigateArt(art.id)}>
                <img src={art.image} alt="artImage" className="rounded-md laptop:w-[90%] desktop:w-[90%] mobile:w-[100%] laptop:mx-10 desktop:mx-10 mobile:my-5" />
            </div>
        </>
    );
};




export default Art;