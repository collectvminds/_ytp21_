import React, { useContext, useState } from 'react';
import Collection from '../Components/Collection/Collection';
import { artContext } from '../Components/Context/ArtContext';
import "./pagination.css";

const Collectionpage = () => {

    const [click, setClick] = useState('A');
    
    const { data, loading } = useContext(artContext);

    
    let result = [
        ...data.reduce((r, o) => {
            const key = `${o.Country_Code}`;
            if (!r.has(key)) {
                r.set(key, [])
            };

            r.get(key).push(o);

            return r;
            
        }, new Map()).values()
    ];   

    let resultDefault = result.slice(0,16)
    let resultB=result.slice(16,37)
    let resultC=result.slice(37,59)
    let resultD=result.slice(59,64)
    let resultE=result.slice(64,72)
    let resultF=result.slice(72,80)
    let resultG=result.slice(80,96)
    let resultH=result.slice(96,102)
    let resultI=result.slice(102,111)
    let resultJ=result.slice(111,115)
    let resultK=result.slice(115,121)
    let resultL=result.slice(121,130)
    let resultM=result.slice(130,152)
    let resultN=result.slice(152,167)
    let resultO=result.slice(167,168)
    let resultP=result.slice(168,180)
    let resultQ=result.slice(180,181)
    let resultR=result.slice(181,185)
    let resultS=result.slice(185,218)
    let resultT=result.slice(218,232)
    let resultU=result.slice(232,240)
    let resultV=result.slice(240,245)
    let resultW=result.slice(245,247)
    let resultY=result.slice(247,248)
    let resultZ=result.slice(248,[250])

       
    if(click === 'A')
    return (
       <>
        <Collection
            collection={resultDefault}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );
    

    if(click === 'B')
    return (
       <>
        <Collection
            collection={resultB}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'C')
    return (
       <>
        <Collection
            collection={resultC}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'D')
    return (
       <>
        <Collection
            collection={resultD}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'E')
    return (
       <>
        <Collection
            collection={resultE}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'F')
    return (
       <>
        <Collection
            collection={resultF}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'G')
    return (
       <>
        <Collection
            collection={resultG}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'H')
    return (
       <>
        <Collection
            collection={resultH}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'I')
    return (
       <>
        <Collection
            collection={resultI}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'J')
    return (
       <>
        <Collection
            collection={resultJ}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'K')
    return (
       <>
        <Collection
            collection={resultK}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'L')
    return (
       <>
        <Collection
            collection={resultL}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'M')
    return (
       <>
        <Collection
            collection={resultM}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'N')
    return (
       <>
        <Collection
            collection={resultN}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'O')
    return (
       <>
        <Collection
            collection={resultO}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'P')
    return (
       <>
        <Collection
            collection={resultP}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'Q')
    return (
       <>
        <Collection
            collection={resultQ}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'R')
    return (
       <>
        <Collection
            collection={resultR}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'S')
    return (
       <>
        <Collection
            collection={resultS}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'T')
    return (
       <>
        <Collection
            collection={resultT}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'U')
    return (
       <>
        <Collection
            collection={resultU}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'V')
    return (
       <>
        <Collection
            collection={resultV}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'W')
    return (
       <>
        <Collection
            collection={resultW}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'Y')
    return (
       <>
        <Collection
            collection={resultY}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );

    if(click === 'Z')
    return (
       <>
        <Collection
            collection={resultZ}
            loading={loading}
        />
        <div className="pagination" id='here'>
        <button onClick={()=>{setClick('A'); window.scrollTo(0,1000)}}>A</button>
        <button onClick={()=>{setClick('B'); window.scrollTo(0,1000)}}>B</button>
        <button onClick={()=>{setClick('C'); window.scrollTo(0,1000)}}>C</button>
        <button onClick={()=>{setClick('D'); window.scrollTo(0,1000)}}>D</button>
        <button onClick={()=>{setClick('E'); window.scrollTo(0,1000)}}>E</button>
        <button onClick={()=>{setClick('F'); window.scrollTo(0,1000)}}>F</button>
        <button onClick={()=>{setClick('G'); window.scrollTo(0,1000)}}>G</button>
        <button onClick={()=>{setClick('H'); window.scrollTo(0,1000)}}>H</button>
        <button onClick={()=>{setClick('I'); window.scrollTo(0,1000)}}>I</button>
        <button onClick={()=>{setClick('J'); window.scrollTo(0,1000)}}>J</button>
        <button onClick={()=>{setClick('K'); window.scrollTo(0,1000)}}>K</button>
        <button onClick={()=>{setClick('L'); window.scrollTo(0,1000)}}>L</button>
        <button onClick={()=>{setClick('M'); window.scrollTo(0,1000)}}>M</button>
        <button onClick={()=>{setClick('N'); window.scrollTo(0,1000)}}>N</button>
        <button onClick={()=>{setClick('O'); window.scrollTo(0,1000)}}>O</button>
        <button onClick={()=>{setClick('P'); window.scrollTo(0,1000)}}>P</button>
        <button onClick={()=>{setClick('Q'); window.scrollTo(0,1000)}}>Q</button>
        <button onClick={()=>{setClick('R'); window.scrollTo(0,1000)}}>R</button>
        <button onClick={()=>{setClick('S'); window.scrollTo(0,1000)}}>S</button>
        <button onClick={()=>{setClick('T'); window.scrollTo(0,1000)}}>T</button>
        <button onClick={()=>{setClick('U'); window.scrollTo(0,1000)}}>U</button>
        <button onClick={()=>{setClick('V'); window.scrollTo(0,1000)}}>V</button>
        <button onClick={()=>{setClick('W'); window.scrollTo(0,1000)}}>W</button>
        <button className='disabled'>X</button>
        <button onClick={()=>{setClick('Y'); window.scrollTo(0,1000)}}>Y</button>
        <button onClick={()=>{setClick('Z'); window.scrollTo(0,1000)}}>Z</button>
</div>
</>
    );
};

export default Collectionpage;