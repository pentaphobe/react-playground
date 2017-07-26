import React from 'react';

import styled from 'styled-components';
import {branch, renderComponent} from 'recompose';

import Button from 'components/Button';
import Input from 'components/form/Input';
import {SectionFancy, Section} from 'components/Section';



const Example01 = (props) => (
	<div>	
		<Button>Foo</Button>			
		<Section title="component taxonomy">
			<p>Other things</p>
			<Button>Example</Button>
		</Section>

		<SectionFancy title="basic setup: done">
			<p style={{color:'#f00'}}>{props.timer}</p>			
			<p>Container things</p>
			<p key="foobar">Make for scary magic</p>
		</SectionFancy>
	</div>	
);

const Pre = styled.code`
	background: #ebb;
	padding: 5px;
	color: #666;
`;

const Label = styled.label`
	background: #f0f;
`;

const Example02 = (props) => (
	<div>
		<Input id="foo" name="foo" placeholder="Something or other" label="something"/>
		<Section title="section fancy">
			<Input id="foobar" 
						placeholder="another placeholder">
				Complex <Pre>label with HTML</Pre>
			</Input>
		</Section>
		<Section title="another">
			<Input id="another" placeholder="explicit label as child">
				<Label>Something or other</Label>
			</Input>
		</Section>
	</div>
);


export {
	Example01,
	Example02
};