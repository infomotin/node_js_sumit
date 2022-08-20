const _fs = require('fs');
console.log("chunk 1");
let count = 0;
const ourReadStrem = _fs.createReadStream(`${__dirname}/test.txt`);
const ourWriteStrem = _fs.createWriteStream(`${__dirname}/Read.txt`);
ourReadStrem.on("data", (chunk) => {
  count++;
  console.log(chunk.length);
  console.log(count);
});
