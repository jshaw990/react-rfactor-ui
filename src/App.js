import React from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';
import NotFoundPage from './pages/notFound/notFound.page';
import LandingPage from './pages/landing/landing.page';
import AboutPage from './pages/about/about.page';


import './App.scss';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default App;
