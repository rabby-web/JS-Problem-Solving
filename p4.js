function minGame(x){
    // if(typeof x !== "number" || x <= 0){
    //     return "please give provide a number and positive number";
    // }
    if(typeof x !== "number"){
        return "please give provide a number";
    }
    else if(x <= 0){
        return "please give provide a positive number";
    }
    else{
        const result = (((x * 3) + 10) / 2) -5;
        return result;
    }
}
console.log(minGame(5))