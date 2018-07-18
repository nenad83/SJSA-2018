function sum (num1,num2) {
    return num1+num2;
}
console.log(sum(2,5));
console.log(sum(7,10));
console.log(sum(100,1000));


//Funkcija za komparacija sso parse(da go smeni brojot vo integer)

var first_number = parseInt(prompt("Enter number"));
var second_num = parseInt(prompt("Enter second number"));
console.log(first_number);

function compare(num1, num2){
    var result = "";
    if(num1>num2){
        result+num1+ " is bigger than "+ num2;
    }else if(num1<num2){
        result+=num2+ " is bigger than "+num1;

    }else{
        result+=num1+" and "+num2 +" are equal";
    }
    return result;
 }
//console.log(compare(first_number,second_num));


// Za proverka na par nepar broevi (Booleans)
function greeting(name) {
    return "Hello " + name;
}
console.log(greeting("Neno"));

function parnepar (a) {
    if(a%2==0) {
        return true;
    }else
    return false;
}
if(parnepar(5)==true) {
  // console.log ("Brojot e paren");
}else {
    //console.log ("Brojot e neparen");
}

function temp(degrees,conversionType) {
    if(conversionType == "c2f"){
      //  console.log(degrees+" form celsius to farenheit is "+ (degrees*(9/5)+32));

    }else if(coversionType == "f2c"){
       // console.log(degrees+" from fahrenheit to celsius is "+ ((degrees-32)*5/9));

    }else{
      //  console.log("Unknown type of conversion");
    }
    
}
//temp(120,"f2c");

//Funkcija kolku pati se povtoruva nekoj karakter vo nekoj string

function count(str, char){
    var c = 0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)== char){
            c++;
        }
    }
    return c;
}
console.log(count("Hello world","l"));

//charAt go zema karakterot od stringot spored indexot(i)

//istoto za od niza da go dobies indexot na karakterot

var niza = [];
function count(str, char){
    var c = 0;

    for(var i=0; i<str.length; i++){
        if(str.charAt(i)== char){
            c++;
            //niza.push(i);
        }
    }
    return c;
}
console.log(count("Hello world","l"));
console.log(niza);

//timer za kolku vreme da se izvrsi nekoja funkcija

//setTimeout(function(){
  //  alert("Hello world");
//}, 5000);


//setInterval(function(){
   // alert("Neno");
//},2000);

var bomb = setInterval(function(){
    console.log("BOOM");
},10000);
setTimeout(function(){
    clearInterval(bomb);
    alert("Bomb defused");

},9000);

