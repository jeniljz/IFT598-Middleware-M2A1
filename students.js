var students = [];
var student = {
    name: 'Jenil Patel',
    birthYear: 2000,
    course: 'IFT 458',
    grades: 90,
    active: true,
    age: function calculate(){
        if(this.active){
            return 2022 - this.birthYear;
        } else { return 0; }
    }
}

var student2 = {
    name: 'Milan Soni',
    birthYear: 2001,
    course: 'IFT 458',
    grades: 95,
    active: false,
    age: function(){
        if(this.active){
            return 2022 - this.birthYear;
        } else { return 0; }
    }
}

students.push(student);
students.push(student2);
students.forEach((item => console.log(item.age())));

console.log(students);


// console.log(student['name']);
// console.log(students.name);
// console.log(student.age());
// console.log(student2.age());