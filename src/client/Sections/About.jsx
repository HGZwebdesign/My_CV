import React from 'react'
import {SectionBox} from 'Components/Box'

const About = ({id, label}) => {
	return <SectionBox {...{id}}>{label}</SectionBox>
}

export default About
