/**
 * Rudimentary component to test module resolution
 */
import React from 'react';

const Section = (props) => {
	const children = props.children && props.children.map( 
		(child, idx) => (
			<div style={props && props.style && props.style.container ? props.style.container : {} } key={idx}>
				{child}
			</div>
		)		
	);

	const title = props.title ? <h1 style={props.style.heading}>{props.title}</h1> : '';

	return (<section className={props.class} style={props.style}>
		{title}
		{children}
	</section>);
};

export default Section;
