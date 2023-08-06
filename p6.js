function findBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number";
    }
    else{
        let badData = 0;
        for(let i = 0; i < arr.length; i++){
            if(typeof arr[i] !== "number"){
                return "please provide me an array of number not string";
            }
            else{
                if(arr[i] < 0){
                    badData++;
                }
            }
        }
        return badData;
    }
}
const x = [1, 2, -3, -4, 5, -6]
console.log(findBadData(x))