//Create a file using open()
//Update created file using appendFile()
//Update created file using writeFile
//ReadFile() and output it's value

let fs = require("fs");

fs.readFile("json1.txt", "utf8", function(err, data) {
if (err) throw err;
let string = JSON.stringify(data);
console.log(string);
//let newstring = string + (',\\\"rate\\\":\\\"5\\\"');
//let newstring = string;
let newstring = string;
console.log(newstring);

let parsedstring = JSON.parse(newstring);
console.log(parsedstring);

    fs.writeFile("json2.txt", parsedstring,
    function (err){
        if (err) throw err;
        console.log('Saved!')
    });

    fs.appendFile("json2.txt", parsedstring + "asd",
    function (err){
        if (err) throw err;
        console.log('Saved!')
    });

})




