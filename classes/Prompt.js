const rl = require('readline-sync')
const chalk = require('chalk')
const color = require('color')

module.exports = {
  ask: (question) =>{
    return rl.question(chalk.underline.bgBlue('>>' + question) + '')
  },

  askForNumber: (question) =>{
    return parseInt(this.ask(question), 10)
  }

}
