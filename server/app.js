const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const config = require('config')
const initDataBase = require('./startUp/initDataBase')



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = config.get('port') ?? 8080

// if (process.env.NODE_ENV === 'production') {
// 	console.log('prodaction');
// } else {
// 	console.log('developer');
// }

const start = async () => {
	try {
		mongoose.connection.once('open', () => {
			initDataBase()
		})
		await mongoose.connect(config.get('mongoUri'))
		app.listen(PORT, () => {
			console.log(chalk.green('Server has been started on port', PORT))
		})
	} catch (error) {
		console.log(chalk.red(e.message))
		process.exit(1)
	}

}

start()

