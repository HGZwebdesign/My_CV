import React from 'react'
import {GlobalStyle, Theme, defaultThemesSet} from 'Styles'
import {Home, About, Gql} from './Pages'
import {BrowserRouter} from 'react-router-dom'
import {Home} from './Pages'
import {Header, Footer} from './PageWrappers'
import MediaQueryProvider from 'plugins/MediaQuery'
import PageWrap from './Components/PageWrap'

const App = () => {
	return (
		<Theme theme={defaultThemesSet}>
			<MediaQueryProvider>
								<Route path="/about" component={About} />
								<Route path="/gql" component={Gql} />
				<BrowserRouter>
					<GlobalStyle />
					<PageWrap header={<Header />} footer={<Footer />}>
						<Home />
					</PageWrap>
				</BrowserRouter>
			</MediaQueryProvider>
		</Theme>
	)
}

export default App
