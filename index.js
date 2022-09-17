// named function
//function greetTheStudent(studentName){ // parameter
//     return `Hello There ${studentName}`;
// }

// const greetTheStudent = function (studentName) {
//     return `Hello There ${studentName};`
// }

// fat arrow function
// const greetTheStudent = (studentName)=> {
//     return `Hello there ${studentName}`;
// }

const greetTheStudent = studentName => `Hello there ${studentName}`;

//FULL NAME FUNCTION
// const fullName = function (firstName, middleName, lastName){
//     return `#{firstName}, ${middleName}, #{lastName}`;
// }

//ARROW FUNCTION
// const fullName = (firstName, middleName, lastName) => {
//     return `#{firstName}, ${middleName}, #{lastName}`;
// }

const fullName = (firstName, middleName, lastName) =>{
    return `${lastName}, ${middleName}. ${firstName}`;
}
// const student = 'Jenil Patel';
// const greet = greetTheStudent(student); //argument
// console.log(greet);

const titleName = fullName('Jenil', 'C', 'Patel');
console.log(titleName);

//console.log(message + ' ' + studentName;
//console.log(message + ' ' + studentName2;