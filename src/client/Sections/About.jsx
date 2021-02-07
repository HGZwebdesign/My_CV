import React from 'react'
import {NarrowContentBox} from 'Components/Box'
import {MAIN, VIOLET3_20, VIOLET2_20, styled} from '../styles'
import {SectionBox, SecTitle} from '../Pages/Main'
import {LINK, M, Text} from '../Components/Text'
import Box from '../Components/Box/Box'
import {GITHUB} from './settings'
import {useMediaQuery} from 'plugins/MediaQuery'

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
				<Text sets={[M]}>
					I am a software programmer with 3-years' professional experience,
					specializing in website development.
				</Text>
				<Text sets={[M]}>
					My field of expertise ranges from front-end to 'soft' back-end
					technologies. During my career I was involved in user-interfaces
					creation as well as client-server communication, databases
					architecture design and testing. Moreover my experience gained in the
					previous profession of a market researcher allows me to successfully
					play the role of a client liaison in the field of technological
					analysis of requirements, functionalities implementation and training.
				</Text>
				<Text sets={[M]}>
					Programming is one of my passions too, which confronts me with many
					interesting challenges everyday. Solving them gives me a lot of joy
					and satisfaction.
				</Text>
				<Text sets={[M]}>
					I am looking for job opportunities that will allow me to utilize my
					potential and broaden my skills and knowledge comprehensively, under
					the guidance of experienced mentors. I kindly invite you to look at my{' '}
					<Text
						{...{
							as: 'a',
							set: LINK,
							href: GITHUB,
							target: '_blank',
							rel: 'noopener noreferrer',
						}}
					>
						GitHub
					</Text>{' '}
					portfolio.
				</Text>
			</NarrowContentBox>
		</SectionBoxBg>
	)
}

export default About
