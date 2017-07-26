import React, {
	PureComponent
	} from 'react';

import { Example02 } from './Examples';

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
			<Example02 />
		);
	}
}