
// number type

let scoreCard:number=128; //only number should be assign otherwise will give type error
//scoreCard="My Score";

//string type

let playerName:string= "Maxwell";  //only string should be assign otherwise will give type error
//playerName=250;

//boolean type

let isLoggedIn : boolean = false;  //only boolean should be assign otherwise will give type error







// let Add = (num1:number,num2:number):number =>{
//     return num1+num2;
// }

// console.log(Add('10',20));
// let number1=10;
// number1="saurabh";

// let car : {
//     model:string;
//     price:number;
//     company_name:string;
//     car_name:string;
// } = {
//     model:"suzuki-siarra-D32",
//     price:2000000,
//     company_name:"Maruti",
//     car_name:"Siarra"
// }

// console.log(car);

// let array : (string | number)[] = ["Sam","Padmi",1,100];
interface Person {
    firstName: string;
    lastName: string;
}

function getFullName(person:Person) {
    return `${person.firstName} ${person.lastName}`;
} 

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(person));
