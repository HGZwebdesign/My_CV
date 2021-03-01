import React from 'react'
import {BLUE1, BLUE1_70, VIOLET1, VIOLET1_70, WHITE} from 'src/client/styles'
import {Box} from '../Box'

export const CVButton = ({children, label, disabled, ...props}) => (
	<Box
		{...{
			type: 'button',
			inline: true,
			padding: '0.3rem 0.5rem',
			cursor: !disabled,
			as: 'button',
			radius: '1111',
			disabled,
			...props,
		}}
	>
		{children || label}
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
