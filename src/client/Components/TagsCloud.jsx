import React from 'react'
import {TagCloud} from 'react-tagcloud'
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

const Tag = ({label, style}) => <div style={style}>{label}</div>

const BoxWrap = styled(Box)`
	display: block;
	width: 100%;
	height: 100%;
`

const renderer = ({value, count}, size, color) => {
	// console.log('🚀 ~ renderer ~ tag, size, color', tag, size, color)

	return (
		<span key={value} style={{color}} className={`tag-${count * 10}`}>
			{value}
		</span>
	)
}

const TagsCloud = ({tags, height = '25rem', width = '100%'}) => {
	return (
		<BoxWrap {...{height, width}}>
			<TagCloud minSize={12} maxSize={35} tags={tags} renderer={renderer} />
		</BoxWrap>
	)
}
export default TagsCloud
