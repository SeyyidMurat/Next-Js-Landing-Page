import React from 'react';
import { LogoIcon, MenuIcon, SearchIcon } from '../assets/icons/index';
const Header = () => {
	return (
		<div className="header_container flex-center">
			<div className="header_wrapper">
				<div className="header_inner">
					<LogoIcon />
					<div className="header_left">
						<span>
							<SearchIcon width={24} height={24} color="#2a2a2a" />
						</span>
						<span>
							<MenuIcon />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
