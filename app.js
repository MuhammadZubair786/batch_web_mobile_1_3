// var arr =[1,2,3,45,35,56,78,45]

// // arr.splice(3,3)
// // arr.splice(3,0,"smit",23,45)
// // console.log(arr)

// arr.push("smit")
// console.log(arr)


// arr.unshift("new course")
// console.log(arr)

// arr.pop()
// console.log(arr)


// arr.shift()
// console.log(arr)


// arr.splice(5,1)
// console.log(arr)

// arr.splice(3,2,"hello1","apple","new user")
// console.log(arr)

// arr.sort()
// console.log(arr)

// var chk1= arr.indexOf("hell")
// console.log(chk1)

// var a=[2,3,45,45,56,45,67,45]
// // var chk1 = a.lastIndexOf(45)
// // console.log(chk1)

// var chk1=a.indexOf(45)

// var chk2=a.indexOf(45,chk1+1)
// console.log(chk2)

// var chk3=a.indexOf(45,chk2+1)
// console.log(chk3)

// var data = a.includes(67)
// console.log(data)

// var new1 = a.join(" ")
// console.log(typeof new1)

// var c1 = "hello world"
// var data = c1.split(" ")
// console.log(data)

// console.log(a.length)
// a.length=3
// console.log(a)

// var a=[2,3,4,5,6,5,3,4,5,6,7,8,7,6,6,6,6]
// if(a[0]==5){
//     console.log("get")
// }
// if(a[1]==5){
//     console.log("get")
// }
// if(a[2]==5){
//     console.log("get")
// }
// if(a[3]==5){
//     console.log("get")
// }
// if(a[4]==5){
//     console.log("get")
// }
// if(a[5]==5){
//     console.log("get")
// }

// var inp =prompt("enter data ")
// if(inp.length>0){
//     for(var i=0;i<parseInt(inp);i++){
//         document.write("VALUE :"+i+"<BR>")
//     }

// }
// else{
//     for(var i=0;i<10;i++){
//         document.write("VALUE :"+i+"<BR>")
//     }
// }
var arr =[]
for(var i=0;i<10;i++){
    var data = prompt("enter data")
    if(data==""){
        document.write("empty value")
        break;
    }
    else{
    arr.push(data)
}}

document.write(arr)










