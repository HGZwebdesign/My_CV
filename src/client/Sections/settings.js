import {About, Experience, Intro, Portfolio} from './Index'
import Skills from './Portfolio'

export const sections = [
	{id: 'intros', label: 'intro', Component: Intro},
	{id: 'about', label: 'about', Component: About},
	{id: 'skills', label: 'skills', Component: Skills},
	{
		id: 'portfolio',
		label: 'portfolio',
		Component: Portfolio,
		links: [
			{id: 'link_out1', label: 'projekt 1'},
			{id: 'link_out2', label: 'projekt 2'},
			{id: 'link_out3', label: 'projekt 3'},
			{id: 'link_out4', label: 'projekt 4'},
		],
	},
	{id: 'experience', label: 'experience', Component: Experience},
	{id: 'footer', label: 'contact'},
]
