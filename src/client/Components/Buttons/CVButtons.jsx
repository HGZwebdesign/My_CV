import React from 'react'
import {BLUE1, BLUE1_70, VIOLET1, VIOLET1_70, WHITE} from 'src/client/styles'
import {Box} from '../Box'
import {Text} from '../Text'

export const CVButton = ({
	children,
	label,
	sets,
	disabled,
	to,
	href,
	onClick,
	...props
}) => (
	<Box
		{...{
			type: 'button',
			inline: true,
			padding: '0.3rem 0.5rem',
			cursor: !disabled,
			as: (to || href || onClick) && 'button',
			radius: '1111',
			disabled,
			to,
			href,
			onClick,
			...props,
		}}
	>
		{sets ? <Text {...{sets}}>{children || label}</Text> : children || label}
	</Box>
)

export const BlueButton = ({...p}) => (
	<CVButton
		{...{
			bg: BLUE1,
			fg: WHITE,
			hoverBg: BLUE1_70,
			...p,
		}}
	/>
)

export const VioletButton = ({...p}) => (
	<CVButton
		{...{
			bg: VIOLET1,
			fg: WHITE,
			hoverBg: VIOLET1_70,
			...p,
		}}
	/>
)
