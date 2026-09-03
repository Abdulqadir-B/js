// arrow functions and this concept in js

const user = {
    name : "Tom",
    age : 20,
    city : "Indore",
    greet : function greeting() {
        console.log(`hey bruh!! ${this.name}`)
    }
}
// user.name = "bob" // this refers to current scope that's why we got bob printed
// console.log(user.greet());

// concept of arrow function -> diff ways of defining a arrow function (in react also)
// 1st way
// const res = (num1 , num2) => {
//     return num1 + num2;
// }

//2nd way -> used in react
// NOTE : when we dont use the curly braces then their is no need of using the return keyword otherwise with curly braces we have to use the return keyword in arrow functions
//const res = (num1, num2) => (num1 + num2);

// console.log();
