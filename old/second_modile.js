// (function () {


    var people = ["Nake", "any", "any"];
    var x = 0;
    function printName() {
      console.log(people[x]);
      x++;
      if (x < people.length) {
        setTimeout(printName, 1000);
      }
    }


    module.exports = { people, printName };
    // return module.exports;


// }
// )