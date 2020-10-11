import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
} from 'graphql'
import gql from 'graphql-tag'

// graphQL types

const User = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {type: GraphQLID},
		firstName: {type: GraphQLString},
		lastName: {type: GraphQLString},
		date: {type: GraphQLInt},
	}),
})

// graphQL queries and mutations schemas

const queries = {
	person: {
		type: User,
		args: {
			id: {type: GraphQLID},
		},
		resolve(root, {id}, {db}) {
			return db.get(
				`
					SELECT * FROM Users WHERE id = $id
				`,
				{$id: id}
			)
		},
	},
	people: {
		type: new GraphQLList(User),
		args: {
			id: {type: GraphQLID},
			firstName: {type: GraphQLString},
			lastName: {type: GraphQLString},
			date: {type: GraphQLInt},
		},

		resolve(root, args, {db}) {
			const people = db.all(`SELECT * FROM Users`)
			// console.log(people)
			return people
		},
	},
}

const mutations = {}

export const personQuery = gql`
	query person($id: ID) {
		person(id: $id) {
			id
			firstName
			lastName
			date
		}
	}
`

export const peopleQuery = gql`
	query people {
		people {
			id
			firstName
			lastName
			date
		}
	}
`

export default {queries, mutations}
