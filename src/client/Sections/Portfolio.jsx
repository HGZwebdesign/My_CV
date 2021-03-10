import React from 'react'
import {ANTI, MAIN, styled, WHITE} from '../styles'
import {SectionBox, SecTitle} from '../Pages/Main'
import {ContentBox, Box} from '../Components/Box'
import {VIOLET1_COL, BOLD, LINK, M, Text} from '../Components/Text'
import {useMediaQuery} from 'plugins/MediaQuery'
import {GITHUB} from 'config/personal'
import CircleBox from '../Components/Circle'
import {DATA_SCROLL_OFFSET} from '../Components/ScrollLink'

const CircleWrap = styled(Box)`
	position: absolute;
	top: calc(${p => p.size} / -1.5);
	right: 0;
	width: ${p => p.size};
`

const Circle = ({children, size}) => {
	return (
		<CircleWrap {...{size}}>
			<CircleBox {...{size, shapeProps: {bg: ANTI, shadow: 2}}}>
				{children}
			</CircleBox>
		</CircleWrap>
	)
}

const Content = ({label}) => {
	const {isPhone} = useMediaQuery()
	return (
		<Box column gap="2rem">
			<SecTitle {...{label}} />
			<Box gap="0.5rem">
				<Text sets={[M]} center={!isPhone}>
					<Text>Please visit my GitHub account: </Text>
					<Text
						sets={[LINK, VIOLET1_COL, BOLD]}
						as="a"
						href={GITHUB}
						target="_blank"
						rel="noopener noreferrer"
					>
						HGZdev
					</Text>
				</Text>{' '}
			</Box>
		</Box>
	)
}

const Portfolio = ({id, label}) => {
	const {isPhone} = useMediaQuery()
	return (
		<SectionBox
			{...{id, [DATA_SCROLL_OFFSET]: !isPhone && -300, bg: WHITE, fg: MAIN}}
		>
			<ContentBox
				gap
				top
				column
				relative
				{...{padding: isPhone ? '3rem 0' : '0'}}
			>
				{isPhone && <Content {...{label}} />}
				{!isPhone && (
					<Circle {...{size: '18rem'}}>
						<Content {...{label}} />
					</Circle>
				)}
			</ContentBox>
		</SectionBox>
	)
}

export default Portfolio
