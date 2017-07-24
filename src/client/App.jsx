import React, {
	PureComponent
	} from 'react';

import Button from 'components/Button';
import Section from 'components/Section';
import SectionHero from 'components/containers/SectionHero';
import {SectionLink, SectionLinks} from 'components/containers/SectionLinks';
import SectionFeature from 'components/containers/SectionFeature';

const styles = {
	section: {
		padding: 10,
		background: '#eee',
		marginBottom: 16,

		heading: {
			padding: 5,
			background: '#f8f8f8'
		},

		container: {
			margin: 5,
			padding: 5,
			background: '#d8d8d8'
		}
	}
};

const heroProps = {
	class: 'section-hero--product',
	style: styles.section,
	header: {
		text: 'Big header',
		class: 'big-header'
	},
	subheader: {
		text: 'Sub header'
	},
	button: {
		text: 'Get started',
		style: {
			borderRadius: 16,
			border: '2px solid #000',
			padding: 8
		}
	},
	link: {
		style: {
			width: '23%',
			display: 'inline-block'
		}
	}
};


export default class App extends PureComponent {
	constructor() {
		super();
		this.state = {
			timer: 0
		};
		
	}

	componentDidMount() {
		this.timerHandle = setInterval(() => {
			let newState = {
				timer: this.state.timer + 1
			};
			newState.__proto__ = this.state;
			this.setState(newState);
		}, 300);		
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState !== this.state;
	}

	render() {
		return (
			<div>				
				<Section style={styles.section} title="basic setup: done">
					<h2>{this.state.timer}</h2>			
					<p>Container things</p>
					<p>Make for scary magic</p>
					<p>But hell, sue me</p>
				</Section>
				<SectionHero {...heroProps} />
				<SectionLinks {...heroProps} >
					<SectionLink icon="compare">Compare the market</SectionLink>
					<SectionLink icon="compare">Compare the market</SectionLink>
					<SectionLink icon="compare">Compare the market</SectionLink>
					<SectionLink icon="compare">Compare the market</SectionLink>
					
					<SectionLink icon="compare">Compare the market</SectionLink>
					<SectionLink icon="compare">Compare the market</SectionLink>
					<SectionLink icon="compare">Compare the market</SectionLink>
					<SectionLink icon="compare">Compare the market</SectionLink>
				</SectionLinks>
				<SectionFeature>
					{/* assumes content is just rich text */}
					<h1>Property guidance</h1>
					<p>lorem ipsum dolor sit amet thigny stuff</p>
					<Button text="Request a report" />
				</SectionFeature>
			</div>
		);
	}
}