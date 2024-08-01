//for loop
debugger;
// for (var i = 0; i < 5; i++) {
//     document.write(`<h1> For Loop ${i} </h1>`)
// }

document.write(`<select>`)
for (var i=0; i<=200; i++){
    document.write(`<option> ${i} </option>`)
}
document.write(`</select>`)

for(var i=0; i<=10; i++){
    if(i==3){
        document.write("<h2> Happy Birthday </h2>");
        //break
        continue
    }
    document.write(`<h1> for loop ${i} </h1>`)
}