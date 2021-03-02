export const mockFunc = n => n * n

export const makeDate = dateArr =>
	dateArr?.length &&
	[dateArr[0], dateArr[1] < 10 ? ('0' + dateArr[1]).slice(-2) : dateArr[1]]
		.reverse()
		.join('.')

export const randomRange = (min, max) => Math.floor(Math.random() * max) + min
