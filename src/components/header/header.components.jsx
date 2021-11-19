import React from 'react';

import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='side'>
				<img src={logo} alt='logo' className='logo' />
				<span className='item'>Home</span>
				<span className='item'>Race</span>
				<span className='item'>Watch</span>
				<span className='item'>Community</span>
			</div>
			<div className='side'>
				<span className='item'>Jayden Shaw</span>
				<span className='item'>
					<i class='fas fa-cog'></i>
				</span>
				<span className='item'>
					<i class='fas fa-comment-alt'></i>
				</span>
			</div>
		</header>
	);
};

export default Header;
