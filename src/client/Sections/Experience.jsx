import {useMediaQuery} from 'plugins/MediaQuery'
import React, {Fragment} from 'react'
import {Box, NarrowContentBox} from 'Components/Box'
import {SectionBox, SecTitle} from '../Pages/Main'
import {ANTI, MAIN, VIOLET2_20} from '../styles'
import {jobsDB, eduDB, workshopsDB} from './settings'
import {
	M,
	XS,
	Text,
	MAIN_COL,
	BOLD,
	VIOLET1_COL,
	S,
	UL,
	THIN,
	XL,
	L,
} from '../Components/Text'
// import {useReactToPrint} from 'react-to-print'
// import {Button} from '../Components/Button'

import styled from 'styled-components'

const Line = styled(Box)`
	border-top: 2px dashed ${MAIN};
`

const makeDate = dateArr =>
	dateArr?.length &&
	[dateArr[0], dateArr[1] < 10 ? ('0' + dateArr[1]).slice(-2) : dateArr[1]]
		.reverse()
		.join('.')

const Card = ({start, end, main, sub, desc, descArr}) => {
	const {isPhone} = useMediaQuery()
	const startStr = makeDate(start)
	const endStr = makeDate(end)
	const date = `${startStr} - ${endStr ? endStr : ''}`
	return (
		<Box
			{...{
				bg: ANTI,
				fg: MAIN,
				padding: '1rem',
				radius: '1111',
				shadow: 1,
				column: isPhone,
			}}
			gap={isPhone ? '0.3rem' : '1rem'}
			top
			left
		>
			<Box left maxWidth={!isPhone && '10%'}>
				<Text sets={[isPhone ? XS : M, MAIN_COL]}>{date}</Text>
			</Box>
			<Box column left gap="0.5rem">
				<Box left column gap="0.3rem">
					<Text sets={[L, BOLD, MAIN_COL]}>{main}</Text>
					<Text sets={[isPhone ? S : M, BOLD, VIOLET1_COL]}>{sub}</Text>
				</Box>
				{desc && <Text sets={[S, THIN]}>{desc}</Text>}
				{descArr && (
					<Box left column gap="0.5rem" as="ul" padding="0 0 0 1rem">
						{descArr.map((s, i) => (
							<Text key={i} sets={[S, UL, THIN]} as="li">
								{s}
							</Text>
						))}
					</Box>
				)}
			</Box>
		</Box>
	)
}

const Panel = ({title, items}) => {
	if (!items?.length) return false

	return (
		<Box column gap="1rem" left>
			{title && <Text sets={[XL, BOLD]}>{title}</Text>}
			<Box column gap="2rem">
				{items.map((job, i) => (
					<Fragment key={i}>
						<Card key={i} {...job} />
						{job.addBreak && <Line maxWidth="80%" />}
					</Fragment>
				))}
			</Box>
		</Box>
	)
}

const Experience = ({id, label}) => {
	const {isPhone} = useMediaQuery()
	return (
		<SectionBox {...{bg: VIOLET2_20, fg: MAIN, id, top: true}}>
			<NarrowContentBox
				{...{
					top: true,
					padding: isPhone ? '3rem 0' : '4rem 0',
					column: true,
					left: true,
					gap: '1rem',
				}}
			>
				<Box left={!isPhone} padding="0 0 2rem" gap="3rem">
					<SecTitle {...{label}} />
				</Box>
				<Box column left gap="4rem">
					<Panel {...jobsDB} />
					<Panel {...workshopsDB} />
					<Panel {...eduDB} />
				</Box>
			</NarrowContentBox>
		</SectionBox>
	)
}
export default Experience
