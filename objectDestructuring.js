const student={
    name:"Elle",
    age:45,
    gender:"Female"
}

function printStudent({name, age, gender}, course){

    console.log(`The student name is ${name}, age is ${age}, gender is ${gender} and course is ${course}.`)

}

printStudent(student, "Computing")