const sqlite3 = require('sqlite3').verbose()

module.exports = {
	// open or create db + init records (if id is null)
	initDB: db =>
		db.serialize(() => {
			db.run(
				'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, firstName STRING, lastName STRING, date INTEGER)'
			)
			db.run(
				'INSERT OR IGNORE INTO Users (id, firstName, lastName, date) VALUES (1, "Anna", "Alibaba", 1997), (2, "Baltazar", "Bergen", 1980), (3, "Cacile", "Caro", 1986)'
			)
		}),

	// open/create db
	openDB: path =>
		new sqlite3.Database(
			path,
			sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
			err => {
				if (err) return console.error(err.message)
				console.log('Connected to DB.')
			}
		),

	// read data from db and display
	listItems: db =>
		db.serialize(() => {
			db.each(`SELECT id, firstName, lastName, date FROM Users`, (err, row) => {
				if (err) {
					console.error(err.message)
				}
				console.log(row.id, row.firstName, row.lastName, row.date)
			})
		}),
	// The close() method will wait for all pending queries completed before actually closing the database.
	closeDB: db =>
		db.close(err => {
			if (err) return console.error(err.message)
			console.log('DB connection closed.')
		}),
}
