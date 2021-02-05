import React from 'react'
import {SectionBox} from './MainPanel'

const Experience = ({id, label}) => {
	return <SectionBox {...{id}}>{label}</SectionBox>
}

export default Experience
