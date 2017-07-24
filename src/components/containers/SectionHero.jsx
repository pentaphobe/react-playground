/**
 * 
 * 
 * Maps to `section-hero` in the Concepts Master Sketch
 */

import React from 'react';
import Section from 'components/Section';
import Button from 'components/Button';

const SectionHero = (props) => {
	return (
		<Section {...props}>
			<h1 className={props.header.class}>{props.header.text}</h1>
			<h3 className={props.subheader.class}>{props.subheader.text}</h3>
			<Button {...props.button} />
		</Section>
	);
};

export { 
	SectionHero 
};

export default SectionHero;