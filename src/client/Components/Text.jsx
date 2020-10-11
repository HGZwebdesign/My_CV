import React from 'react'
import {styled, css} from 'Styles'

const Span = styled.span`
	${p => p.theme.text?.css};
	${p => p.theme.text?.[p.set]};

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

export const Text = p => <Span {...p} />
