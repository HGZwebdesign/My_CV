import React from 'react'
import {MAIN, WHITE} from '../styles'
import {SectionBox, SecTitle} from '../Pages/Main'
import {ContentBox, Box} from '../Components/Box'
import {GITHUB, projectsDB} from './settings'
import {BOLD, LINK, M, MAIN_COL, Text} from '../Components/Text'
import ImageBox from '../Components/ImageBox'
import {useMediaQuery} from 'plugins/MediaQuery'

const Portfolio = ({id, label}) => {
	const {isPhone} = useMediaQuery()
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
				<Box wrap gap="3rem">
					{projectsDB?.map(({src, label, link}) => (
						<Text
							key={label}
							sets={[LINK]}
							as="a"
							href={link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ImageBox shadow={2} size={isPhone ? '80vw' : '20vw'} src={src}>
								<Text sets={[M, BOLD, MAIN_COL]}> {label}</Text>
							</ImageBox>
						</Text>
					))}
				</Box>
				<Box padding="2rem 0" gap="0.5rem" left>
					<Text>
						<Text sets={[M]}>Please check my GitHub account:</Text>{' '}
						<Text
							sets={[LINK]}
							as="a"
							href={GITHUB}
							target="_blank"
							rel="noopener noreferrer"
						>
							HGZdev
						</Text>
					</Text>
				</Box>
			</ContentBox>
		</SectionBox>
	)
}

export default Portfolio
