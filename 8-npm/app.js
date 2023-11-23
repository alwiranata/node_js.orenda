// const validator = require('validator')

// console.log(validator.isEmail('aldowiranata16@gmail.com'));
// console.log(validator.isMobilePhone('0895634889510' ,'id-ID'));
// console.log(validator.isNumeric('0895634889510'))

const chalk = require('chalk')
const nama = 'aldo';
// console.log(chalk.gray.bgBlue.italic('Hello World'));
const pesan = chalk`why {gray lorem ipsum}  dolor {bgRed.gray sit} consecturelit :{blue ${nama}} `;
console.log(pesan);


