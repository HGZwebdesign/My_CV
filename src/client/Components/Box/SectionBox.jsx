import React from 'react'
import {Box} from 'Components/Box'

const SectionBox = ({children, id, ...props}) => (
	<Box {...{id, as: 'section', minHeight: '40rem', ...props}}>{children}</Box>
)

export default SectionBox
