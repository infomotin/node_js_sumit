const _fs = require('fs');
// const ourReadStrem = _fs.createReadStream(`${__dirname}/test.txt`, 'utf8');
// ourReadStrem.on('data', (data) => {
//     console.log(data);
// });

console.log('chunk 1');
let count = 0;
const ourReadStrem = _fs.createReadStream(`${__dirname}/test.txt`, );
ourReadStrem.on("data", (chunk) => {
    count++;
    console.log(chunk.length);
    console.log(count);
});

// console.log("non_buffer_read_stream Sync");
// non_buffer_read_stream = _fs.readFileSync(`${__dirname}/test.txt`, 'utf8');
// console.log(non_buffer_read_stream.toString());
// console.log("non_buffer_read_stream Async");
// _fs.readFile(`${__dirname}/test.txt`, 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// } );

console.log('before');