const _fs = require('fs');

const ourReadStrem = _fs.createReadStream(`${__dirname}/test.txt`);
const ourWriteStrem = _fs.createWriteStream(`${__dirname}/Read.txt`);

ourReadStrem.pipe(ourWriteStrem);