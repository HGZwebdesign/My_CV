import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useLocation, useHistory, Route} from 'react-router-dom'

const ScrollToTop = props => {
	useEffect(() => {
		window.addEventListener('beforeunload', () => {
			window.scrollTo(0, 0)
		})
	}, [])

	return <Route {...props} />
}
ScrollToTop.propTypes = {
	targetId: PropTypes.string,
}

export default ScrollToTop
