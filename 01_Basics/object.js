// singleton

// object literals
//Object.create

const mySym= Symbol("Key1")
const jsuser = {
    name :"suhani",
    id:"3434",
    [mySym]:"key3",
    age:19,
    email:"afjhdjfhdjf@gmai.con",
    location :"indore",
    isLoggedout:false


}
// console.log(jsuser.location);
// console.log(jsuser["email"]);
// console.log(jsuser["name"]);
// console.log(jsuser.name);
// console.log(jsuser[mySym]);

jsuser.email = "shani@gmial.com"
//console.log(jsuser);
//Object.freeze(jsuser)
jsuser.email = "suhanitamrkar@gmail.com"
//console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsuser.greeting());
jsuser.greetingTwo= function(){
    console.log(`Hello  jS user ${this.name}`);
}
console.log(jsuser.greetingTwo());