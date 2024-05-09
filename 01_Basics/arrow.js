const user = {
    username :"suahni",
    price:999,

    welcomeMessege :function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessege()
// user.username = "tanu"
// user.welcomeMessege()
//console.log(this);

// function chai (){
//     let username = "suhani"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username  =" suhani"
//     console.log(this);

// }
// chai()

//basic arrow function
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,5));

// const addTwo = (num1 ,num2) => num1 + num2
// const addTwo = (num1 ,num2) => (num1 + num2)
const addTwo = (num1 ,num2) =>({username :"suhnai"})
console.log(addTwo(2,5));


