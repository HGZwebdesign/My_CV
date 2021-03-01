import CV from './Pages/CV'
import Main from './Pages/Main'

export const PRINTABLE_PATH = 'summary'
export const PRINTABLE_LABEL = 'CV (printable)'

export const pages = [
	{
		exact: true,
		path: '',
		label: 'Main',
		component: Main,
	},
	{
		path: PRINTABLE_PATH,
		label: 'CV',
		component: CV,
	},
]
