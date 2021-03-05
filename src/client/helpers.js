import {format, isValid} from 'date-fns'

export const mockFunc = n => n * n

export const dateFormatter = (d, f = 'yyyy-MM-dd') => {
	if (!d) return
	const date = new Date(d)
	if (!isValid(date)) throw new Error(`Date is invalid.`)

	return format(date, f)
}

export const isNumeric = v => Number.parseInt(v, 10) && !Number.isNaN(v)

export const makeDate = dateArr =>
	dateArr?.length &&
	[dateArr[0], dateArr[1] < 10 ? ('0' + dateArr[1]).slice(-2) : dateArr[1]]
		.reverse()
		.join('.')

export const randomRange = (min, max) => Math.floor(Math.random() * max) + min
