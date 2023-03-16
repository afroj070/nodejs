// const a={
//     "name":"afroj",
//     "age":22,
//     "email":"afrojahmad@ddd.come"
// }
// console.log(a);

// var nam = "afroj";
// var age = 12;

// console.log("hi "+nam+"you are "+age+"  years old");

// class Users{
//     constructor(){
//         this.name = "afroj";
//         this.age = 33;
//     }
//     getname(){
//         return this.name;
//     }
//     getage(){
//         return this.age;
//     }
// }
// var user = new Users();
// console.log(user.getname());

class Users{
    constructor(){
        this.name="ahmad";
        this.age = 11;
        this.email = "afroj44@gmail.com";
    }
    getname(){
        return this.name;
    }
    getage(){
        this.age;
        return this.age;
    }
    getemail(){
        return this.email;
    }
}
var user = new Users();
// console.log(user.getage())
// console.log(user.getname())
console.log(user.getemail())