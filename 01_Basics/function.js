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

//console.log(loginUserMessege());

function calculateCartPrice(...num1){
return num1
}
// function calculateCartPrice(val1,val2,...num1){ //output is 800,300 because val1 get 200 and val2 get 900
//     return num1
//     }
//console.log(calculateCartPrice(200,900,800,300));

// object in function
const user = {
    username :"suhani",
    price:200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"hitesh",
    price:"400"
})

// array in funtion

const myNewArray = [200,434,44,234,4545]
function returnSecondValue (getArray){
    return getArray[2]
}
//console.log(returnSecondValue(myNewArray)); //output is 44 
console.log(returnSecondValue([34,343,5454,232])); // output is 5454