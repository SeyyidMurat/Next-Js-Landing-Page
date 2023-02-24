import React from 'react';
import Image from 'next/image';
const TherapyCard = (props) => {
	let styles = {
		background: props.backgroundColor ?? '#b09bff',
		flexDirection: props.row ? 'row' : 'column',
		gap: `${props.gap}px` ?? 0,
	};

	return (
		<div className="online_therapy-card" style={styles}>
			<div className="online_therapy-card-title" style={{ color: props.color ?? '#ffff' }}>
				{props.title}
			</div>
			<div className="online_therapy-card-img">
				{props.height && props.width ? (
					<Image src={props.img} alt="threapy-img" height={props.height} width={props.width} />
				) : (
					<Image src={props.img} alt="threapy-img" fill objectFit="contain" />
				)}
			</div>
		</div>
	);
};

export default TherapyCard;
