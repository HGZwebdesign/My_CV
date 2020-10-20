import React from 'react'
import {Box, NarrowContentBox} from 'Components/Box'
import styled from 'styled-components'
import bgImage from 'assets/images/bg.jpg'
import {ANTI, MAIN, BLUE5, VIOLET2} from '../styles'
import {L, Text, XXL_BOLD} from '../Components/Text'
import portrait from 'assets/images/portrait.png'
import {SectionBox} from './MainPanel'

const SectionBoxBg = styled(SectionBox)`
	background-image: url(${bgImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`

const ImgBox = styled(Box)`
	background-image: url(${portrait});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: ${p => `calc(${p.size * 0.75}vh)`};
	height: ${p => `${p.size}vh`};

	box-shadow: inset 0px 0px 48px 35px ${BLUE5};
`

const TextBox = styled(Box)`
	position: absolute;
	bottom: 10vh;
	z-index: 1;
`

const Intro = ({id}) => {
	return (
		<SectionBoxBg {...{bg: MAIN, fg: ANTI, id, minHeight: '100vh'}}>
			<NarrowContentBox relative bottom right>
				<TextBox>
					<Box column gap left>
						<Text set={L}>MY NAME IS</Text>
						<Box column left gap="0.2rem">
							<Text set={XXL_BOLD}>HANNA </Text>
							<Text set={XXL_BOLD}>GAUDASIŃSKA-ZAPAŚNIK</Text>
						</Box>
						<Box
							{...{
								left: true,
								inline: true,
								padding: '0.5rem 1rem',
								bg: VIOLET2,
							}}
						>
							<Text set={L}>I'm a web developer</Text>
						</Box>
					</Box>
				</TextBox>
				<ImgBox size={70} />
			</NarrowContentBox>
		</SectionBoxBg>
	)
}

export default Intro
