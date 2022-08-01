import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ArtContext } from './Components/Context/ArtContext'
import { BlockchainContext } from './Components/Context/BlockchainContext'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
		<BrowserRouter>
			<ArtContext>
				<BlockchainContext>
					<App />
				</BlockchainContext>
			</ArtContext>
		</BrowserRouter>
)
