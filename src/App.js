import AOS from 'aos';
import 'aos/dist/aos.css';
import { lazy, Suspense, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Art from './Components/ArtDetails/Art';
import Footer from "./Components/Footer/Footer"
import Four from './Components/FourOFour/Four';
import HomePage from "./Pages/HomePage"

const Collectionpage = lazy(() => import('./Pages/Collectionpage'))
const TeamPage = lazy(() => import('./Pages/TeamPage'))
const UkrainePage = lazy(() => import('./Pages/UkrainePage'))

function App() {
	
	const { pathname, hash, key } = useLocation();
	useEffect(() => {
		AOS.init(
			{
				duration: 1000,
				easing: 'ease',
				once: true,
				mirror: false,
			}
		);
    // if not a hash link, scroll to top
    if (hash === '') {
		window.scrollTo(0, 0);
	  }
	  // else scroll to id
	  else {
		setTimeout(() => {
		  const id = hash.replace('#', '');
		  const element = document.getElementById(id);
		  if (element) {
			element.scrollIntoView();
		  }
		}, 0);
	  }		
	}, [pathname, hash, key])

	return (

		<div className='mx-auto'>

			<Routes>

				<Route path={'/'} element={<HomePage />} />
				
				<Route path={'/collections'} element={
					<Suspense>
						<Collectionpage />
					</Suspense>
				} />

				<Route path={'/team'} element={
					<Suspense>	
						<TeamPage />
					</Suspense>
				} />

				<Route path={'/ukraine'} element={
					<Suspense>	
						<UkrainePage />
					</Suspense>
				} />

				<Route path={'/YTP21/assets/nft/:id'} element={<Art />} />
				<Route path={'*'} element={<Four />} />

			</Routes>

			<Footer />



		</div>


			) 

			//return(<Crud/>);
}

export default App
