//const tinderUser = new Object() this is singleton 
const tinderUser = {};  //this is non singleton
tinderUser.name  ="abc"
tinderUser.id ="23232"
tinderUser.isLogged = false
//console.log(tinderUser);

const regularUser = {
    emai:"suhani@gmial.com",
    fullName : {
        userName : "joe"

    }
}
//console.log(regularUser.fullName.userName);
const obje1 = {1:"a",2:"b",3:"c"}
const obje2 = {4:"d",5:"e",6:"f"}
//const obj3={obje1,obje2}
//const obj3 = Object.assign ({},obje1,obje2)
const obj3= {...obje1,...obje2}
//console.log(obj3);

const  users = [
    { id:1,
        email:"sdjdsfjsdfjsd.com"
    },
    { id:2,
        email:"sdjdsfjsdfjsd.com"
    },
    { id:3,
        email:"sdjdsfjsdfjsd.com"
    }
] 
// users [1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    name :"jshindi",
    price:"999",
    teacher :"hitesh"
}
//course.name

// const {name : courseName} = course

// console.log(courseName);



