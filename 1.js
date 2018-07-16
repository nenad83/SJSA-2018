var my_first_object = {firstname: "Sanja",
 lastname: "Taskovska"};
 var person = "Sanja";
 var another_person = person;
person = "Dijana";
another_person = person;

console.log(another_person);
console.log(person);

var licnost = {name: "Semos"};
var druga_licnost = licnost;
licnost.name = "Petko";

console.log(druga_licnost.name);
console.log(licnost.name);
console.log(my_first_object);

var ageLimit = {5: "Too young", 90: "Too old"};
console.log(ageLimit["5"]);

var mug = new Object();
mug.color = "white";
console.log(mug.color);

var mug = {color: "white", weight: "250g", material: "porcelain", size: "s"};

console.log(mug);
console.log("This mug is " + mug.color + " and wights " + mug.weight
+ " made from material " + mug.material + " with a size " + mug.size);

var movie = {
    name: "Pulp fiction",
    year: 1994,
    genre: "Crime",
    awards: ["Palme D'or"]
}

movie.awards.push("Academy awards");
movie.something = "something";
delete movie.year;
console.log(movie);




var car = {
    model: "Ford",
    year: 2017,
    tires: ["Left top tire", "Left bottom tire", "Right top tire", "Right bottom tire"]
};
var extracted_tire = car.tires.splice(2,1);
console.log(extracted_tire);
console.log(car.tires);

var i = 5;
for(i = 0; i <= 50; i += 5) {
    console.log("Current number is " + i);
}

for(var i = 0; i<=10; i++) {
    console.log("Current count is " + i);
}

for(var i = 100; i >=0; i--) {
    console.log(i);
}
var colors = ["red", "green", "blue"];
for(var i = 0; i<colors.length; i++) {
    console.log(colors[i]);
}

document.getElementById("demo").innerHTML = colors;



for(var i = 0; i<=50; i++) {
    if(i % 2 == 0) {
        console.log("Eve number " + i);
    }else {
        console.log("Odd number - " + i);
    }
}

var names = [{name: "Sanja", lastname: "Taskovska"},
             {name: "Semos"},
            {name: "Slave"},
            {name: "Gjorgji"}];
for(var i = 0; i<names.length; i++){
    console.log(names[i].name + " " + names[i].lastname);
}

var multiplier = 9;
for(var i =0; i<=10; i++) {
    var result = multiplier*i;
    console.log(multiplier+"*"+i+"="+ result)
}

var person = {
    firstname: "Sanja",
    lastname: "Taskovska",
    test:[]
}
for(var x in person) {
    console.log(x);
    console.log(person[x]);
}




var result = "";
var i = 0;
while(i<=5) {
    result+="<br> The number is "+i;
    i++;
}

document.write(result);