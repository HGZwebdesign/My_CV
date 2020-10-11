import React from 'react'
import {styled, css} from 'Styles'
import {Link as LinkOrg} from 'react-router-dom'

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

// TODO noRoute is a hot fix - need for better solution
export const Link = ({noRoute, to, ...p}) => (
	<Text
		set="link"
		underlineOnHover
		{...p}
		link
		cursor
		to={to}
		as={noRoute ? 'a' : LinkOrg}
		href={noRoute && to}
	/>
)
