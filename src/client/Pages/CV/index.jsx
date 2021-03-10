import React, {useRef} from 'react'
import {Box} from 'Components/Box'
import {Theme, CVTextTheme, CV_LIGHT, WHITE} from 'Styles'
import {FIRST_NAME, LAST_NAME} from 'config/personal'
import {useReactToPrint} from 'react-to-print'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import {BlueButton, VioletButton} from 'src/client/Components/Buttons'
import Link from 'src/client/Components/Link'
import {M, Text} from 'src/client/Components/Text'
import {useMediaQuery} from 'plugins/MediaQuery'
import styled from 'styled-components'
import ImageBox from 'src/client/Components/ImageBox'
import cvPreview from 'assets/images/cv-preview.png'
// eslint-disable-next-line import/no-unresolved
import {jsPDF} from 'jspdf'
import {toPng} from 'html-to-image'

const ImgBox = styled(ImageBox)`
	width: 87%;
	padding-top: 127%;
	filter: blur(3px);
`

const WrapBox = styled(Box)`
	display: ${p => p.hidden && 'none'};
`

const CVPanel = ({cvRef, printId}) => {
	return (
		<Box
			{...{
				id: printId,
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

const Buttons = ({handlePrint, handleGenPdf}) => {
	return (
		<Box {...{padding: '1rem 1rem'}} top left gap>
			<Link {...{as: Link, to: '/'}}>
				<BlueButton>Go to full CV page</BlueButton>
			</Link>
			<VioletButton {...{onClick: handlePrint, sets: [M]}}>Print</VioletButton>
			<VioletButton {...{onClick: handleGenPdf, sets: [M]}}>
				Generate PDF
			</VioletButton>
		</Box>
	)
}

const PRINT_ID = 'divToPrintId'
const DOC_TITLE = `${LAST_NAME} ${FIRST_NAME} - CV`

const CV = () => {
	const {isPhone} = useMediaQuery()
	const cvRef = useRef()
	const handlePrint = useReactToPrint({
		content: () => cvRef.current,
		documentTitle: DOC_TITLE,
	})

	const handleGenPdf = async () => {
		const canvas = await toPng(document.querySelector(`#${PRINT_ID}`), {
			quality: 0.98,
		})

		try {
			const link = document.createElement('a')
			link.download = 'my-image-name.jpeg'
			// eslint-disable-next-line new-cap
			const pdf = new jsPDF()
			pdf.addImage(canvas, 'PNG', 0, 0)
			pdf.save(`${DOC_TITLE}.pdf`)
		} catch (error) {
			throw new Error(error)
		}
	}

	return (
		<Box
			{...{bg: CV_LIGHT, top: true, padding: '0 0 1rem', minHeight: '100vh'}}
		>
			<Theme theme={CVTextTheme}>
				<Box top column>
					<Buttons {...{handlePrint, handleGenPdf}} />
					<WrapBox {...{hidden: isPhone}}>
						<CVPanel {...{cvRef, printId: PRINT_ID}} />
					</WrapBox>
					{isPhone && (
						<Box {...{padding: '0 1rem 1rem'}} column gap>
							<Text sets={[M]}>
								Sorry, preview is available for larger screens only.
							</Text>
							<ImgBox {...{src: cvPreview}} />
						</Box>
					)}
				</Box>
			</Theme>
		</Box>
	)
}

export default CV
