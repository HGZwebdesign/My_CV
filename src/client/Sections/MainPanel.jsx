import React from 'react'
import Box from '../Components/Box/Box'
import {sections} from '../settings'
import {Text, XL_BOLD} from '../Components/Text'
import {MAIN, ANTI, ACCENT, styled} from 'Styles'

const UnderLineBox = styled(Box)`
	border-bottom: solid 5px ${ACCENT};
`

export const SectionBox = ({children, id, ...props}) => (
	<Box {...{id, as: 'section', ...props}}>{children}</Box>
)

export const SecTitle = ({label, ...props}) => (
	<UnderLineBox inline {...props}>
		<Text set={XL_BOLD} upperCase>
			{label}
		</Text>
	</UnderLineBox>
)

const MainPanel = () => {
	return (
		<Box column top {...{bg: ANTI, fg: MAIN}}>
			{sections
				.filter(({Component}) => Component)
				.map(sec => (
					<sec.Component key={sec.id} {...sec} />
				))}
		</Box>
	)
}

export default MainPanel
