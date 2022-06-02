// let Add = (num1:number,num2:number):number =>{
//     return num1+num2;
// }
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));
