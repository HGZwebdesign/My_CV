import React from 'react'
import {NarrowContentBox} from 'Components/Box'
import {MAIN, VIOLET3_20, VIOLET2_20, styled} from '../styles'
import {SectionBox, SecTitle} from '../Pages/Main'
import {LINK, M, Text} from '../Components/Text'
import Box from '../Components/Box/Box'
import {GITHUB} from './settings'

const SectionBoxBg = styled(SectionBox)`
	background: linear-gradient(to bottom, ${VIOLET2_20} 0%, ${VIOLET3_20} 100%);
`

const About = ({id, label}) => {
	return (
		<SectionBoxBg {...{fg: MAIN, id, top: true}}>
			<NarrowContentBox
				{...{
					top: true,
					padding: '6rem 0 3rem',
					column: true,
					left: true,
					gap: '1rem',
				}}
			>
				<Box left padding="0 0 2rem">
					<SecTitle {...{label}} />
				</Box>
				<Text>
					I am a software programmer with 3-years' professional experience,
					specializing in website development.
				</Text>
				<Text>
					My field of expertise ranges from front-end to 'soft' back-end
					technologies. During my career I was involved in website styling and
					UX/UI creation as well as client-server communication and databases
					architecture design. Moreover my experience gained in the previous
					profession of a market researcher allows me to successfully play the
					role of a liaison with customers at both technical and the needs
					analysis dimensions.
				</Text>
				<Text>
					Programming is one of my passions too, which confronts me with many
					interesting challenges everyday. Solving them gives me a lot of joy
					and satisfaction.
				</Text>
				<Text>
					I am looking for job opportunities that will allow me to utilize my
					potential and broaden my skills and knowledge. I kindly invite you to
					look at my{' '}
					<Text
						{...{
							as: 'a',
							set: 'link',
							href: 'https://github.com/HGZdev',
							target: '_blank',
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
