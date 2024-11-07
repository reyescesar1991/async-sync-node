// const promise = new Promise((resolve, reject) => {
//     console.log("Async task execution");
//     if(false){
//         const person = {name: "Cesar"}
//         resolve(person);
//     }
//     else{
//         const error = {errCode: '1001'}
//         reject(error);
//     }
// });

// promise.then(
//     (val) => {console.log(val);
//     },
//     (err) => {console.log(err);
//     }
// )
// .catch(() => console.log("failed!"))
// .finally(() => console.log("clean up!"));

let p = Promise.resolve("execution is done");
