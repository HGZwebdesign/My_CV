import React from 'react'
import {SectionBox} from 'Components/Box'

const Intro = ({id, label}) => {
	return <SectionBox {...{id}}>{label}</SectionBox>
}

export default Intro
