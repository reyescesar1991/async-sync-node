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

// let p = Promise.reject("failed");

// p.then((val) => { 
//     console.log(val); 
//     return "done2" }
// ).then((val) => {
//     console.log(val);
// }).catch((val) => {console.log(val);
// });


const makeApiCall = (time) => {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This API executed in: " + time);
        }, time);
    })
}

// makeApiCall(2000).then((val) => {console.log(val);
// })

const apiRequest = [makeApiCall(1000), makeApiCall(4000), makeApiCall(6000)];

// Promise.all(multiApiCall).then((values) => {
//     console.log(values);
// })

// Promise.race(multiApiCall).then((value) => {
//     console.log(value);
// })

(async function () {
    for(let request of apiRequest){
        console.log(await request());  
    }
})();

