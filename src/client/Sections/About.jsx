import React from 'react'
import {MAIN, VIOLET3_20, VIOLET2_20, styled} from '../styles'
import {SectionBox, SecTitle} from '../Pages/Main'
import {M, Text} from '../Components/Text'
import Box from '../Components/Box/Box'
import {useMediaQuery} from 'plugins/MediaQuery'
import {aboutDB} from 'config/sections'
import {ContentBox} from '../Components/Box'
import ImageBox from '../Components/ImageBox'
import img from 'assets/images/note1.min.jpg'

const ImgBox = styled(ImageBox)`
	mix-blend-mode: luminosity;
`

const SectionBoxBg = styled(SectionBox)`
	background: linear-gradient(to bottom, ${VIOLET2_20} 0%, ${VIOLET3_20} 100%);
`

const About = ({id, label}) => {
	const {isPhone} = useMediaQuery()
	return (
		<SectionBoxBg {...{fg: MAIN, id, top: true}}>
			<ContentBox
				{...{padding: isPhone ? '3rem 0' : '8rem 0', gap: '3rem'}}
				left
				bottom
			>
				{!isPhone && <ImgBox {...{src: img, width: '70%', height: '38rem'}} />}

				<Box left column gap>
					<Box left={!isPhone} padding="0 0 2rem">
						<SecTitle {...{label}} />
					</Box>
					<Box column left gap>
						{aboutDB.map((text, i) => (
							<Text key={i} sets={[M]}>
								{text}
							</Text>
						))}
					</Box>
				</Box>
			</ContentBox>
		</SectionBoxBg>
	)
}

export default About
