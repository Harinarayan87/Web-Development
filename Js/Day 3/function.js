// //create a function
// function greet(){
//     console.log('Good Morning🌻👌🫵');
// }

// //call the function
// greet();
// greet();

// //function with Arguments and parameters
// function book(a){
//     console.log(`This is ${a} Book`);
// }
// book('math')
// book('nepali')
// book('Computer')

// // function add(n1,n2){
// //     console.log(n1+n2)
// // }
// // add(12,12)
// // var a =parseInt(prompt("Enter the First Number"))
// // var b = parseInt(prompt("Enter the second Number"))
// // add(a,b)


// // function myname(n,nn){
// //     console.log(`My Name is ${n} and Phone number is ${nn}`)
// // }
// // var n=prompt("Enter Your Name")
// // var nn=prompt("Enter your Phone No")
// // myname(n,nn)

// //Return Statement
// function abc(){
//     return 'This is return function'
// }
// console.log(abc())

// function sum(a=1,b=5){
//     return a+b
// }
// console.log(sum(1500051655556654656565465464984984789))
// console.log(sum())

// //Function EXpressions
// var efg=function(a){
//     return a*a
// }
// console.log(efg(3))

// //Arrrow Function
// //Arrow Function with one argument
// var q=a=>a*a
// console.log(q(5))

// //Arrow Function wiith Multi arguments

// var qq=(a,b)=>a*b
// console.log(qq(5,3))


function abc(){
    console.log("Hello Abc")
}
function efg(){
    console.log("Hello its Second Function")
}

setTimeout(abc,2000)
efg()

//solve

function abc1(ww){
    console.log("sir aaunu vayo")
    ww()
}
function efg1(){
    console.log("Aba Start garnu")
}
//using a call back Function
setTimeout(abc1, 4000, efg1);