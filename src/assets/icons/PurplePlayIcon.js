import React from 'react';

function Icon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 51.661 51.661">
			<defs>
				<filter id="w9oh53qlca" width="51.661" height="51.661" x="0" y="0" filterUnits="userSpaceOnUse">
					<feOffset dx="-2" dy="4"></feOffset>
					<feGaussianBlur result="blur" stdDeviation="5"></feGaussianBlur>
					<feFlood floodOpacity="0.388"></feFlood>
					<feComposite in2="blur" operator="in"></feComposite>
					<feComposite in="SourceGraphic"></feComposite>
				</filter>
			</defs>
			<g data-name="Component 86 – 13">
				<g filter="url(#w9oh53qlca)">
					<path
						fill="#b09bff"
						d="M27.83 11A10.83 10.83 0 1117 21.83 10.83 10.83 0 0127.83 11z"
						data-name="Path 14782"
					></path>
				</g>
				<path
					fill="#fff"
					d="M31.734 20.995a1 1 0 010 1.671l-5.18 3.4a1 1 0 01-1.548-.831v-6.809a1 1 0 011.549-.836z"
					data-name="Polygon 1"
				></path>
			</g>
		</svg>
	);
}

export default Icon;
