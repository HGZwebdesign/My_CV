import React, {Component} from 'react'
import SectionWrap from 'Components/SectionWrap'
import {Text} from 'Components/Text'

class Home extends Component {
	state = {username: null}

	// async componentDidMount() {
	// 	try {
	// 		const res = await fetch('/api/getUsername')
	// 		const user = await res.json()
	// 		const username =
	// 			user.username[0].toUpperCase() +
	// 			user.username.substring(1).toLowerCase()

	// 		this.setState({username})
	// 	} catch (err) {
	// 		console.error(err)
	// 		return err
	// 	}
	// }

	render() {
		// console.log(this.props)
		// if (!this.state.username) return false
		return (
			<SectionWrap>
				<Text set="xxl">
					{'Hello ' + (this.state.username || 'my friend') + '!'}
				</Text>
			</SectionWrap>
		)
	}
}

export default Home
