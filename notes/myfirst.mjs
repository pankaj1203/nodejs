import chalk from 'chalk'
import validator from 'validator'

// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Pankaj Singh')
// fs.appendFileSync('notes.txt',' Add text to notes.txt'
console.log(validator.isEmail('gmail.com'))
console.log(chalk.bold.green("Success"))
console.log(process.argv)

