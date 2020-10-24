import React from 'react'
import {styled, VIOLET3_20, Trans} from '../styles'
import Box from '../Components/Box/Box'

const Outer = styled(Box)`
	position: relative;

	max-height: 10vh;
	height: 5rem;

	overflow: hidden;
	transform: translate3d(0, 0, 0); // enforce better performance
`

const SideShadow = styled(Box)`
	position: absolute;
	height: 100%;
	width: 100%;
	background: linear-gradient(
		${p => (p.right ? '-90' : '90')}deg,
		${VIOLET3_20} 0%,
		${Trans} ${p => p.range || '5%'},
		${Trans} calc(100% - ${p => p.range || '5%'}),
		${VIOLET3_20} 100%
	);
`

const Inner = styled(Box)`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 2000%;

	background-image: url(${p => p.image});
	background-size: contain;

	transform: translate3d(0, 0, 0); // enforce better performance
	animation: moveSlideshow 560s linear infinite;

	filter: opacity(30%);

	@keyframes moveSlideshow {
		100% {
			transform: translateX(-100%);
		}
	}
`

const Mover = ({outerProps, innerProps, image}) => {
	return (
		<Outer relative {...outerProps}>
			<Inner {...innerProps} image={image} />
			<SideShadow range="10%" />
		</Outer>
	)
}

export default Mover
