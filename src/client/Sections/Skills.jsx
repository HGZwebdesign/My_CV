import React from 'react'
import {NarrowContentBox} from 'Components/Box'
import {MAIN, VIOLET3_20, VIOLET2_20, VIOLET2, styled} from '../styles'
import {SectionBox, SecTitle} from './MainPanel'
import {L_BOLD, S_BOLD_MAIN, Text} from '../Components/Text'
import Box from '../Components/Box/Box'
import {skillsDB} from '../settings'
import Mover from '../Components/Mover'
import colorsSet from 'assets/images/set_color.png'
import {useMediaQuery} from 'plugins/MediaQuery'

const Dot = styled(Box)`
	width: ${p => p.size || '1.5rem'};
	height: ${p => p.size || '1.5rem'};

	${p => p.theme.radius1111};
	${p => p.theme.shadow1};
`

const Skill = ({label, score}) => (
	<Box key={label} column left gap="0.5rem">
		<Text set={S_BOLD_MAIN} uppercase>
			{label}
		</Text>
		<Box gap="0.5rem" left>
			{[...new Array(6)].map((_, i) => (
				<Dot key={i} {...{bg: i < score ? VIOLET2 : VIOLET2_20}} />
			))}
		</Box>
	</Box>
)

const SkillsGroups = ({groups}) => {
	const {isPhone} = useMediaQuery()
	return (
		<Box gap="4rem" top left column={isPhone}>
			{groups.map((arr, i) => (
				<Box key={i} column left top gap inline>
					{arr.map(({label, score}) => (
						<Skill key={label} {...{label, score}} />
					))}
				</Box>
			))}
		</Box>
	)
}

const SkillsPanel = ({skills}) => {
	return (
		<Box top left column gap="3rem">
			{skills.map(({label, groups}) => (
				<Box key={label} top left gap column>
					<Text set={L_BOLD}>{label}</Text>
					<SkillsGroups {...{groups}} />
				</Box>
			))}
		</Box>
	)
}

const Skills = ({id, label}) => {
	const {isPhone} = useMediaQuery()
	return (
		<SectionBox {...{bg: VIOLET3_20, fg: MAIN, id, top: true}}>
			<NarrowContentBox
				{...{
					top: true,
					padding: '3rem 0',
					column: true,
					left: true,
					gap: '1rem',
				}}
			>
				<Box left padding="0 0 2rem" gap="3rem">
					<SecTitle {...{label}} />
					{!isPhone && (
						<Mover
							{...{
								image: colorsSet,
								outerProps: {margin: '', rigth: true},
							}}
						/>
					)}
				</Box>
				<SkillsPanel {...{skills: skillsDB}} />
			</NarrowContentBox>
		</SectionBox>
	)
}

export default Skills
