// var a = document.getElementById("h1")
// console.log(a)

// var a = document.getElementsByClassName("class1")
// console.log(a[0].innerHTML)

// var a = document.getElementsByTagName("div")
// console.log(a[3].innerText)

// var id1 = document.getElementById("id1")
// console.log(id1)
// var h1 = id1.getElementsByTagName("b")
// console.log(h1)
// h1[0].innerHTML+=" new user<br/>"
// h1[1].style.color="red"
// h1[0].style.fontSize="100px"

// var btn = document.getElementById("btn")
// btn.addEventListener("click",function(){
//     alert("ok")
// })

// var list = document.getElementById("list")
// var inp = document.getElementById("text")
// var getlist = list.getElementsByTagName("li")
// console.log(getlist)
// for (var i in getlist) {
//     getlist[i].className = "none"//display none

// }
// i = 0
// var data = document.getElementById("btn1")
// data.addEventListener("click", function () {
//     var inpdata = inp.value
//     if (i >= getlist.length) {
//         alert("not enter ")
//     }
//     else {
//         if (inpdata != null && inpdata != "") {
//             getlist[i].innerText = inpdata
//             getlist[i].className = "" //remove display none
//             i += 1
//         }
//     }

// })

// var h1 = document.getElementsByTagName("h1")
// console.log(h1)
// console.log(h1[0])
// setTimeout(() => {
//     h1[0].setAttribute("style", `
//     color:red;
//     background-color:yellow;
//     font-size:40px
//     `)
//     console.log(h1[0])
// }, 5000)

// setTimeout(() => {
//     console.log(h1[0].getAttribute("style"))
//     // h1[0].removeAttribute("style")
// }, 8000)


// h1[0].style.backgroundColor

// var btn1 = document.getElementById("btn1")
// var class1 = document.getElementsByTagName("h1")
// btn1.addEventListener("click", function () {

//     if (btn1.innerText != "hide") {
//         class1[0].removeAttribute("class")
//         btn1.innerText = "hide"

//     }
//     else {
//         class1[0].setAttribute("class", "none")
//         btn1.innerText = "show"
//     }
// })
i=0
var img1 = document.getElementById("img1")
var pre = document.getElementById("pre")
var nxt = document.getElementById("nxt")

array = ["./WIN_20220518_10_55_28_Pro.jpg",
"./WIN_20220518_10_55_32_Pro.jpg",
"./WIN_20220804_10_35_19_Pro.jpg"]
function next(){
    if(i==0){
        img1.src=array[1]
        pre.removeAttribute("disabled")
        i+=1

    }
    else if(i==1){
        img1.src=array[2]
       nxt.setAttribute("disabled",true)
        i+=1

    }
}
function pre_fun(){
   
    if(i==1){
        img1.src=array[0]
        pre.setAttribute("disabled",true)
        nxt.removeAttribute("disabled")
        i-=1
    }
    else  if(i==2){
        img1.src=array[1]
        nxt.removeAttribute("disabled")
        i-=1
    }

}