import React, { createContext, useContext, useState } from 'react';
import { PlusIcon, MinusIcon } from '../assets/icons/index';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
	return (
		<div className="accordion_wrapper" {...restProps}>
			{children}
		</div>
	);
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<div className="accordion_item" {...restProps}>
				{children}
			</div>
		</ToggleContext.Provider>
	);
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);

	return (
		<div className="accordion_header" onClick={() => setToggleShow(!toggleShow)} {...restProps}>
			{children}
			<button>{toggleShow === false ? <PlusIcon /> : <MinusIcon />}</button>
		</div>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);

	return (
		<div className={`accordion_body ${toggleShow && 'accordion_body-open'}`} {...restProps}>
			<div className="accordion_body-content"> {children} </div>
		</div>
	);
};
