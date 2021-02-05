import {GraphQLScalarType, Kind} from 'graphql'

export const DateType = new GraphQLScalarType({
	name: 'Date',
	description: 'Date custom scalar type',
	parseLiteral(ast) {
		if (ast.kind === Kind.INT) {
			return Number.parseInt(ast.value, 10) // ast value is always in string format
		}
	},
	parseValue(value) {
		return value && new Date(value) // value from the client
	},
	serialize(value) {
		return value?.toJSON() // value sent to the client
	},
})
