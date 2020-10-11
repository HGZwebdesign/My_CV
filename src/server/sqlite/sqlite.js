const fs = require('fs')
const {promisify} = require('bluebird')
const {openDB, initDB, listItems, closeDB} = require('./sqliteFunc')

// create folder, if not exists
if (!fs.existsSync('./data')) fs.mkdirSync('./data')

const db = openDB('data/main.db')

db.get = promisify(db.get)
db.all = promisify(db.all)

initDB(db)
// listItems(db)
// closeDB(db)

// tutorial: http://www.sqlitetutorial.net/sqlite-nodejs/connect/
// https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/
// TEST: node --inspect src/server/index.js

module.exports = {db}
