import React from 'react'
import {
	ApolloProvider as ApolloProviderOrg,
	ApolloClient,
	InMemoryCache,
} from '@apollo/client'
import {graphql, SERVER_PORT} from '../../config'

const cache = new InMemoryCache()

const client = new ApolloClient({
	uri: `http://localhost:${SERVER_PORT}${graphql.path}`,
	cache,
})

const ApolloProvider = ({children}) => (
	<ApolloProviderOrg client={client}>{children}</ApolloProviderOrg>
)

export default ApolloProvider
