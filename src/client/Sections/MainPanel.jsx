import React from 'react'
import Box from '../Components/Box/Box'
import {MAIN, ANTI} from 'Styles'
import {sections} from './settings'

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
