/**
 * 
 * 
 * Maps to `section-links` in the Concepts Master Sketch
 */

import React from 'react';
import Section from 'components/Section';
import Button from 'components/Button';

// TODO: make an external item
const SectionLink = (props) => {
	const icon = props.icon ? `icon icon-${props.icon}` : '';
	const classes = (props.class || '') + ' ' + icon;	
	return (
		<div {...props} className={classes} style={Object.assign({margin:10, padding:10}, props.style)}>
			<a href={props.href || '#'}>{props.children}</a>
		</div>
	);
};

const SectionLinks = (props) => {
	return (
		<Section {...props}>
			<h1 className={props.header.class}>{props.header.text}</h1>
			{props.children.map( (Child, idx) => React.cloneElement(Child, Object.assign({key:idx}, props.link)) ) }
		</Section>
	);
};

export { 
	SectionLink,
	SectionLinks 
};

export default SectionLinks;