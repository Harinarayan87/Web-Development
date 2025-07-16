function book(a){
    console.log(`this is ${a} book`)
}
book('math')
book('nepali')
book('Science')

// function add(n1,n2){
  
//     console.log(n1+n2)
// }
// var a=parseInt(prompt("enter the first number"))
// var b=parseInt(prompt("enter the second number"))
// add(a,b)

// function bio(namee,number){
//     console.log(`Hello i am ${name} and my phone number is ${number}`)
// }
// var namee= prompt("Enter your name")
// var number= prompt("Enter your phone number")
// bio(namee,number)

function abc(){
    return 'this is return function'
}
console.log(abc())

function sum(a=4,b=8){
    return a+b
}
console.log(sum(10))

//arrow function with multi arguments
var arrow=(a,b)=>a+b
console.log(arrow(5,3))


function abc(){
    console.log("say hello")
}
function def(){
    console.log("hello i am 2nd function")
}
setTimeout(abc, 4000)
def()

//callback function

function main(secondlailiyehai){
    console.log("moh first ho hai ")
    secondlailiyehai()
}
function second(){
    console.log("moh chai second")
}

setTimeout(main,4000,second)
