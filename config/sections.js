import {
	ABOUT,
	EXPERIENCE,
	FOOTER,
	INTRO,
	PORTFOLIO,
	SKILLS,
} from 'src/constants'
import {About, Experience, Intro, Portfolio, Skills} from 'src/client/Sections'

export const sections = [
	{id: INTRO, label: 'intro', Component: Intro},
	{id: ABOUT, label: 'about me', Component: About},
	// {id: 'logos', label: 'logos', Component: Logos, noLink: true},
	{id: SKILLS, label: 'skills', Component: Skills},
	{
		id: PORTFOLIO,
		label: 'portfolio',
		Component: Portfolio,
		links: [
			{id: 'link_out1', label: 'project 1'},
			{id: 'link_out2', label: 'project 2'},
			{id: 'link_out3', label: 'project 3'},
			{id: 'link_out4', label: 'project 4'},
		],
	},
	{id: EXPERIENCE, label: 'experience', Component: Experience},
	{id: FOOTER, label: 'contact'},
]

export const aboutDB = [
	"I am a software programmer with 3-years' professional experience, specializing in website development.",
	"My field of expertise ranges from front-end to 'soft' back-end technologies. During my career I was involved in user-interfaces creation as well as client-server communication, databases architecture design and testing. Moreover my experience gained in the previous profession of a market researcher allows me to successfully play the role of a client liaison in the field of technological analysis of requirements, functionalities implementation and training.",
	'Programming is one of my passions too, which confronts me with many interesting challenges everyday. Solving them gives me a lot of joy and satisfaction.',
	'I am looking for job opportunities that will allow me to utilize my potential and broaden my skills and knowledge comprehensively, under the guidance of experienced mentors.',
	'I kindly invite you to look at my GitHub portfolio.',
]

export const skillsDB = [
	{
		label: 'Technologies',
		groups: [
			[
				{label: 'JavaScript', score: 5},
				{label: 'React.js', score: 5},
				{label: 'Node.js', score: 3},
				{label: 'Redux', score: 2},
			],
			[
				{label: 'HTML', score: 5},
				{label: 'CSS', score: 5},
				{label: 'Styled-components', score: 4},
				{label: 'SASS', score: 3},
				{label: 'JQuery', score: 2},
			],
			[
				{label: 'GraphQL', score: 4},
				{label: 'SQLite', score: 3},
				{label: 'REST', score: 2},
				{label: 'Firebase', score: 1},
			],
		],
	},
	{
		label: 'Tools',
		groups: [
			[
				{label: 'Git', score: 4},
				{label: 'Webpack', score: 4},
			],
			[
				{label: 'Jest', score: 4},
				{label: 'cypress.js', score: 2},
			],
			[
				{label: 'COREL Photo-paint', score: 4},
				{label: 'Photoshop', score: 3},
				{label: 'Gimp', score: 2},
			],
		],
	},
	{
		label: 'Languages',
		groups: [
			[
				{label: 'Polish', score: 6},
				{label: 'English', score: 5},
				{label: 'Russian', score: 1},
			],
		],
	},
]

export const projectsDB = [
	{
		scr: '',
		label: 'project 1',
		link: '',
	},
	{
		scr: '',
		label: 'project 2',
		link: '',
	},
	{
		scr: '',
		label: 'project 3',
		link: '',
	},
	{
		scr: '',
		label: 'project 4',
		link: '',
	},
	{
		scr: '',
		label: 'project 5',
		link: '',
	},
	{
		scr: '',
		label: 'project 6',
		link: '',
	},
]

export const jobsDB = {
	title: 'Work experience',
	items: [
		{
			start: [2017, 10],
			end: undefined,
			main: 'Yaska Polska Sp. z o.o.',
			sub: 'Web developer',
			descArr: [
				'Website development for Belgian companies and non-profit organizations',
				'Modern user-interfaces creation (React.js, Final-form, styled-components and more)',
				'Co-design of the apps architecture based on the StratoKit/strato-db engine (SQlite, graphQL, Node.js)',
				'Unit-, integration- and end-to-end testing (Jest, cypress.js)',
				'Client liaison: recognition of the needs and their technological implementation',
			],
			addBreak: true,
		},
		{
			start: [2016, 12],
			end: [2017, 2],
			main: 'VoiceMap – GPS audioguides',
			sub: 'Audio tour guide',
			descArr: [
				'Preparation of an audioguide tour around Krakowskie Przedmieście St. in Warsaw',
			],
			subHiddenInCV: true,
		},
		{
			start: [2013, 5],
			end: [2015, 5],
			main: 'TNS Polska S.A. – Automotive Department',
			sub: 'Junior Research Executive',
			descArr: [
				'Preparation and coordination of quantitative, mystery shopping and customer satisfaction surveys for leading automotive and oil companies',
				'Coordination of TNS Garage Quality Check countrywide survey',
			],
		},
		{
			start: [2012, 9],
			end: [2013, 3],
			main: 'ACNielsen Polska Sp. z o.o. – Manufacturer Client Service',
			sub: 'Marketing Research Consulting Programme',
			descArr: [
				'Delivery of monthly market sales reports, presentations and practicing various types of analysis for cosmetics and food companies',
			],
			// subHiddenInCV: true,
			descHiddenInCV: true,
		},
		{
			start: [2010, 6],
			end: [2010, 12],
			main: 'L’Oreal Polska Sp. z o.o. –  Media and Market Research Division',
			sub: 'internship',
			descArr: [
				'Update & delivery of monthly cosmetics market sales reports',
				'Ordering and coordination of quantitative and qualitative surveys',
			],
			// subHiddenInCV: true,
			descHiddenInCV: true,
		},
	],
}

export const eduDB = {
	title: 'Education',
	items: [
		{
			start: [2005, 9],
			end: [2012, 7],
			main: 'University of Warsaw – the Faculty of Economic Sciences',
			descArr: ['Specialization: Business Economics (MA 2012)'],
		},
		{
			start: [2007, 9],
			end: [2012, 6],
			main: 'University of Warsaw – the Institute of Sociology',
			descArr: [
				'Specialization: Social and Market Research (MA Certificate of Completion 2012)',
			],
		},
		{
			start: [2010, 1],
			end: [2010, 6],
			main: 'University College of Maastricht, Netherlands',
			descArr: [
				'Student Exchange Erasmus Programme, specialization: Social Science',
			],
		},
	],
}

export const workshopsDB = {
	title: 'Workshops & trainings',
	items: [
		{
			start: [2017, 9],
			main: 'Conference Google Developer Days in Kraków',
			descArr: [
				'Participation in workshops on Progressive Web Design, Firebase and Google Maps',
			],
		},
		{
			start: [2017, 4],
			end: [2017, 6],
			main: 'Coders Lab – bootcamp: "Become Front-End Developer"',
			descArr: ['Intensive training for Front-end developer (240h)'],
		},
		{
			start: [2016, 2],
			end: [2016, 6],
			main: 'Delfin English School, London, United Kingdom',
			descArr: ['General English Course, level: advanced C1+ (150h)'],
		},
		{
			start: [2014, 10],
			end: [2014, 11],
			main: 'Open University UW – MS Excel & VBA course',
			descArr: ['MS Excel work automation with macros and VBA (60h)'],
		},
	],
}
