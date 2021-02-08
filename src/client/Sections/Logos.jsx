import React from 'react'
import {MAIN, VIOLET3_20} from '../styles'
import {SectionBox} from '../Pages/Main'

import logos from 'assets/images/logos.png'
import Mover from '../Components/Mover'
import {NarrowContentBox} from '../Components/Box'

const Logos = ({id}) => {
	return (
		<SectionBox {...{bg: VIOLET3_20, fg: MAIN, id}}>
			<NarrowContentBox right>
				{/* <Mover {...{image: logos, outerProps: {width: '30rem', rigth: true}}} /> */}
			</NarrowContentBox>
		</SectionBox>
	)
}

export default Logos
