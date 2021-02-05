/* eslint-disable complexity */
import {css} from 'styled-components'
import {ACCENT, BLUE4, WHITE, BLUE2, ANTI, MAIN} from './colors'

import {
	XXL,
	XXL_BOLD,
	XXL_BLUE4,
	XL,
	XL_BLUE4,
	L,
	XL_BOLD,
	L_BLUE4,
	L_BOLD_BLUE4,
	M,
	M_BLUE4,
	M_BOLD_BLUE4,
	M_ITALIC_BLUE4,
	S,
	S_BLUE4,
	UL,
	S_UL,
	OL,
	S_OL,
	LINK,
	M_MAIN,
	M_BOLD_MAIN,
	S_MAIN,
	S_BOLD_MAIN,
	M_ANTI,
	M_BOLD_ANTI,
	L_BOLD,
} from '../Components/Text'

export const defaultTheme = {contentWidth: '64rem', gap: '1rem'}

const defaultColorsTheme = {
	colorsCss: css`
		${p =>
			css`
				color: ${p.fg || p.theme.fg};
				background-color: ${p.bg || p.theme.bg};

				transition: 0.5s;
				& :hover {
					color: ${p.hoverFg || p.theme.hoverFg};
					background-color: ${p.hoverBg || p.theme.hoverBg};
				}
			`}
	`,
}

const defaultTextTheme = {
	text: {
		css: css`
			${p => p.theme.text?.font};
			${p => p.theme.text?.size?.m};
		`,
		size: {
			xxl: 2.5, // rem
			xl: 2,
			l: 1.5,
			m: 1,
			s: 0.9,
		},
		font: css`
			font-family: 'Quicksand', sans-serif;
		`,

		[XXL]: css`
			font-size: ${p => p.theme.text.size.xxl}rem;
			line-height: 1.1;
		`,
		[XXL_BOLD]: css`
			${p => p.theme.text[XXL]};
			font-weight: 600;
		`,
		[XXL_BLUE4]: css`
			${p => p.theme.text[XXL]};
			color: ${BLUE4};
		`,

		[XL]: css`
			font-size: ${p => p.theme.text.size.xl}rem;
			line-height: 1.3;
		`,
		[XL_BOLD]: css`
			${p => p.theme.text[XL]};
			font-weight: 600;
		`,
		[XL_BLUE4]: css`
			${p => p.theme.text[XL]};
			color: ${BLUE4};
		`,

		[L]: css`
			font-size: ${p => p.theme.text.size.l}rem;
			line-height: 1.3;
		`,
		[L_BOLD]: css`
			${p => p.theme.text[L]};
			font-weight: 600;
		`,
		[L_BLUE4]: css`
			${p => p.theme.text[L]};
			color: ${BLUE4};
		`,
		[L_BOLD_BLUE4]: css`
			${p => p.theme.text[L]};
			font-weight: 600;
			color: ${BLUE4};
		`,

		[M]: css`
			font-size: ${p => p.theme.text.size.m}rem;
			line-height: 1.8;
		`,
		[M_BLUE4]: css`
			${p => p.theme.text[M]};
			color: ${BLUE4};
		`,
		[M_MAIN]: css`
			${p => p.theme.text[M]};
			color: ${MAIN};
		`,
		[M_BOLD_MAIN]: css`
			${p => p.theme.text[M]};
			font-weight: 600;
			color: ${MAIN};
		`,
		[M_ANTI]: css`
			${p => p.theme.text[M]};
			color: ${ANTI};
		`,
		[M_BOLD_ANTI]: css`
			${p => p.theme.text[M]};
			font-weight: 600;
			color: ${ANTI};
		`,
		[M_BOLD_BLUE4]: css`
			${p => p.theme.text[M]};
			font-weight: 600;
			color: ${BLUE4};
		`,
		[M_ITALIC_BLUE4]: css`
			${p => p.theme.text[M]};
			font-style: italic;
			color: ${BLUE4};
		`,

		[S]: css`
			font-size: ${p => p.theme.text.size.s}rem;
		`,
		[S_MAIN]: css`
			${p => p.theme.text[S]};
			color: ${MAIN};
		`,
		[S_BOLD_MAIN]: css`
			${p => p.theme.text[S]};
			font-weight: 600;
			color: ${MAIN};
		`,
		[S_BLUE4]: css`
			${p => p.theme.text[S]};
			color: ${BLUE4};
		`,

		[UL]: css`
			list-style: square outside;
		`,
		[S_UL]: css`
			font-size: ${p => p.theme.text.size.s}rem;
			${p => p.theme.text[UL]};
		`,

		[OL]: css`
			list-style: decimal outside;
		`,
		[S_OL]: css`
			font-size: ${p => p.theme.text.size.s}rem;
			${p => p.theme.text[OL]};
		`,

		[LINK]: css`
			font-weight: 600;
			color: ${BLUE2};
			:hover {
				text-decoration: underline;
				color: ${ACCENT};
			}
		`,
	},
}

export const headerTextTheme = {
	text: {
		link: css`
			font-weight: normal;
			color: ${WHITE};
			:hover {
				text-decoration: underline;
				color: ${ACCENT};
			}
		`,
	},
}

