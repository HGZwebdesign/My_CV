import React, {useEffect, useState} from 'react'
import {Box, ContentBox} from 'Components/Box'
import {MAIN, ANTI, Theme, headerTextTheme} from 'Styles'
import {useMediaQuery} from 'plugins/MediaQuery'
import MenuWithHamburger from 'Components/MenuWithHamburger'
import {sections} from 'config/sections'
import styled from 'styled-components'

const WrapBox = styled(Box)`
	position: fixed;
	top: 0;
	z-index: 100;
`

const Header = () => {
	const {isPhone} = useMediaQuery()
	const [headerWidth, setHeaderWidth] = useState(1.5)

	const listenScrollEvent = () => {
		// eslint-disable-next-line no-unused-expressions
		window.scrollY > 100 ? setHeaderWidth(0.5) : setHeaderWidth(1.5)
	}

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent)
	})

	return (
		<Theme theme={headerTextTheme}>
			<WrapBox {...{bg: MAIN, fg: ANTI, shadow: 2}}>
				<ContentBox
					{...{
						padding: isPhone ? '0.5rem' : `${headerWidth}rem 1rem`,
						top: true,
						relative: true,
					}}
				>
					<MenuWithHamburger {...{items: sections}} />
				</ContentBox>
			</WrapBox>
		</Theme>
	)
}

export default Header
