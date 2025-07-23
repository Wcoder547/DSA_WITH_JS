let a = 10;
let b = 20;

console.log("The sum of a and b is:" + a + b); //string-1020
console.log("The sum of a and b is:" + (a + b)); //30
console.log(a + b + "The sum of a and b is:"); //30

// type coercion
console.log(1 + "1"); //11
console.log(1 + 1 + "1"); //21
console.log(typeof ("1" + 1)); //11 string
console.log("1" - 1); //0 number
console.log(typeof ("1" * 1)); //1 number
console.log(typeof ("1" / 1)); //1 number

//type casting or type conversion
let age = Number(prompt("Enter your age: "));
console.log("Your age is: " + age);

//swap
let x = 5;
let y = 10;
console.log("Before swap: x = " + x + ", y = " + y);
let temp;
temp = x;
x = y;
y = temp;
console.log("After swap: x = " + x + ", y = " + y);

//swap 2nd method
x = x + y; //15
y = x - y; //5
x = x - y; //10

console.log("After swap using arithmetic: x = " + x + ", y = " + y);

//swap 3rd method using destructuring
[x, y] = [y, x];
console.log("After swap using destructuring: x = " + x + ", y = " + y);

//Arthimetic +-*/%
let w = 4567;
console.log(w % 10); //7 last digit
//10*456=4560 reminder will be last digit. in our case last digit is 7
console.log(w % 100); //67 last two digits because 100*45=4500 reminder will be last two digits. in our case last two digits are 67
console.log(w % 1000); //567 last three digits because 1000*4=4000 reminder will be last three digits. in our case last three digits are 567
console.log(w % 10000); //4567 all digits because it is less than 10000 then it will return exact number

//Relational operators =,>,< ,<= , >=, !=, ==, ===
//Logical opearator && ||

let n = true;
n++;
console.log(n); //1
console.log(n);

//Math functions
console.log(Math.PI); //3.141592653589793
console.log(Math.round(4.5)); //5
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.abs(-4.9)); //4.9
console.log(Math.max(1, 2, 3, 4, 5)); //5
console.log(Math.min(1, 2, 3, 4, 5)); //1
console.log(Math.pow(2, 3)); //8 2
console.log(Math.sqrt(16)); //4 square root
console.log(Math.random()); //random number between 0 and 1
console.log(Math.random() * 10); //random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); //random integer between 0 and 9
console.log(Math.floor(Math.random() * 100)); //random integer between 0 and 99
