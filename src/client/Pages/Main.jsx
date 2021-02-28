import React from 'react'
import Box from '../Components/Box/Box'
import {sections} from '../Sections/settings'
import {BOLD, Text, XL, XXL} from '../Components/Text'
import {MAIN, ANTI, ACCENT, styled} from 'Styles'
import {useMediaQuery} from 'plugins/MediaQuery'

const UnderLineBox = styled(Box)`
	border-bottom: solid 5px ${ACCENT};
`

export const SectionBox = ({children, id, ...props}) => (
	<Box {...{id, as: 'section', padding: '0 1rem', ...props}}>{children}</Box>
)

export const SecTitle = ({label, ...props}) => {
	const {isPhone} = useMediaQuery()
	return (
		<UnderLineBox inline {...props}>
			<Text sets={[isPhone ? XL : XXL, BOLD]} upperCase>
				{label}
			</Text>
		</UnderLineBox>
	)
}

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
