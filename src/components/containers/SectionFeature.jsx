/**
 * 
 * 
 * Maps to `section-feature` in the Concepts Master Sketch
 */

import React from 'react';
import Section from 'components/Section';
import Button from 'components/Button';

const SectionFeature = (props) => {
	return (
		<Section {...props}>
			<div className="feature--main" {...props.main} >
				{props.children.map( (Child, idx) => React.cloneElement(Child, Object.assign({key:idx}, props.Feature)) ) }
			</div>
			<div className="feature--focus" {...props.focus} >
				SOME CONTENT HERE
			</div>
			
		</Section>
	);
};

export { 
	SectionFeature
};

export default SectionFeature;