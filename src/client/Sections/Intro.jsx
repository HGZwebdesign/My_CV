import React, {useEffect, useState} from 'react'
import {Box, NarrowContentBox} from 'Components/Box'
import styled from 'styled-components'
import bgImage from 'assets/images/bg.jpg'
import bgImageMin from 'assets/images/bg.min.jpg'
import {ANTI, MAIN, BLUE5, VIOLET2} from '../styles'
import {L, M, Text, XL_BOLD, XXL_BOLD} from '../Components/Text'
import portraitMin from 'assets/images/portrait.min.png'
import portrait from 'assets/images/portrait.png'
import {SectionBox} from './MainPanel'
import {useMediaQuery} from 'plugins/MediaQuery'

const SectionBoxBg = styled(SectionBox)`
	background-image: url(${p => p.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`

const ImgBox = styled(Box)`
	background-image: url(${p => p.img});
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

const useProgressiveImage = src => {
	const [sourceLoaded, setSourceLoaded] = useState()

	useEffect(() => {
		const img = new Image()
		img.src = src
		img.addEventListener('load', () => setSourceLoaded(src))
	}, [src])

	return sourceLoaded
}

const Intro = ({id}) => {
	const loadedImg = useProgressiveImage(portrait)
	const loadedImg2 = useProgressiveImage(bgImage)
	const {isPhone} = useMediaQuery()

	return (
		<SectionBoxBg
			{...{
				bg: MAIN,
				fg: ANTI,
				id,
				minHeight: '100vh',
				img: loadedImg2 || bgImageMin,
			}}
		>
			<NarrowContentBox relative bottom right>
				<TextBox>
					<Box column gap left>
						<Text set={isPhone ? M : L}>MY NAME IS</Text>
						<Box column left gap="0.2rem">
							<Text set={isPhone ? XL_BOLD : XXL_BOLD}>HANNA </Text>
							<Text set={isPhone ? XL_BOLD : XXL_BOLD}>
								GAUDASIŃSKA-ZAPAŚNIK
							</Text>
						</Box>
						<Box
							{...{
								left: true,
								inline: true,
								padding: '0.5rem 1rem',
								bg: VIOLET2,
							}}
						>
							<Text set={isPhone ? M : L}>I'm a web developer</Text>
						</Box>
					</Box>
				</TextBox>
				<ImgBox size={70} img={loadedImg || portraitMin} />
			</NarrowContentBox>
		</SectionBoxBg>
	)
}

export default Intro
