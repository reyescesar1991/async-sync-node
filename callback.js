function asyncTask(cb){
    setTimeout(() => {
        cb(null, "This is a data from server!")
    });
}

asyncTask((err, data) => {
    if(err){
        throw err;
    } else{
        console.log("data: ", data);
        
    }
});
