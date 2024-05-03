function sayMyName (){
    console.log("Hello");
} 
//sayMyName()

function addTwoNumbers (number1,number2){
//console.log(number1 + number2); 
// let result = number1 +number2
// return result
return number1 + number2

}
addTwoNumbers(3,6)

function loginUserMessege (username){
    if(username === undefined){
        console.log("Please Enter s username");

    }
return `${username} just logged in `
}

console.log(loginUserMessege());
