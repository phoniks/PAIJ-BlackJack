const rl = require('readline-sync')
const chalk = require('chalk')
const colors = require('colors')


module.exports = {
  ask: (question) =>{
    return rl.question(chalk.underline.bgBlue('>>' + question) + '')
  },

  askForNumber: function(question){
    return parseInt(this.ask(question), 10)
  }

}
