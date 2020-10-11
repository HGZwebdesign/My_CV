import React, {Component} from 'react'
import {Query} from 'react-apollo'
import {peopleQuery} from '../../server/graphql/Users'
import {Box} from 'Components/Box'
import SectionWrap from 'Components/SectionWrap'
import {Text} from 'Components/Text'

class QueryPeople extends Component {
	render() {
		return (
			<Query query={peopleQuery} variables={{id: 1}}>
				{({loading, error, data}) => {
					if (loading) return <p>Loading...</p>
					if (error) return <p>Error :(</p>

					if (!data || !data.people) return false

					return (
						<Box column gap>
							<Text set="l" left>
								QueryPeople:
							</Text>
							{data.people.map((p, i) => (
								<Text key={i} left>
									{`${p.id}: ${p.firstName} ${p.lastName} ${p.date}`}
								</Text>
							))}
						</Box>
					)
				}}
			</Query>
		)
	}
}

class Gql extends Component {
	render() {
		return (
			<SectionWrap gap>
				<Text set="xxl">QraphQL / SQlite test</Text>

				<QueryPeople />
			</SectionWrap>
		)
	}
}

export default Gql
