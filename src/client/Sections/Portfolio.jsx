import React from 'react'
import {SectionBox} from './MainPanel'

const Portfolio = ({id, label}) => {
	return <SectionBox {...{id}}>{label}</SectionBox>
}

export default Portfolio
