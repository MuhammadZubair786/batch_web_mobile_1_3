// var arr = ["mONDAY", "TUESDAY", "WED", "thur", "fri", "sat", "sun"]
// var data = prompt("enter range with in  0 TO 6")
// switch (data) {
//     case "0":
//         console.log(arr[0])
//         break

//     case "1":
//         console.log(arr[1])
//         break
//     case "2":
//         console.log(arr[2])
//         break
//     case "3":
//         console.log(arr[3])
//         break
//     case "4":
//         console.log(arr[4])
//         break
//     case "5":
//         console.log(arr[5])
//         break
//     case "6":
//         console.log(arr[6])
//         break
    

//     default:
//         console.log("iNCORRECT VALUE")
// }

// var arr =[1,2,3,4,5,6,7,8,9,10,15,45,34,23,25]
// // arr=[5,10,15,25,45]

// for(var i=0;i<arr.length;i++){
   
//     if(arr[i]%5==0){
//         console.log(arr[i]+"number is divide by 5")
//     }
//     if(arr[i]%5!=0){
//         arr.splice(i,1)
//         i=i-1

//     }
// }
// document.write(arr+"<br>")




// for(var k of arr){
//     document.write(k+"<br>")
// }

// var inp = prompt("Enter value")
// for(var i=0;i<inp.length;i++){
//     document.write("Ascii Value of "+inp[i]+" is : "
//             +inp.charCodeAt(i)+"<br>")

// }

cap=[]
small=[]
num=[]
for(var i=0;i<10;i++){
    var data = prompt("Enter value")
    if(data.charCodeAt(0)>=65 && data.charCodeAt(0)<=90){
       
        cap.push(data)
    }
    if(data.charCodeAt(0)>=97 && data.charCodeAt(0)<=122){
       
        small.push(data)
    }
    if(data.charCodeAt(0)>=48 && data.charCodeAt(0)<=57){
       
        num.push(data)
    }
}

console.log(cap)
console.log(small)
console.log(num)

