let fs = require("fs");

fs.readFile("json11.json", "utf8", function(err, data) {
if (err) throw err;
let string = JSON.stringify(data);
console.log(string);
//let newstring = string + (',\\\,"name\\\":\\\"Taras\\\",\\\"surname\\\":\\\"Skip\\\",\\\"rate\\\":\\\"5\\\""');
let newstring = string.replace("ur", "econd"); 
console.log(newstring);

let parsedstring = JSON.parse(newstring);
console.log(parsedstring);

    fs.writeFile("json2.txt", parsedstring,
    function (err){
        if (err) throw err;
        console.log('Saved!')
    });

    fs.appendFile("json2.txt", "SomeNewString",
    function (err){
        if (err) throw err;
        console.log('Saved!');
        
        fs.readFile("json2.txt", "utf8", 
        function(err, data) {
            if (err) throw err;    
            console.log(data);
        });

    });

   
    
})