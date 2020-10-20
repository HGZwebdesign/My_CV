import React from 'react'
import {NarrowContentBox} from 'Components/Box'
import {MAIN, VIOLET3_20, VIOLET2_20, styled} from '../styles'
import {SectionBox, SecTitle} from './MainPanel'
import {Text} from '../Components/Text'
import Box from '../Components/Box/Box'

const SectionBoxBg = styled(SectionBox)`
	background: linear-gradient(to bottom, ${VIOLET2_20} 0%, ${VIOLET3_20} 100%);
`

const About = ({id, label}) => {
	return (
		<SectionBoxBg {...{fg: MAIN, id, top: true}}>
			<NarrowContentBox
				{...{
					top: true,
					padding: '6rem 0.5rem 3rem',
					column: true,
					left: true,
					gap: '1rem',
				}}
			>
				<Box left padding="0 0 2rem">
					<SecTitle {...{label}} />
				</Box>
				<Text>
					I am a graduate of an intensive course for Front-end developer and
					also market researcher with 3-years’ experience. I would like to
					continue my professional career in IT industry, because web designing
					constantly confronts me with interesting
				</Text>
				<Text>
					challenges. Solving them gives me a lot of joy and satisfaction. I am
					looking for a position that will allow me to utilize my
				</Text>
				<Text>
					potential and develop newly gained knowledge and skills. I kindly
					invite you to look at my portfolio on GitHub.eb designing constantly
					confronts me with interesting
				</Text>
				<Text>
					challenges. Solving them gives me a lot of joy and satisfaction. I am
					looking for a position that will allow me to utilize my
				</Text>
			</NarrowContentBox>
		</SectionBoxBg>
	)
}

export default About
