import React from 'react'
import {Box} from 'Components/Box'
import {WHITE, CV_DARK, CV_DARKER} from 'Styles'
import {FIRST_NAME, JOB_TITLE, LAST_NAME} from 'config/personal'
import {BOLD, L, M, Text, XXL} from '../../Components/Text'
import portrait from 'assets/images/portrait.png'
import ImageBox from '../../Components/ImageBox'
import {leftListDB} from 'config/cv'

const LeftList = ({title, items, inline}) => {
	return (
		<Box {...{gap: '0.5rem'}} column>
			<Box {...{bg: CV_DARKER, padding: '0.5rem 1rem'}} left>
				<Text sets={[L]}>{title}</Text>
			</Box>
			<Box left column gap="0.5rem">
				{Object.entries(items || {})?.map(([key, val], i) => (
					<Box
						key={i}
						{...{padding: '0 1rem', gap: '0.2rem', column: inline}}
						left
					>
						{key && <Text sets={[BOLD, M]}>{key}:</Text>}
						<Text sets={[M]}>{val}</Text>
					</Box>
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
