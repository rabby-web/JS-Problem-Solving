function isJavaScriptFile(filename){
    if(typeof filename !== "string"){
        return "please provide me a valid file name (string)"
    }
    else{
        const arr = filename.split(".");
        const lastElement = arr.pop();
        // return lastElement.toLowerCase() === "js";
        if(lastElement.toLowerCase() === "js"){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(isJavaScriptFile(".js"))