function multiplier(num1, num2){
    return num1*num2;
}

console.log(multiplier(3,4));

function greeting (name, age) {
    return "jas sum " + name + " i imam "+ age;
}
console.log(greeting("Nenad", 24));

console.log(Math.pow(2,3));

function power (base,exponent) {
    var result = 1;
    for (var i = 0; i<exponent; i++) {
        result*=base;
    }
    return result;
}

console.log(power(2,3));

//Smestuvanje na funkcija vo variabla

var test = function() {
    return "From a variable";
}

console.log(test());

var landscape = function() {
    var result = "";

    var flat = function(size) {
        for(var i = 0; i<size; i++){
            result+="_";
        }
    }
    var mountain = function(size){
        result+="/";
        for(var i = 0; i < size; i++){
            result+="'";
        }
        result+="\\"
    }

    flat(4);
    mountain(3);
    flat(4);
    mountain(3);
    flat(4);
    return result;
}
console.log(landscape());


// Escape character \ ako koristime dva para navosdnici za da gi prepoznae

function future () {
    return "we don't have flying cars";
}

console.log("The future says", future());

