import React from 'react';
import './Ukraine.css'
import logo from '../../Assets/10.png'



const UkraineDesc = () => {


    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };


    return (
<div>
        <div className='descwrapper text-Dark bg-white'>

            <div className="contentText flex flex-col justify-start items-left mobile:pt-20 tablet:pt-20 desktop:pt-20 mobile:px-10 pb-20 mx-auto max-w-[960px]">

                    <strong>Press release</strong> 
                    <hr />        
                    <br/><br/>     
                    <p><b>London, 08/Aug/2022 </b> – Collective Minds, an art and design studio based in London, is pleased to announce that it is organising a charity auction of digital art to raise funds for UK for UNHCR’s Ukraine Emergency Appeal.
                    <br/><br/>The auction will run from 08/Aug/22 until 19/Sep/22, and will include three unique and historic artworks, which were created by an artificial intelligence that captured and portrayed the sentiment of the Ukrainian people just a month before the invasion from Russia. All profits from the auction will be donated to UK for UNHCR.
                    <br/><br/>The conflict in Ukraine has forced upwards of ten million people from their homes, with millions crossing as refugees into neighbouring countries, such as Poland, Hungary, Slovakia and Moldova. Many more have been displaced within Ukraine’s borders, and these numbers continue to rise.
                    <br/><br/>Funds raised are essential, helping get supplies already in the area out to the people who need it most – and quickly. They also help UNHCR, the UN Refugee Agency, to provide small emergency grants for the most vulnerable displaced people, enabling refugees to buy the essentials they need in an effective and dignified way.
                    <br/><br/>Immediate needs for those fleeing their homes include shelter, sanitation, food, water and health services, as well as psychological support. 
                    <br/><br/>Your support will help to provide emergency aid for those forced to flee, safeguard fundamental human rights, and ensure people have a safe place to call home.
                    </p>


                    <div className="image-container py-8">
                            <button type="button" className="w-70 text-lg font-bold bg-Yellow text-center mr-2 mb-2 px-5 py-2.5 rounded-lg hover:bg-Blue hover:text-white"
                                onClick={() => openInNewTab('https://opensea.io/collection/you-the-people?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[toggles][0]=ON_AUCTION')}
                            >View auction</button> 
                    </div>

                    <hr /> 
                    <p className='text-base font-bold text-left my-3 pt-8'> Notes to Editors </p>
                    <p className='text-sm font-bold text-left my-3 pt-1'> About UK for UNHCR  </p>
                    UK for UNHCR is the UN Refugee Agency’s national charity partner for the UK, building solidarity, creating partnerships and raising funds to protect refugees worldwide through UNHCR’s work. 
                    UNHCR, the UN Refugee Agency, leads international action to protect people forced to flee their homes because of conflict and persecution. Thanks to voluntary contributions from our UK supporters and partnerships, UNHCR teams can deliver life-saving assistance like shelter, food and water, help safeguard fundamental human rights, and ensure people have a safe place to call home where they can build a better future. UNHCR also works to ensure that stateless people are granted a nationality.
                    <br/><br/>UK for UNHCR is a registered charity in England and Wales (registered charity number 1183415). 
                    <p className='text-sm font-bold text-left my-3 pt-5'> About Collective Minds </p>
                    Collective Minds is an art and design studio based in London, which uses artificial intelligence and blockchain technology to create art and to empower artists from the developing world to work together and earn from their art.
                    <br/><br/>Collective Minds is a company registered in England and Wales (company number 12510766).
                    <br/><br/> Contact:<a href = "mailto:ukraine@collectiveminds.ai">ukraine@collectiveminds.ai</a>

            </div>
        </div>
</div>
    );
};

export default UkraineDesc;