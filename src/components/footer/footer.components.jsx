import React from 'react';

import './footer.styles.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='credit'>
				<a
					href='https://jaydenshaw.com/'
					target='_blank'
					rel='noreferrer'
				>
					Created by Jayden Shaw
				</a>
			</div>
		</footer>
	);
};

export default Footer;
