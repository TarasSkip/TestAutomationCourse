//1. Write a JavaScript function to check if given string includes given symbol.
function str(a){
let res = a.indexOf('b');
console.log(res);
}
str(a = 'asdb');



//2. Write a JavaScript function to check whether a string is blank or not.
TODO
let str = "ab c d   ";


if(sym !== '') {
	res = false
}


//3. Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) – should be “N.B.”
function abbr(str1, str2){

let s1 = str1.charAt(0);
let s2 = str2.charAt(0);

console.log(s1 + "." + " " + s2 + '.');
}
abbr(str1='Nazar', str2='Babii');



//4. Write a JavaScript function that accept two integers and display the larger.
 function comp(i, n) {
	 	if (i<n) 
{
	console.log(n);
}
 else if (i>n)
 {
	 console.log(i);
 }
 else 
 {
	 console.log("i = n");
 }
 }
 
 comp(1,2);

 

//5. Write a JavaScript function with conditional statement to sort three numbers - дописати решту випадків
 function comp(i, n, z) {
	 	if ((i<n) && (n<z))
{
	console.log(z, n, i);
}
 else if ((i>n) && (n>z))
 {
	 console.log(i, n, z); 
 }
	 
	 else if ((i>n) && (n<z))
 {
	 console.log(i, z, n);
 }
 else 
 {
	 console.log("i = n = z");
 }
 }
 
 comp(1,2,3);
 
 
 //Не працює ?
  function comp(i, n, z) {
	 	switch (comp){
		case((i<n) && (n<z)) : console.log(z); break;
		case((i<n) && (n>z)) : console.log(n); break;
		case((i>n) && (n<z)) : console.log(i); break;
		default : console.log('i=n=z');
	}
  }
	comp(1,2,3);

 
 
