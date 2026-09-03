// Definition of the object(it can store anything inside it even a object also)
const user = {
    name : "Abdul Qadir",
    age : 21,
    isEligible : true,
    subject : ["OS", "CN", "DBMS", "OOPS"],
    "secondway" : "yes"
}

const user2 = {
    name : "Rahul",
    age : 25,
    isEligible : true,
    subject : ["OS", "CN", "DBMS", "OOPS"],
}

// another way of object definition by using constructor
// const newObj = new Object();
// newObj.name = "AQ";
// newObj.age = 19;

// first(primary) way to access the items of object
// console.log(user.name);
// console.log(user.subject[3]);

// second way to access the items of object if the key is defined as string explicitly
//console.log(user["secondway"]);

// manipulating the object
// user.hobby = "Volley Ball";

//inserting a func in object
// user.greetings = function greet(){
//     return "hello dude";
// }
// console.log(user.greetings());

// to freeze the object so that we can update or change its elements in future
//Object.freeze(user);

// spread operator also works in object but it only if objects have same keys then it takes the last objects's key and value

// Object Destructuring -> we use this to directly use the values of object instead of using dot operator everytime
const {age, isEligible} = user;
console.log(isEligible);
console.log(age);

