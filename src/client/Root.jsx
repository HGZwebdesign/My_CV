import React from 'react'
import {GlobalStyle, Theme, defaultThemesSet} from 'Styles'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Header, Footer} from './PageWrappers'
import MediaQueryProvider from 'plugins/MediaQuery'
import PageWrap from './Components/PageWrap'
import {MetaData} from './Components/MetaData'
import {pages, PRINTABLE_PATH} from './settings'
import CV from './Pages/CV'
import ScrollToTop from './Components/ScrollToTop'
import ErrorPage from './Components/ErrorPage'

const App = () => {
	return (
		<Theme theme={defaultThemesSet}>
			<MediaQueryProvider>
				<HashRouter>
					<GlobalStyle />
					<ScrollToTop />
					<MetaData />
					<Switch>
						<Route path={`/${PRINTABLE_PATH}`} component={CV} />
						<PageWrap header={<Header />} footer={<Footer />}>
							<Switch>
								{pages.map(({path, exact, component}, i) => (
									<Route key={i} {...{exact, path: `/${path}`, component}} />
								))}
								<Route component={ErrorPage} />
							</Switch>
						</PageWrap>
					</Switch>
				</HashRouter>
			</MediaQueryProvider>
		</Theme>
	)
}

export default App
