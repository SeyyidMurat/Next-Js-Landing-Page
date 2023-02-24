import React from 'react';

const FooterColumn = (props) => {
	return (
		<div className="footer_column">
			{props.title ? (
				<div className="footer_column-title text-center-mobile">{props.title}</div>
			) : (
				<div className="footer_column-title null_text">Tanımsız</div>
			)}
			<div className="footer_column-title-line"></div>
			<div>{props.children}</div>
		</div>
	);
};

export default FooterColumn;
