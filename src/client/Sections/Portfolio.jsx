import React from 'react'
import {MAIN, WHITE, styled, BLACK} from '../styles'
import {SectionBox, SecTitle} from './MainPanel'
import {ContentBox, Box} from '../Components/Box'
import {projectsDB} from '../settings'
import {M, M_BOLD_MAIN, Text} from '../Components/Text'

const ImgBox = styled(Box)`
	background-image: url(${p => p.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: ${p => `${p.size}vh`};
	height: ${p => `${p.size}vh`};

	/* box-shadow: 0px 0px 48px 35px ${BLACK}; */
`

const Portfolio = ({id, label}) => {
	return (
		<SectionBox {...{bg: WHITE, fg: MAIN, id}}>
			<ContentBox
				{...{
					padding: '6rem 0 3rem',
					top: true,
					gap: '1rem',
					column: true,
				}}
			>
				<Box padding="0 0 2rem">
					<SecTitle {...{label}} />
				</Box>
				<Box wrap gap>
					{projectsDB?.map(({src, label, link}) => (
						<a href={link} target="_blank" rel="noopener noreferrer">
							<ImgBox shadow={2} size={30} img={src}>
								<Text set={M_BOLD_MAIN}> {label}</Text>
							</ImgBox>
						</a>
					))}
				</Box>
				<Box padding="2rem 0 " gap="0.5rem" left>
					<Text set={M}>Please check my GitHub account:</Text>
					<Text
						set={M_BOLD_MAIN}
						as="a"
						href="https://github.com/HGZdev"
						target="_blank"
						rel="noopener noreferrer"
					>
						HGZdev
					</Text>
				</Box>
			</ContentBox>
		</SectionBox>
	)
}

export default Portfolio
