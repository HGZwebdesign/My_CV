import React from 'react'
import {SectionBox} from 'Components/Box'

const Skills = ({id, label}) => {
	return <SectionBox {...{id}}>{label}</SectionBox>
}

export default Skills
