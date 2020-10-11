import React from 'react'
import {Box, ContentBox} from 'Components/Box'
import {M_BOLD_ANTI, Text} from 'Components/Text'
import {MAIN, ANTI, Theme, headerTextTheme} from 'Styles'
import {useLocation} from 'react-router-dom'
import {useMediaQuery} from 'plugins/MediaQuery'
import MenuWithHamburger from 'Components/MenuWithHamburger'
import {sections} from '../Sections/settings'

const Logo = () => {
	const location = useLocation()
	return (
		<a to={`/${location.search}`}>
			<Text set={M_BOLD_ANTI}>HGZ</Text>
		</a>
	)
}

const Header = () => {
	const {isPhone} = useMediaQuery()

	return (
		<Theme theme={headerTextTheme}>
			<Box {...{bg: MAIN, fg: ANTI, shadow: 2}}>
				<ContentBox
					{...{
						padding: isPhone ? '0.5rem' : '1rem',
						top: true,
						relative: true,
					}}
				>
					{/* <Box left flex="0">
						<Logo />
					</Box> */}
					<MenuWithHamburger {...{sections}} />
				</ContentBox>
			</Box>
		</Theme>
	)
}

export default Header
