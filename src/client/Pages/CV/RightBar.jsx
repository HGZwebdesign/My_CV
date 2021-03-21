import React, {Fragment} from 'react'
import {Box} from 'Components/Box'
import {
	styled,
	CV_DARKER,
	CV_DARK,
	CV_LIGHTER,
	WHITE,
	BLACK_50,
	CV_LIGHT,
} from 'Styles'
import {BOLD, ITALIC, L, M, S, Text, THIN, UL, XS} from '../../Components/Text'
import {consentDB, introDB, rightListDB} from 'config/cv'
import {makeDate} from 'src/client/helpers'
import KeySkills from './KeySkills'

const LineBox = styled(Box)`
	border-top: solid ${CV_DARKER} 1px;
	border-bottom: solid ${CV_DARKER} 1px;
`

const Line = styled(Box)`
	width: 90%;
	border-top: 1px dashed ${CV_LIGHT};
`

export const RightTitle = ({title}) => (
	<LineBox {...{padding: '0.4rem 0'}} left>
		<Text sets={[L]}>{title}</Text>
	</LineBox>
)

const Card = ({
	start,
	end,
	main,
	sub,
	descArr,
	subHiddenInCV,
	descHiddenInCV,
}) => {
	const startStr = makeDate(start)
	const endStr = makeDate(end)
	const date = `${startStr} - ${endStr ? endStr : ''}`

	const descSingle = descArr?.length === 1 && descArr[0]
	const descMulti = descArr?.length > 1 && descArr
	return (
		<Box gap top left>
			<Box left maxWidth="10%">
				<Text sets={[S]}>{date}</Text>
			</Box>
			<Box column left>
				<Box left column>
					<Text sets={[M, BOLD]}>{main}</Text>
					{!subHiddenInCV && <Text sets={[S, BOLD]}>{sub}</Text>}
				</Box>
				{!descHiddenInCV && descSingle && (
					<Text sets={[S, THIN]}>{descSingle}</Text>
				)}
				{!descHiddenInCV && descMulti && (
					<Box left column gap="0.1rem" as="ul" padding="0 0 0 1rem">
						{descMulti.map((s, i) => (
							<Text key={i} sets={[S, UL, THIN]} as="li">
								{s}
							</Text>
						))}
					</Box>
				)}
			</Box>
		</Box>
	)
}

const RightList = ({title, items}) => {
	return (
		<Box {...{gap: '0.3rem'}} column>
			<RightTitle {...{title}} />
			<Box gap="0.5rem" column>
				{items.map((job, i) => (
					<Fragment key={i}>
						<Card {...job} />
						{job.addBreak && <Line />}
					</Fragment>
				))}
			</Box>
		</Box>
	)
}
const Intro = () => {
	return (
		<Box {...{padding: '0 0 1rem'}}>
			<Box {...{bg: CV_LIGHTER, fg: CV_DARK, padding: '0.5rem'}} left>
				<Text sets={[S, ITALIC]}>{introDB.join(' ')}</Text>
			</Box>
		</Box>
	)
}
const Consent = () => {
	return (
		<Box {...{fg: BLACK_50, padding: '0.5rem 0'}} left>
			<Text sets={[XS, ITALIC]}>{consentDB}</Text>
		</Box>
	)
}

const RightBar = () => {
	return (
		<Box
			{...{bg: WHITE, fg: CV_DARK, padding: '0 0 0 1rem', height: '100%'}}
			column
			spaceBetween
		>
			<Box column>
				<Intro />
				<KeySkills />
				<Box gap left column>
					{rightListDB?.map((list, i) => (
						<RightList key={i} {...list} />
					))}
				</Box>
			</Box>
			<Consent />
		</Box>
	)
}

export default RightBar
