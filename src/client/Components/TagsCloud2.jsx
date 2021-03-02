import React from 'react'
import {default as TagsCloudOrg} from 'react-tag-cloud'
import styled from 'styled-components'
import {VIOLET1_70, VIOLET2} from '../styles'
import {Box} from './Box'

const sets = [
	{
		fontSize: 14,
		color: VIOLET1_70,
	},
	{
		fontSize: 14,
		color: VIOLET1_70,
	},
	{
		fontSize: 16,
		color: VIOLET1_70,
	},
	{
		fontSize: 16,
		color: VIOLET1_70,
	},
	{
		fontSize: 18,
		color: VIOLET2,
	},
	{
		fontSize: 18,
		color: VIOLET2,
	},
]

const Tag = ({value, style}) => <div style={style}>{value}</div>

const TagsCloudPanel = styled(TagsCloudOrg)`
	width: 100%;
	height: 100%;
`

const TagsCloud = ({tags, height = '20rem', width = '80%'}) => {
	return (
		<Box {...{height, width}}>
			<TagsCloudPanel
				style={{
					fontFamily: 'Quicksand',
					fontWeight: 600,
					padding: 10,
				}}
			>
				{tags.map(({value, count}) => (
					<Tag key={value} {...{value, style: sets[count]}} />
				))}
			</TagsCloudPanel>
		</Box>
	)
}
export default TagsCloud
