import React from 'react'
import {Box} from 'Components/Box'
import {WHITE, CV_DARK, CV_DARKER, CV_LIGHT} from 'Styles'
import {FIRST_NAME, JOB_TITLE, LAST_NAME} from 'config/personal'
import {BOLD, L, M, Text, XXL} from '../../Components/Text'
import portrait from 'assets/images/portrait.png'
import ImageBox from '../../Components/ImageBox'
import {leftListDB} from 'config/cv'
import {glyphs} from 'src/client/Components/Icon'
import {styled} from 'plugins/styles'

const SvgImg = styled.img`
	height: ${p => `${p.height || p.size}`};
	width: ${p => `${p.width || p.size}`};
`

const LeftListIconItem = ({value: glyph, size = '3rem'}) => (
	<Box
		{...{
			bg: CV_LIGHT,
			padding: '0 1rem',
			radius: 'round',
			size,
		}}
		inline
	>
		<SvgImg {...{src: glyphs[glyph], size: `calc(${size} * 0.6)`}} />
	</Box>
)

const LeftListItemText = ({label, value, labelOnTop}) => (
	<Box
		{...{
			gap: '0.2rem',
			column: labelOnTop,
		}}
		left
	>
		{label && <Text sets={[BOLD, M]}>{label}:</Text>}
		<Text sets={[M]}>{value}</Text>
	</Box>
)

const LeftList = ({title, items, icons, ...rest}) => {
	const Component = icons ? LeftListIconItem : LeftListItemText

	return (
		<Box {...{gap: '0rem'}} column>
			<Box {...{bg: CV_DARKER, padding: '0.5rem 1rem'}} left>
				<Text sets={[L]}>{title}</Text>
			</Box>
			<Box
				{...{
					column: !icons,
					gap: icons ? '1rem' : '0.5rem',
					padding: '0.5rem 1rem 0',
				}}
				left
			>
				{Object.entries(items || {})?.map(([key, val], i) => (
					<Component key={i} {...{...rest, label: key, value: val}} />
				))}
			</Box>
		</Box>
	)
}

const LeftBar = () => {
	return (
		<Box
			{...{
				bg: CV_DARK,
				fg: WHITE,
				width: '50%',
				height: '100%',
				padding: '1rem 0',
			}}
			top
			column
			left
			gap="1rem"
		>
			<Box {...{padding: '0 1rem', gap: '0.5rem'}} column left>
				<Text sets={[XXL]}>
					{FIRST_NAME} {LAST_NAME}
				</Text>
				<Text sets={[L]}>{JOB_TITLE}</Text>
			</Box>
			<Box {...{padding: '0 1rem'}}>
				<ImageBox
					{...{
						src: portrait,
						height: '20rem',
						width: '100%',
						bgSize: '17rem',
						bgPosition: 'center -18px',
					}}
				/>
			</Box>
			<Box gap left column>
				{leftListDB?.map((list, i) => (
					<LeftList key={i} {...list} />
				))}
			</Box>
		</Box>
	)
}

export default LeftBar
