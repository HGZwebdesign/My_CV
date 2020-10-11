import React from 'react'
import {main, Theme, accent, headerTextTheme, anti} from 'Styles'
import {Box, ContentBox} from 'Components/Box'
import {useMediaQuery} from 'plugins/MediaQuery'

const Footer = () => {
	const {isPhone} = useMediaQuery()

	return (
		<Theme theme={headerTextTheme}>
			<Box {...{bg: main, fg: anti, shadow: 22}}>
				<ContentBox {...{padding: '1rem', column: isPhone}}>
					<Box fg={accent} right={!isPhone}>
						<a href="mailto: HGZwebdesign@gmail.com">HGZ &copy; 2020</a>
					</Box>
				</ContentBox>
			</Box>
		</Theme>
	)
}

export default Footer
