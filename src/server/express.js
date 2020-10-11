import express from 'express'
import os from 'os'
// const path = require('path')

const app = express()

const SERVER_PORT = 8080
const port = process.env.PORT || SERVER_PORT

app.use(express.static('build'))

// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/build'), err => {
// 		if (err) {
// 			res.status(500).send(err)
// 		}
// 	})
// })

app.get('/api/getUsername', (req, res) =>
	res.send({username: os.userInfo().username})
)

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}!`))

// TEST: node --inspect src/server/index.js
