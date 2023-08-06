function isJavaScriptFile(filename){
    if(typeof filename !== "string"){
        return "please provide me a valid file name (string)"
    }
    // else{
    //     if(filename.toLowerCase().endsWith(".js") === true){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    return filename.toLowerCase().endsWith(".js")
}
console.log(isJavaScriptFile(".jsa"))