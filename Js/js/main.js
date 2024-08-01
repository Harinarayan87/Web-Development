console.log("External JS")
//Variables
var fname ="Harinarayan"
var lname = "Chaudhary"
var phone = 9860069392

console.log(fname)
console.log(lname)
console.log(phone)
console.log(" My  name is " + fname + " " + lname + " and Phone number is " + phone)

//Variables
var a = 10
console.log(a)
//var can be re declared and re assigned
var a = 20
console.log(a)

//let can be re assigned but not re declared
let b = 30
console.log(b)
// let b = 40//Error
b = 40
console.log(b)

//const can not be re declared and re assigned
const c = 50
console.log(c)


//var= global scope
//let and const = block scope
let ramkoage=10
console.log(ramkoage)//10
if(true){
    let ramkoage=20
    console.log(ramkoage)//20
}
console.log(ramkoage)//10

//Data Types
//Primitive Data Types=Primitive Data Types are immutable
//String
var name="Harinarayan"
console.log(typeof number)//string
//Number
var age=10
console.log(typeof age)//number
//Boolean
var isTrue=true
console.log(typeof isTrue)//boolean
//Undefined
var undefinedValue
console.log(typeof undefinedValue)//undefined
//Null
var nullValue=null
console.log(typeof nullValue)//object


//Symbol=Symbol is a unique and immutable data type introduced in ES6
var symbolValue=Symbol("symbol")
console.log(typeof symbolValue)//symbol

console.log(Symbol("ram")==Symbol("ram"))//false //Symbol is unique


var family=["Harinarayan","Rajesh","Ramesh","Suresh"]
console.log(typeof family)
console.log(family[2])
console.log(family.length)
console.log(family[family.length-1])

var family1={
    name:"Harinarayan",
    age:10,
    isTrue:true,
}
console.log(typeof family1)


//Template Literals(template strings)
var fname="Harinarayan"
var lname="Chaudhary"
document.write("<h1> Hello i am ", fname , "and last name is ", lname, "</h1>" )
document.write(`<h1> Hello i am ${fname} and last name is ${lname} </h1>`)


