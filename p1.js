function isInteger(number){
    if(typeof number !== "number"){
        return "please provide me a valid number";
    }
    else{
        if(number % 1 !== 0){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(isInteger(5))