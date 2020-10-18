import React from 'react'
import {Box, ContentBox} from 'Components/Box'
import {MAIN, ANTI, Theme, headerTextTheme} from 'Styles'
import {useMediaQuery} from 'plugins/MediaQuery'
import MenuWithHamburger from 'Components/MenuWithHamburger'
import {sections} from '../Sections/settings'
import styled from 'styled-components'

const WrapBox = styled(Box)`
	position: fixed;
	top: 0;
	z-index: 100;
`

const Header = () => {
	const {isPhone} = useMediaQuery()

	return (
		<Theme theme={headerTextTheme}>
			<WrapBox {...{bg: MAIN, fg: ANTI, shadow: 2}}>
				<ContentBox
					{...{
						padding: isPhone ? '0.5rem' : '1rem',
						top: true,
						relative: true,
					}}
				>
					<MenuWithHamburger {...{sections}} />
				</ContentBox>
			</WrapBox>
		</Theme>
	)
}

export default Header
