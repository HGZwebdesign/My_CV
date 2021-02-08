import styled from 'styled-components'
import Box from './Box/Box'

const ImageBox = styled(Box)`
	background-image: url(${p => p.src});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: ${p => `${p.height || p.size}`};
	width: ${p => `${p.width || p.size}`};
`

export default ImageBox
