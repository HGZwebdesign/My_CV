import React from 'react'
import {NarrowContentBox} from 'Components/Box'
import {ANTI, VIOLET3_20, VIOLET3, styled, VIOLET1_70, css} from '../styles'
import {SectionBox, SecTitle} from '../Pages/Main'
import {BOLD, L, S, Text} from '../Components/Text'
import Box from '../Components/Box/Box'
import {skillsDB} from 'config/sections'
import {useMediaQuery} from 'plugins/MediaQuery'
import ImageBox from '../Components/ImageBox'
import bgImage from 'assets/images/laptop1.min.jpg'
import {ParallaxBanner} from 'react-scroll-parallax'

const ImgBox = styled(ImageBox)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	mix-blend-mode: multiply;
	filter: opacity(0.3) grayscale(1);

	${p =>
		p.isPhone &&
		css`
			background-position-x: -50rem;
		`}
`

const ImgBoxInParallax = props => {
	const {isPhone, isTablet} = useMediaQuery()
	return (
		<ParallaxBanner
			disabled={isTablet}
			style={{
				position: 'absolute',
				height: '100%',
				top: 0,
			}}
			layers={[{amount: 0.1, children: <ImgBox {...{...props, isPhone}} />}]}
		/>
	)
}

const BarNarrow = styled(Box)`
	position: relative;
	height: ${p => p.height};
	background-color: ${VIOLET3};

	::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: ${p => p.height};
		width: calc(${p => p.score} / 6 * 100%);
		background-color: ${VIOLET3_20};
	}
`

const Skill = ({label, score}) => (
	<Box key={label} column left gap="0.5rem">
		<Text sets={[S]}>{label}</Text>
		<BarNarrow {...{score, height: '0.2rem', shadow: 2}} />
	</Box>
)

const Grid = styled(Box)`
	display: grid;
	grid-gap: 4rem;
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
`

const SkillsGroups = ({groups}) => {
	return (
		<Grid top>
			{groups.map((arr, i) => (
				<Box key={i} column left top gap>
					{arr.map(({label, score}) => (
						<Skill key={label} {...{label, score}} />
					))}
				</Box>
			))}
		</Grid>
	)
}

const SkillsPanel = ({skills}) => {
	const {isPhone} = useMediaQuery()
	return (
		<Box top left={!isPhone} column gap="3rem">
			{skills.map(({label, groups}) => (
				<Box key={label} top left={!isPhone} gap column>
					<Text sets={[L, BOLD]}>{label}</Text>
					<SkillsGroups {...{groups}} />
				</Box>
			))}
		</Box>
	)
}

const Skills = ({id, label}) => {
	const {isPhone} = useMediaQuery()
	return (
		<SectionBox
			{...{id, relative: true, bg: VIOLET1_70, fg: ANTI, padding: '3rem 0'}}
			top
		>
			<ImgBoxInParallax {...{src: bgImage, isPhone}} />
			<NarrowContentBox
				{...{
					relative: true,
					top: true,
					padding: isPhone ? '3rem 1rem' : '4rem 1rem',
					column: true,
					left: true,
					gap: '1rem',
				}}
			>
				<Box left={!isPhone} padding="0 0 2rem" gap="3rem">
					<SecTitle {...{label}} />
				</Box>
				<SkillsPanel {...{skills: skillsDB}} />
			</NarrowContentBox>
		</SectionBox>
	)
}

export default Skills
