import {styled, css} from 'Styles'

export const XXL = 'XXL'
export const XXL_BOLD = 'XXL_BOLD'
export const XXL_BLUE4 = 'XXL_BLUE4'
export const XL = 'XL'
export const XL_BOLD = 'XL_BOLD'
export const XL_BLUE4 = 'XL_BLUE4'
export const L = 'L'
export const L_BOLD = 'L_BOLD'
export const L_BLUE4 = 'L_BLUE4'
export const L_BOLD_BLUE4 = 'L_BOLD_BLUE4'
export const M = 'M'
export const M_MAIN = 'M_MAIN'
export const M_BOLD_MAIN = 'M_BOLD_MAIN'
export const M_ANTI = 'M_ANTI'
export const M_BOLD_ANTI = 'M_BOLD_ANTI'
export const M_BLUE4 = 'M_BLUE4'
export const M_BOLD_BLUE4 = 'M_BOLD_BLUE4'
export const M_ITALIC_BLUE4 = 'M_ITALIC_BLUE4'
export const S = 'S'
export const S_MAIN = 'S_MAIN'
export const S_BOLD_MAIN = 'S_BOLD_MAIN'
export const S_BLUE4 = 'S_BLUE4'
export const UL = 'UL'
export const S_UL = 'S_UL'
export const OL = 'OL'
export const S_OL = 'S_OL'
export const LINK = 'LINK'

export const Text = styled.span`
	${p => p.theme.text?.css};
	${p => p.theme.text?.[p.set || M]};
	${p => p.upperCase && `text-transform: uppercase`};

	${p => p.cursor && `cursor: pointer`};

	transition: 0.5s;
	${p =>
		p.underlineOnHover &&
		css`
			:hover {
				text-decoration: underline;
			}
		`};
`
