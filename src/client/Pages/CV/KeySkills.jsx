import React from 'react'
import {Box} from 'Components/Box'
import {RightTitle} from './RightBar'
import {BOLD, S, Text} from 'src/client/Components/Text'
import {CV_LIGHT} from 'src/client/styles/index'

const tags = [
	{label: 'JavaScript'},
	{label: 'React'},

	{label: 'HTML'},
	{label: 'CSS'},
	{label: 'Styled-components'},
	{label: 'SASS'},

	{label: 'Node.js'},
	{label: 'GraphQL'},
	{label: 'SQLite'},

	{label: 'Webpack'},
	{label: 'Git'},

	{label: 'Redux'},
	{label: 'ECMAScript'},
	{label: 'Jest'},
	{label: 'Cypress.js'},
]

const Tag = ({label}) => (
	<Box {...{radius: 'round', bg: CV_LIGHT, padding: '0.1rem 0.5rem'}} inline>
		<Text sets={[S, BOLD]}>{label}</Text>
	</Box>
)

const KeySkills = () => {
	return (
		<Box {...{aa: '0.5rem'}} column>
			<RightTitle {...{title: 'Key skills'}} />
			<Box {...{padding: '0.5rem 0', gap: '0.5rem'}} left wrap>
				{tags.map((logo, i) => (
					<Tag key={i} {...logo} />
				))}
			</Box>
		</Box>
	)
}

export default KeySkills
