import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import Users from './Users'

let queries = {}
let mutations = {}

const models = [Users]
models.forEach(model => {
	queries = {...queries, ...model.queries}
	mutations = {...mutations, ...model.mutations}
})

// graphQL Root schema

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'QueryRootType',
		fields: () => ({
			...queries,
		}),
	}),
	// mutation: new GraphQLObjectType({
	// 	name: 'MutationRootType',
	// 	fields: () => ({
	// 		...mutations,
	// 	}),
	// }),
})

module.exports = {schema}
