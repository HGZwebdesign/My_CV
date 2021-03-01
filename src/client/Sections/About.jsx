import React from 'react'
import {NarrowContentBox} from 'Components/Box'
import {MAIN, VIOLET3_20, VIOLET2_20, styled} from '../styles'
import {SectionBox, SecTitle} from '../Pages/Main'
import {M, Text} from '../Components/Text'
import Box from '../Components/Box/Box'
import {useMediaQuery} from 'plugins/MediaQuery'
import {aboutDB} from 'config/sections'

const SectionBoxBg = styled(SectionBox)`
	background: linear-gradient(to bottom, ${VIOLET2_20} 0%, ${VIOLET3_20} 100%);
`

const About = ({id, label}) => {
	const {isPhone} = useMediaQuery()
	return (
		<SectionBoxBg {...{fg: MAIN, id, top: true}}>
			<NarrowContentBox
				{...{
					top: true,
					padding: isPhone ? '3rem 0' : '4rem 0',
					column: true,
					left: true,
					gap: '1rem',
				}}
			>
				<Box left={!isPhone} padding="0 0 2rem">
					<SecTitle {...{label}} />
				</Box>
				{aboutDB.map((text, i) => (
					<Text key={i} sets={[M]}>
						{text}
					</Text>
				))}
			</NarrowContentBox>
		</SectionBoxBg>
	)
}

export default About
