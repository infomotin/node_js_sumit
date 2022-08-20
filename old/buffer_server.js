const _http = require('http');
const _fs = require('fs');
const server = _http.createServer((req, res) => { 
    console.log(req.url);
    if (req.url === '/') {
        res.write(
          '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><!-- file input form --><form action="/process" method="post" enctype="multipart/form-data"><input type="txt" name="file"><input type="submit" value="Upload"></body></html>'
        );
        res.end();
        

    } else if (req.url === "/process" && req.method === "POST") {
        // console.log("Processing...");
        // console.log(req.headers);
        // console.log(req.method);
        // console.log(req.url);
        // console.log(req.headers['content-type']);
        // console.log(req.headers['content-length']);
        // console.log(req.data);
        let body = [];
        let count = 0;
        req.on('data', (chunk) => { 
            count++;
            console.log(`Received ${chunk.length} bytes of data.`);
            body.push(chunk);
            // console.log(chunk.toString());
            console.log(count);
        })
        req.on('end', () => { 
            console.log("Done.");
            const full_body = Buffer.concat(body).toString();
            console.log(full_body);
        });
        res.write("thanks for the data");
        res.end();
      
    } else {
      res.write("404 Page");
      res.end();
    }
});

server.listen(3001);
console.log("Server is running on port 3001");