import React from 'react'
import {GlobalStyle, Theme, defaultThemesSet} from 'Styles'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Home, About, Gql} from './Pages'
import {Header, Footer} from './PageWrappers'
import MediaQueryProvider from 'plugins/MediaQuery'
import PageWrap from './Components/PageWrap'

const App = () => {
	return (
		<Theme theme={defaultThemesSet}>
			<MediaQueryProvider>
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
			</MediaQueryProvider>
		</Theme>
	)
}

export default App
