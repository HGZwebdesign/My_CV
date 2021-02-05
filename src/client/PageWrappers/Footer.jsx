import React from 'react'
import {MAIN, Theme, headerTextTheme, ANTI} from 'Styles'
import {Box, ContentBox} from 'Components/Box'
import {useMediaQuery} from 'plugins/MediaQuery'

const Footer = () => {
	const {isPhone} = useMediaQuery()

	return (
		<Theme theme={headerTextTheme}>
			<Box {...{id: 'footer', bg: MAIN, fg: ANTI, shadow: 22}}>
				<ContentBox {...{padding: '1rem', column: isPhone}}>
					<Box fg={ANTI} right={!isPhone}>
						<a href="mailto: HGZwebdesign@gmail.com">
							HGZ &copy; {new Date().getFullYear()}
						</a>
					</Box>
				</ContentBox>
			</Box>
		</Theme>
	)
}

export default Footer
