import React from 'react';
import Image from 'next/image';
const TherapyStartCard = (props) => {
	return (
		<div className="therapy_start-card">
			<div className="therapy_start-card-title">{props.title}</div>
			<div className="therapy_start-card-img">
				<Image src={props.img} alt="threapy-img" fill objectFit="contain" />
			</div>
			<div className="therapy_start-card-desc">{props.desc}</div>
		</div>
	);
};

export default TherapyStartCard;
