// Two methods are used for handling promises first is .then .catch chaining and second is async await with try and catch blocks
// promises are objects

// promise Creation -> way 1 :
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("async task done");
//         resolve();
//     }, 1000)
// })

// promise1.then(() => {
//     console.log("promise consumed");
    
// })

// Way 2:
// new Promise((resolve, reject) => {
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("Async 2 resolved");
// })

//  Way 3:
// const promise4 = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         let error = false;   
//         if(!error){
//             resolve({username : "AQ", age : 19});
//         }
//         else{
//             reject("Some error occurred")
//         }
//     }, 2000)
// })

// promise4.then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))

// way 4 - using the real API call to github using fetch
// const url = "https://api.github.com/users/abdulqadir-b";

// fetch(url)
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data.login);
// })
// .catch((err) => {
//     console.log(err);
// })

// Way 5 -> using async await(try catch blocks) (most imp)
const url = "https://api.github.com/users/abdulqadir-b";

async function getGithubUserData(){
    try {
        const response = await fetch("https://api.github.com/users/abdulqadir-b");
        const data = await response.json();
        console.log(data.login, data.followers);
    } catch (error) {
        console.log(error); 
    }   
}

getGithubUserData();