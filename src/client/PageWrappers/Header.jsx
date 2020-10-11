import React from 'react'
import {Box, ContentBox} from 'Components/Box'
import {Link, Text} from 'Components/Text'
import {main, anti, Theme, headerTextTheme} from 'Styles'
import {useLocation} from 'react-router-dom'
import {useMediaQuery} from 'plugins/MediaQuery'
import MenuWithHamburger from 'Components/MenuWithHamburger'

const links = [
	{path: '', label: 'Home'},
	{
		path: 'about',
		label: 'About',
		links: [
			{path: 'about/me', label: 'Me'},
			{path: 'about/you', label: 'You'},
		],
	},
	{
		path: 'gql',
		label: 'GraphQL',
		links: [
			{path: 'gql/superLongName', label: 'Super Long Name'},
			{path: 'gql/you', label: 'You'},
		],
	},
]

const Logo = () => {
	const location = useLocation()
	return (
		<Link noRoute to={`/${location.search}`}>
			<Text set="mAntiBold">HGZ</Text>
		</Link>
	)
}

const Header = () => {
	const {isPhone} = useMediaQuery()

	return (
		<Theme theme={headerTextTheme}>
			<Box {...{bg: main, fg: anti, shadow: 2}}>
				<ContentBox
					{...{
						padding: isPhone ? '0.5rem' : '1rem',
						top: true,
						relative: true,
					}}
				>
					<Box left flex="0">
						<Logo />
					</Box>
					<MenuWithHamburger {...{links}} />
				</ContentBox>
			</Box>
		</Theme>
	)
}

export default Header
