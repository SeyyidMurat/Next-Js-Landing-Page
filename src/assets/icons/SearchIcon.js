import React from 'react';

function Icon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width ?? '32'}
			height={props.height ?? '32'}
			fill="none"
			stroke={props.color ?? '#000000'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
			className="icon icon-tabler icon-tabler-search"
			viewBox="0 0 24 24"
		>
			<path stroke="none" d="M0 0h24v24H0z"></path>
			<circle cx="10" cy="10" r="7"></circle>
			<path d="M21 21L15 15"></path>
		</svg>
	);
}

export default Icon;
