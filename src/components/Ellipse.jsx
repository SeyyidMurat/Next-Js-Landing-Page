import React from 'react';

const Ellipse = ({ width, height, bgColor }) => {
	let styles = {
		width: `${width}px` ?? '11px',
		height: `${height}px` ?? '11px',
		backgroundColor: bgColor ?? '',
	};

	return <span className="ellipse" style={styles}></span>;
};

export default Ellipse;
