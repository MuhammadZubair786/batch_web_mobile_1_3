// for(var i=0;i<=10;i++){
//     for(var j=0;j<=10;j++){
//         if(i==0 || i==10 || j==0 || j==10){
//         document.write("*")
//         }
//         else{
//             document.write("&nbsp;&nbsp;")
//         }
//     }
//     document.write("<br>")
// }

// for(var i=0;i<10;i=i+2){
//     for(var j=10;j>i;j--){
//         document.write("&nbsp;")
//     }
//     for(var k=i+1;k>0;k--){
//         document.write("*")
//     }

//     document.write("<br>")
// }
// for(i=10;i>0;i=i-2){
//     if (i!=10){
//     for(var j=10;j>=i-1;j--){
//         document.write("&nbsp")
//     }
//     for(var k=i-1;k>0;k--){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// }


// for(var k=i+1;k>0;k--){
//     document.write("*")
// }

// for(var a=0;a<10;a++){

//     for(var b=a;b<10;b++){
//         document.write("&nbsp;&nbsp")
//     }
//     for(var c=0;c<a*2-1;c++){
//         document.write("*")
//     }
//     document.write("<br>")
// }
// for(var a=10;a>0;a--){

//     for(var b=a;b<10;b++){
//         document.write("&nbsp;&nbsp")
//     }
//     for(var c=0;c<a*2-1;c++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


var array = [
    [1, 2, 6, 3, 6, 8, 9, 6],
    [4, 5, 6],
    6,
    [4, 5, 6, 6],
    10,
    [2, 3, 4],
    6,
    10
]

for (var i = 0; i < array.length; i++) {
    var chk = 0; //chk element 

    if (array[i].length == undefined) {
        console.log("call")
        if (array[i] == 6) {
            document.write((chk + 1 + "<br>"))
        }
        else {
            document.write(0 + "<br>")
        }
    }
    else {
        console.log(array[i].length)
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] == 6) {
                chk += 1
            }
        }
        document.write(" <br>" + chk + "<br>")
    }



}
