let randomstring = require("randomstring");

console.log(randomstring.generate(3));

console.log(randomstring.generate({
    length: 5,
    charset: 'asddgdhd' 
}));