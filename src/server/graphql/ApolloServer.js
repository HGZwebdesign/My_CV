import {db} from '../sqlite/sqlite'
import {schema} from '../graphql'
import {ApolloServer} from 'apollo-server-express'
import graphqlHTTP from 'express-graphql'

// qraphql only
// app.use(
// 	'/graphql',
// 	graphqlHTTP({
// 		schema,
// 		graphiql: true,
// 		context: {db},
// 	})
// )

// graphql + apollo server
// It's running always on http://localhost:8080/graphql => ApolloClient uri config needed
const apolloServer = app => {
	const server = new ApolloServer({
		schema,
		context: ({req}) => ({db}),
		introspection: true,
		playground: {
			settings: {
				'request.credentials': 'include',
				'editor.theme': 'light', // possible values: 'dark', 'light'
				'editor.fontSize': 16,
				'editor.fontFamily': `'Droid Sans Mono', 'Monaco', monospace`,
			},
		},
		tracing: true,
	})
	server.applyMiddleware({app, path: '/graphql'})
}

export default apolloServer
