const readline = require('readline-sync');

const userLogin = () => {

    console.log("Enter Username and Password");
    let username = readline.question("Enter username: ");
    let password = readline.question("Enter password: ");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Performing User Authentication");
            if(username === "cesar" && password === "cesar123"){
                resolve("User Authenticated!");
            }
            else{
                reject("Authentication Failed!");
            }
        }, 1000);
    });  
};

function goToHomePage(userAuthStatus){
    return Promise.resolve(`Go to Homepage as: ${userAuthStatus}`);
}

userLogin().then((response) => {
    console.log("Validated User");
    return goToHomePage(response);
}).then((userAuthStatus) => {
    console.log(userAuthStatus);
});