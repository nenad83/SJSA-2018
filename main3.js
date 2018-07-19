//var size = prompt("What is the size of the pyramid")
//function drawPyramid(size){
   // var result="";

   // for(var i =0; i < size; i++){
    //    result+="#";
        //console.log(result);
   // }
//}
//drawPyramid(size);


//PROTOTYPES

function Rabbit(type){
    this.type = type;
}
Rabbit.prototype.speak = function(phrase){
    console.log("The "+this.tip+" Rabbit says " +phrase);
}

var zeko = new Rabbit("A");
zeko.speak("Hello world");

function Person(firstName, lastName, age, proffesion){
    this.firstName = firstName;
    this.lastName= lastName;
    this.age = age;
    this.proffesin = proffesion;
}Person.prototype.greeting = function(phrase){
    console.log(phrase + " I am " +this.firstName+" "+
this.lastName + " I'm "+this.age+" and work as "+ this.proffesion);
}
var person = new Person("Sanja", "Taskovska", "24", "front-end developer");
person.greeting("hello");
console.log(person.firstName);


function Teacher(firstName, lastName, gender, university, subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.university = university;
    this.subject = subject;
}
Teacher.prototype.greeting = function(){
    var prefix;
    if(this.gender =="male" || this.gender =="Male" || this.gender == "m"){
        prefix = "Mr."
    }else {
        prefix = "Ms."
    }

    alert("Hello "+ prefix+ " "+ this.firstName+ " " + this.lastName +
" Welcome to "+ this.university+". You will teach " + this.subject);

}
var sanja = new Teacher("Sanja", "Taskovska", "f", "Semos","javascript");
sanja.greeting();

//ova ne se koristi 


//KLASI

class User {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log("Hello " + this.name);
    }
}
var a = new User("Sanja");
a.sayHi();

class Rectangle {
    constructor(w, h){
        this.width = w;
        this.height = h;
    }
    calcArea(){
        return this.width*this.height;
    }
    area(){
        return this.calcArea();
    }

}
var rectangle = new Rectangle(10,10);
console.log(rectangle.area());



class SimpleDate {
    constructor(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    addDays(nDays){
        return this.day +=nDays;
    }
}

var today = new SimpleDate(19,07,2018);
today.addDays(5);
console.log(today);


//NASLEDUVANJE


class Teacher{
    constructor(firstName, lastName,subject){
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
    }
}

class UniTeacher extends Teacher{
    constructor(firstName, lastName, subject, university, gender){
        super(firstName, lastName, subject)
        this.university = university;
        this.gender = gender;
    }

        greeting(){
            alert("Hello "+this.firstName+" "+ this.lastName+
        ". I will be teaching at "+ this.university);
        }
}

var teacher = new UniTeacher("Sanja", "Tashkovska","javascript","semos","f");
teacher.greeting();



