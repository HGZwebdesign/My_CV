import {Box} from 'Components/Box'
import {styled} from 'Styles'

export const icons = {
	email: require('assets/icons/icon-email.svg'),
	phone: require('assets/icons/icon-phone.svg'),
	linkedin: require('assets/icons/icon-linkedin.svg'),
}

const IconBox = styled(Box).attrs({cursor: true})`
	width: ${(p) => p.width || p.sizeBg};
	height: ${(p) => p.height || p.sizeBg};

	border-radius: ${(p) => p.round && `50%`};

	background-image: url(${(p) => p.icon});
	background-repeat: no-repeat;
	background-position: center;
	background-size: ${(p) => p.size};

	transition: 0.5s;
	${(p) => p.theme.colors}
`

// const Icon = ({Svg, ...p}) => <IconBase {...p}>{/* <Svg /> */}</IconBase>

export default IconBox
