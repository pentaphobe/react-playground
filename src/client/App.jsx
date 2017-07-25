import React, {
	PureComponent
	} from 'react';

import { mapProps } from 'Recompose';
import Button from 'components/Button';
import Section from 'components/Section';

/**
 * Generic project `Theme`
 * Creates "raw elements" for styling
 */
const Theme = ({
	fontRatio=1.3
} = {}) => ({
	primaryColour: '#f0f',
	secondaryColour: '#ff0',
	fontSize: 20,					// px
	fontScales: [
		1 / fontRatio,
		1,
		fontRatio,
		fontRatio * fontRatio
	]
})({
	fontRatio: 1.2
});

const View = ({theme}) => ({
	p: {
		fontSize: theme.fontSize * theme.fontScales[1]
	},
	h1: {
		fontSize: theme.fontSize * theme.fontScales[3]
	}
});

console.log(View({theme:{fontSize:2, fontScales:[1,2,3,4]}}));

const viewInstance = View({theme:Theme()});

console.log(viewInstance);
console.log(view({theme:{fontSize:2, fontScales:[1,2,3,4]}}));

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
			padding: 15,
			background: '#d8d8d8'
		}
	},
	...viewInstance
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
				<Section style={styles.section} title="component taxonomy">
					{/*
						composed button guy goes here 
					*/}
				</Section>

				<Section style={styles.section} title="basic setup: done">
					<h2>{this.state.timer}</h2>			
					<p style={styles.p}>Container things</p>
					<p>Make for scary magic</p>
					<p>But hell, sue me</p>
				</Section>
			</div>
		);
	}
}