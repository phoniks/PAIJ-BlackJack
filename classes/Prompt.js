

module.exports = {
  ask: (question) =>{
    return rl.question(chalk.underline.bgBlue('>>' + question) + '')
  }

  askForNumber: (question) =>{
    return parseInt(this.ask(question), 10)
  }

}
