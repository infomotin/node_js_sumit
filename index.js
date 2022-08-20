// var dns = require("dns");
// var w3 = dns.lookup("www.dazzlesoftbd.com", function (err, addresses, family) {
//   console.log(addresses);
// });


const _path = require("path");
const _fs = require("fs");
const _os = require("os");
const _child_process = require("child_process");
const _dns = require("dns");
const _http = require("http");
const _https = require("https");
const _url = require("url");
const _querystring = require("querystring");
const _crypto = require("crypto");
const EventEmitter = require("events");


const _myPath = 'C:/xampp/htdocs/sumot-js/node_modules/loose-envify/index.js';
// vR = _path.parse(_myPath);

// for (x in vR) {
//     console.log(x + ": " + vR[x]);
// }

// console.log(_path.parse(_myPath));
// for(x in _path){
//     console.log(x);
// }

// for (x in _os) {
//     console.log(_os[x]);
    
// }

// console.log(_os.platform());
// console.log(_os.arch());
// console.log(_os.release());
// console.log(_os.type());
// console.log(_os.hostname());
// console.log(_os.uptime());
// console.log(_os.loadavg());
// console.log(_os.totalmem());
// console.log(_os.freemem());
// console.log(_os.cpus());
// console.log(_os.networkInterfaces());
// console.log(_os.EOL);

    // for(x in _fs) { 
    //     console.log(_fs[x]);
    // }

// // console.log(_fs.existsSync());
// for (var x = 0; x < _fs.readdirSync(_os.homedir()).length; x++) {
//     _fs.appendFileSync("test.txt", _fs.readdirSync(_os.homedir())[x]+"\n");
//     console.log(_fs.readdirSync(_os.homedir())[x]);
// }
      
// // usign syscronition to read the file
// _fs.readFileSync("test.txt", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log(data);
// })
//usign ascsyscronition to read the file
// const f = _fs.readFileSync('test.txt')
// console.log(f.toString());

// _fs.readFile('test.txt', 'utf8',(e, d) => {
//     if (e) throw e;
//     console.log(d);

// });

// console.log(_events);
// create EventEmitter calss 
// var myEmitter = new EventEmitter();
// var myEmitter2 = new EventEmitter();  
// create event listener
// myEmitter.on("bellRing", function (bellRing) {
//   if (bellRing) {
//     console.log("bell ring");
//   }
//     console.log("No bell ring");
// });


// setTimeout(()=>{

// myEmitter.emit("bellRing");
// },2000);
const EventsStart = require("./eventsRase.js");

const eventsStart = new EventsStart();

eventsStart.on("bellRing", function ({ data, data2, data3 }) {
  console.log(data);
  console.log(data2);
  console.log(data3);
  if (data || data2 || data3) {
    console.log("bell ring");
  } else if (!data || !data2 || !data3) {
    console.log("No bell ring");
  } else if (data && (data2 || data3)) {
    console.log("!bell ring 1");
  }
});


eventsStart.eventsStart();
// EventsStart.eventsStart();
// myEmitter2.emit("bellRing",{data:" ",data2:"data2",data3:"data3"});