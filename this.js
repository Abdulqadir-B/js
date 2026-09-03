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
//const res = (num1, num2) => (num1 + num2);

// console.log();
