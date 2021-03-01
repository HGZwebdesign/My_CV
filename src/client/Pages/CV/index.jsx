import React, {useRef} from 'react'
import {Box} from 'Components/Box'
import {Theme, CVTextTheme, CV_LIGHT, WHITE} from 'Styles'
import {FIRST_NAME, LAST_NAME} from 'config/personal'
import {useReactToPrint} from 'react-to-print'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import {BlueButton, VioletButton} from 'src/client/Components/Buttons'
import Link from 'src/client/Components/Link'
import {M} from 'src/client/Components/Text'

const CVPanel = ({cvRef}) => {
	return (
		<Box
			{...{
				ref: cvRef,
				bg: WHITE,
				padding: '1rem',
				height: '29.6cm',
			}}
			top
		>
			<LeftBar />
			<RightBar />
		</Box>
	)
}

const Buttons = ({handlePrint}) => {
	return (
		<Box {...{padding: '1rem 1rem'}} top left gap>
			<Link {...{as: Link, to: '/'}}>
				<BlueButton>Go to full CV page</BlueButton>
			</Link>
			<VioletButton {...{onClick: handlePrint, sets: [M]}}>Print</VioletButton>
		</Box>
	)
}

const CV = () => {
	const cvRef = useRef()
	const handlePrint = useReactToPrint({
		content: () => cvRef.current,
		documentTitle: `${LAST_NAME} ${FIRST_NAME} - CV`,
	})
	return (
		<Box {...{bg: CV_LIGHT, top: true, padding: '0 0 1rem'}}>
			<Theme theme={CVTextTheme}>
				<Box top column {...{width: '21cm'}}>
					<Buttons {...{handlePrint}} />
					<CVPanel {...{cvRef}} />
				</Box>
			</Theme>
		</Box>
	)
}

export default CV
