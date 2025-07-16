//Arithmetic Operators +,-,*,/,%,++,--,**
// var a=parseInt(prompt("Enter first Number"))
// var b=parseInt(prompt("Enter second Number"))
// console.log(typeof a)
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

var a=2
//increment pre inc, post inc
console.log(a++)
console.log(a)
console.log(++a)
console.log(a)
//decrement pre dec, post dec
var b=3
console.log(b--)
console.log(b)
console.log(--b)
console.log(b)
//exponential
var c=4
console.log(c**2)

//Assignment Operators =,+=,-=,*=,/=,%=,**=
console.log("Assignment Operators")
var d=5
var e=6
console.log("Addition")
console.log(d+=e) //d=d+e //d=5+6=11
console.log("Subtraction")
console.log(d-=e) //d=d-e //d=11-6=5
console.log("Multiplication")
console.log(d*=e) //d=d*e //d=5*6=30
console.log("Division")
console.log(d/=e) //d=d/e //d=30/6=5
console.log(d+=e,d-=e)
//Comparison Operators ==,===,!=,!==,>,<,>=,<=
console.log("Comparison Operators")
var f=5
var g='5'
var h=6
console.log(f==g) //true
console.log(f===g) //false
console.log(f>h) //false
console.log(f<h) //true
console.log(f>=h) //false
console.log(f<=h) //true

//Logical Operators &&,||,!
console.log("Logical Operators")
console.log('admin'=='admin' && 'password'=='password') //true
console.log('admin1'=='admin' && 'password'=='password') //false
console.log('admin'=='admin' || 'password'=='password') //true
console.log('admin1'=='admin' || 'password'=='password') //true
console.log(!true) //false
console.log(!false) //true

//Terinary Operators ?: (condition)?true:false
console.log("Terinary Operators")
console.log(5>6?' its true':' its false') //false

//Conditional Operators if,else,else if
console.log("Conditional Operators")
if(6>5){
    console.log("Its true")
}
else if(5==='5'){
    console.log("Data Type not matched")
}
else{
    console.log("Its false")
}

var day=parseInt(prompt("Enter Day"))
switch(day)
{
    case 0: document.write("Today is Saturday");
    break
    case 1: document.write("Today is Sunday");
    break
    case 2: document.write("Today is Monday");
    break
    default: document.write("Invalid")

}