import React from 'react'
import {Box} from 'Components/Box'
import {styled} from 'Styles'

const WrapBox = styled(Box)`
	flex-direction: column;
	align-items: stretch;

	width: 100%;
	height: 100vh;

	/* stretched content */
	> *:not(:first-child) {
		flex: 1 0 auto;
	}

	/* shrinked header, footer */
	> div:first-child,
	> div:last-child {
		flex: 0 0 auto;
	}
`

/**
 * Componment wrapping whole the app
 * @param {{header: Node, footer: Node, children: Node}
 */
const PageWrap = ({
	header = <Box>Header</Box>,
	footer = <Box>Footer</Box>,
	children,
}) => {
	return (
		<WrapBox top column>
			<Box>{header} </Box>
			<Box stretch>{children}</Box>
			<Box>{footer}</Box>
		</WrapBox>
	)
}

export default PageWrap