export const defaultRadiusTheme = {
	radius: 5 /* px */,

	radiusRound: css`
		border-radius: 500px;
	`,

	radius1111: css`
		border-radius: ${p => p.theme.radius}px;
	`,

	radius1100: css`
		border-radius: ${p => p.theme.radius}px ${p => p.theme.radius}px 0 0;
	`,

	radius1001: css`
		border-radius: ${p => p.theme.radius}px 0 0 ${p => p.theme.radius}px;
	`,

	radius0110: css`
		border-radius: 0 ${p => p.theme.radius}px ${p => p.theme.radius}px 0;
	`,

	radiusCss: css`
		${p => {
			let radius
			switch (p.radius) {
				case 'round':
					radius = p.theme.radiusRound
					break
				case '1111':
					radius = p.theme.radius1111
					break
				case '1100':
					radius = p.theme.radius1100
					break
				case '1001':
					radius = p.theme.radius1001
					break
				case '0110':
					radius = p.theme.radius0110
					break
				default:
					break
			}
			return radius
		}}
	`,
}

export const defaultShadowTheme = {
	shadow1: css`
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	`,

	shadow11: css`
		box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	`,

	shadow2: css`
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	`,

	shadow22: css`
		box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 -3px 6px rgba(0, 0, 0, 0.23);
	`,

	shadowCss: css`
		${p => {
			let shadow
			switch (p.shadow) {
				case 1:
					shadow = p.theme.shadow1
					break
				case 11:
					shadow = p.theme.shadow11
					break
				case 2:
					shadow = p.theme.shadow2
					break
				case 22:
					shadow = p.theme.shadow22
					break
				default:
					break
			}
			return shadow
		}}
	`,
}

export const defaultAppBoxTheme = {
	boxCss: css`
		${p => p.theme.colorsCss};
		${p => p.theme.radiusCss};
		${p => p.theme.shadowCss};
		${p => p.cursor && `cursor: pointer;`};
	`,
}

// TODO button styling
// export const defaultButtonTheme = {
// 	button: {
// 		clr,
// 		disabledClr,
// 		btnLength: {
// 			compact: 0.4,
// 			long: 1.5,
// 		},
// 		btnHeight: {
// 			xsmall: 1.2,
// 			small: 1.5,
// 			medium: 1.9,
// 			large: 2.5,
// 			xlarge: 3,
// 		},
// 		textCss: css`
// 			/* only basic text styling props: font-size, font-style */
// 		`,
// 		focusCss: css``,
// 		css: css`
// 			${p => p.theme.button.focusCss || p.theme.focusCss};
// 			${p => {
// 				const btnLength =
// 					p.theme.button?.btnLength &&
// 					Object.entries(p.theme.button?.btnLength).find(obj => p[obj[0]])?.[1]

// 				const btnHeight =
// 					(p.theme.button?.btnHeight &&
// 						Object.entries(p.theme.button?.btnHeight).find(
// 							obj => p[obj[0]]
// 						)?.[1]) ||
// 					1.8

// 				return {
// 					padding: p.padding
// 						? p.padding
// 						: `0 ${btnLength ? btnHeight * btnLength : btnHeight / 2}rem`,
// 					minHeight:
// 						p.padding || p.minHeight || (btnHeight && `${btnHeight}rem`),
// 					width: p.width || (p.fullWidth && '100%'),
// 					// Never overflow containers
// 					maxWidth: p.maxWidth || '100%',

// 					whiteSpace: p.wrap ? 'normal' : 'nowrap',
// 					// left/right props align text in children tags: <p>text</p>
// 					textAlign: p.left ? 'left' : p.right && 'right',

// 					color: p.disabled
// 						? getHint({...p, clr: null}, 'button.disabledClr')
// 						: getFg(p, 'button.clr'),
// 					backgroundColor: p.disabled
// 						? getBg({...p, clr: null}, 'button.disabledClr')
// 						: getBg(p, 'button.clr'),
// 					border:
// 						p.border && p.disabled
// 							? `thin solid ${getFg({...p, clr: null}, 'button.disabledClr')}`
// 							: p.disabled
// 							? `thin solid ${getBg({...p, clr: null}, 'button.disabledClr')}`
// 							: p.border
// 							? `thin solid ${getFg({...p, clr: null}, 'button.clr')}`
// 							: `thin solid ${getBg({...p, clr: null}, 'button.clr')}`,

// 					transition: p.theme.transition,
// 					'&:hover': !p.disabled &&
// 						!p.noHover && {
// 							color: getHoverFg(p, 'button.clr'),
// 							backgroundColor: getHoverBg(p, 'button.clr'),
// 							border: p.border && `thin solid ${getHoverFg(p, 'button.clr')}`,
// 						},
// 					'&:focus': p.disabled && {outline: 'none', boxShadow: 'none'},
// 				}
// 			}};
// 			${p => p.theme.button?.textCss};
// 		`,
// 	},
// }

export const defaultThemesSet = [
	defaultTheme,
	defaultColorsTheme,
	defaultTextTheme,
	defaultRadiusTheme,
	defaultShadowTheme,
	defaultAppBoxTheme,
	// defaultAppButtonTheme,
]
