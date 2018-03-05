const chalk = require('chalk');
const log = console.log;

log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(chalk.blue.bgRed.bold('Hello world!'));

const redStars = chalk.white.bgBlue.bold(' * * * * * * *', chalk.bgRed('                                    \n'));
const whiteStars = chalk.white.bgBlue.bold('  * * * * * * ', chalk.bgWhite('                                    \n'));
const red = chalk.bgRed('                                                   \n');
const white = chalk.bgWhite('                                                   \n');
const flagArray = [redStars, whiteStars, redStars, whiteStars, redStars, whiteStars, redStars, white, red, white, red, white, red ];

makeFlag = () => {
    flagArray.forEach(flag => {
        process.stdout.write(flag);
    })
}

makeFlag();