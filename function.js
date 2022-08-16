//object constructor function
function Student(firstName, lastName)
{
        this.firstName = firstName;
        this.lastName = lastName;
        
}
let student1 = new Student("usama", "irshad")
console.log(student1);


// function littlerals
let name = "usama";
let course = "javascript";

var obj = {
    name: name,
    course: course
};