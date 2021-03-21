import {LOCATION, TEL, WWW, EMAIL, GITHUB} from './personal'
import {aboutDB, eduDB, jobsDB, workshopsDB} from './sections'

export const introDB = aboutDB.filter((e, i) => i !== 2 && e)

export const consentDB =
	'I hereby consent to the processing of my vital and personal data in so far as this is required under the recruitment campaign, in accordance with the Act of August 29, 1997, on the Protection of Personal Information (JoL no. 133, item 883).'

export const leftListDB = [
	{
		title: 'Personal information',
		items: {
			Location: LOCATION,
			Phone: TEL,
			'E-mail': EMAIL,
			WWW,
			GitHub: GITHUB,
		},
	},
	{
		title: 'Languages',
		items: {
			Polish: 'Native',
			English: 'Advanced',
		},
	},
	{
		title: 'Additional skills',
		labelOnTop: true,
		items: {
			'Graphics software': 'COREL Photo-Paint, Photoshop',
			'Statistical software': 'SPSS, STATA, SAS Base, Atlas.ti',
			'MS Office': 'Excel (VBA), PowerPoint, Word',
		},
	},
	{
		title: 'Hobbies',
		icons: true,
		items: {
			handicraft: 'handicraft',
			archeology: 'archeology',
			travel: 'travel',
		},
	},
]

export const rightListDB = [jobsDB, workshopsDB, eduDB]
