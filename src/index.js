import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ArtContext } from './Components/Context/ArtContext'
import { BlockchainContext } from './Components/Context/BlockchainContext'
import { chain, configureChains, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { wagmiClient } from './Components/Banner/Banner'

const infuraId = process.env.INFURA_ID;
const { chains, provider } = configureChains(
	[chain.mainnet], [infuraProvider({ infuraId }), publicProvider(),]
);


const container = document.getElementById('root')
const root = createRoot(container)



root.render(
	<BrowserRouter>
		<ArtContext>

			<WagmiConfig client={wagmiClient} >
				<RainbowKitProvider chains={chains}>
					<BlockchainContext>
						<App />
					</BlockchainContext>
				</RainbowKitProvider>
			</WagmiConfig >


		</ArtContext>
	</BrowserRouter>
)
