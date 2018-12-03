//1. Write a JavaScript function to get the last element of an array
let arr = ["qwe", "asd", "zxc"];
function somefunc() {
	let last = arr.pop();
	console.log("Last element:" + " " + last);
}
somefunc();


//2. Write a simple JS program to join all elements of the following array into a string
let arr = ["qwe", "asd", "zxc"];
console.log(arr.join(" "));


//3. There are two arrays with individual values, write a JS program to compute the sum of each individual index value from a given arrays and save them to third array
let arr1 = ["qwe", "asd", "zxc"];
let arr2 = ["qwe", "asd", "xcv", "ert"];
let sum1 = 0;
let sum2 = 0;

for (let i=0; i < arr1.length; i++) {
sum1 = i + 1;
};

for (let a=0; a < arr2.length; a++) {
sum2 = a + 1;
};

let arr3 = [sum1, sum2];
console.log(arr3)


//4. Write a JS program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter()
let rectangle = {
width : 5,
height : 4,
getArea: function() {return this.width * this.height;}
getPerimeter: function() {return this.width + this.height;}
};
console.log(`Area: ${rectangle.getArea()}`);
console.log(`Perimeter: $(rectangle.getArea()})`)
