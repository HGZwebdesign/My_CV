import React, {useState} from 'react'
import {Box} from 'Components/Box'
import {Text} from 'Components/Text'
import {styled, css, main, anti} from 'Styles'
import {useLocation} from 'react-router-dom'
import {useMediaQuery} from 'plugins/MediaQuery'

const MenuInput = styled(Box)``

const MenuLabel = styled(Box)``

const MenuIcon = styled(Box).attrs({
	size: 2, // px,
})`
	position: absolute;
	height: ${p => p.size}px;
	width: 100%;

	background-color: ${anti};
	border-radius: 5px;

	::before,
	::after {
		content: '';
		position: absolute;
		left: 0;
		height: ${p => p.size}px;
		width: 100%;

		background: ${anti};
		border-radius: 5px;

		transition: 0.3s ease-in-out;
	}
	::before {
		top: -${p => p.size * 3}px;
	}
	::after {
		bottom: -${p => p.size * 3}px;
	}
`

const ListWrap = styled(Box)`
	${p =>
		p.isPhone &&
		css`
			padding: 0.5rem;
			display: none;

			position: fixed;
			top: 2.7rem;
			left: 0;
			width: 100vw;
			max-height: calc(100vh - 2.7rem);
			height: 0;

			background-color: ${main};

			/* overflow stuff */
			overflow-x: hidden;
			overflow-y: scroll;
			/* IE 10+ */
			-ms-overflow-style: none;
			/* Firefox */
			scrollbar-width: none;

			/* Safari and Chrome */
			::-webkit-scrollbar {
				display: none;
			}
		`}
`

const ListItem = ({path, label, links}) => {
	const location = useLocation()
	const [open, setOpen] = useState()
	const {isPhone} = useMediaQuery()
	return (
		<Box
			{...{
				as: 'li',
				column: true,
				left: true,
				padding: isPhone && '0 0 0 0.5rem',
				inline: !isPhone,
			}}
		>
			<Box gap spaceBetween>
				<a to={`/${path}${location.search}`}>
					<Text set="mAnti">{label}</Text>
				</a>
				{isPhone && links && (
					<Box
						{...{
							right: true,
							inline: true,
							padding: '0.5rem',
							as: 'a',
							onClick: () => setOpen(!open),
						}}
					>
						{open ? '-' : '+'}
					</Box>
				)}
			</Box>
			{open && (
				<Box as="ul" top column left>
					{links?.map((item, i) => (
						<ListItem key={i} {...item} />
					))}
				</Box>
			)}
		</Box>
	)
}

const List = ({links}) => {
	const {isPhone} = useMediaQuery()
	if (!links) return false
	return (
		<ListWrap
			{...{
				as: 'ul',
				gap: '0.5rem',
				top: true,
				right: !isPhone,
				left: isPhone,
				column: isPhone,
				isPhone,
			}}
		>
			{links.map((item, i) => (
				<ListItem key={i} {...item} />
			))}
		</ListWrap>
	)
}

const MenuWrap = styled(Box)`
	${MenuLabel} {
		z-index: 1;
		position: relative;
		width: 1.5rem;
		height: 1.5rem;
	}

	${MenuInput} {
		opacity: 0;

		&:checked ~ {
			${MenuLabel} ${MenuIcon} {
				background: transparent;
				::before {
					top: 0;
					transform: rotate(45deg);
				}
				::after {
					bottom: 0;
					transform: rotate(-45deg);
				}
			}

			${List} {
				transition: all 0.3s ease-in;
				${ListWrap} {
					display: flex;
					height: auto;
					/* height: 100%; // well defined height guarantees proper animation */
				}
			}
		}
	}
`

const MenuWithHamburger = ({links}) => {
	const {isPhone} = useMediaQuery()
	if (!links) return false
	return (
		<MenuWrap right>
			{isPhone && (
				<>
					<MenuInput as="input" type="checkbox" id="menu-input" />
					<MenuLabel as="label" htmlFor="menu-input" inline cursor>
						<MenuIcon />
					</MenuLabel>
				</>
			)}
			<List {...{links}} />
		</MenuWrap>
	)
}

export default MenuWithHamburger
