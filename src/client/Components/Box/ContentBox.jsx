import {styled} from 'Styles'
import {Box} from 'Components/Box'

const ContentBox = styled(Box)`
	max-width: ${p => p.maxWidth || p.theme.contentWidth};
`

export default ContentBox
