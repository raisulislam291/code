// var name = "Raisul Islam";
// var age = 26;
// var cgpa = 3.00;
// var language = ["bangla", "Hindi", "English"];

// var std1 = {
//     name : "Raisul Islam",
//     age : 26,
//     cgpa : 3.00,
//     language : ["bangla", "Hindi", "English"],
// }
// var std2 = {
//     name : "Tania Ahmed",
//     age : 22,
//     cgpa : 4.00,
//     language : ["bangla", "Spanish", "English"],
// }
// var std3 = {
//     name : "Robin Islam",
//     age : 27,
//     cgpa : 3.50,
//     language : ["bangla", "Hindi", "English", "Urdu"],
// }
// console.log(std2.language);

function student(name,age,cgpa,language){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.language);
    }

}
var std1 = new student("Raisul Islam", 26, 3.50, ["Bangla", "Hindi" ,"Urdu", "English"]);
var std2 = new student("Tania Ahmed", 22, 4.00, ["Bangla", "Urdu", "English"]);
var std3 = new student("Robin Islam", 27, 3.00, ["Bangla", "Hindi", "English"]);

std1.display();
std2.display();
std3.display();