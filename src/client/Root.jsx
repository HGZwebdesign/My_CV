import React from 'react'
import {GlobalStyle, Theme, defaultThemesSet} from 'Styles'
import {ApolloProvider} from 'react-apollo'
import {default as ApolloClient} from 'apollo-boost'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Home, About, Gql} from './Pages'
import {Header, Footer} from './PageWrappers'
import MediaQueryProvider from 'plugins/MediaQuery'
import PageWrap from './Components/PageWrap'

// different local port in dev mode: 3000 (server port must be enforced)
const SERVER_PORT = 8080
const client = new ApolloClient({
	uri: `http://localhost:${SERVER_PORT}/graphql`,
})

const App = () => {
	return (
		<Theme theme={defaultThemesSet}>
			<MediaQueryProvider>
				<ApolloProvider client={client}>
					<BrowserRouter>
						<GlobalStyle />
						<PageWrap header={<Header />} footer={<Footer />}>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/about" component={About} />
								<Route path="/gql" component={Gql} />
							</Switch>
						</PageWrap>
					</BrowserRouter>
				</ApolloProvider>
			</MediaQueryProvider>
		</Theme>
	)
}

export default App
