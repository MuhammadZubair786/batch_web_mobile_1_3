// var a=10//global 

// function abc(){
//     var a =5 //local 
//     console.log(a)
// }
// abc()
// console.log(a)

// ATM CARD : PIN

/*
hedfdf
djkfkjdf
dkfkljdf
kdjfkjd*/

// function b1click(){
//     alert("call")
// }

// function imgclick(e){
//     console.log(e.src)
//     e.src="https://media.istockphoto.com/id/1371751060/photo/grilled-medium-rare-top-sirloin-beef-steak-or-rump-steak-on-a-steel-tray-dark-background-top.jpg?s=612x612&w=is&k=20&c=-m_Op5FJBS5Qor2qcnWg_zL-f33aMPfIn5gnu7IYesI="

//     // alert("img click")
// }

// function imgclick2(e){
//     console.log(e.src)
//     e.src="https://www.shutterstock.com/image-photo/lotus-flower-hd-background-wallpaper-260nw-1273798846.jpg"

//     // alert("img click")
// }

// function imgch1(a){
//     // console.log(a.src)
//     a.src="https://media.istockphoto.com/id/1371751060/photo/grilled-medium-rare-top-sirloin-beef-steak-or-rump-steak-on-a-steel-tray-dark-background-top.jpg?s=612x612&w=is&k=20&c=-m_Op5FJBS5Qor2qcnWg_zL-f33aMPfIn5gnu7IYesI="
//     a.style.border="10px solid red"
//     a.style.height="300px"
//     a.style.width="100%"

// }

// function imgch2(a){
//     // console.log(a.src)
//     a.style.borderRadius="50px"
//     a.src="https://www.shutterstock.com/image-photo/lotus-flower-hd-background-wallpaper-260nw-1273798846.jpg"
//     a.style.border="0px"

// }

function imgch1(e) {

    var img1 = "https://www.shutterstock.com/image-photo/lotus-flower-hd-background-wallpaper-260nw-1273798846.jpg"
    var img2 = "https://media.istockphoto.com/id/1371751060/photo/grilled-medium-rare-top-sirloin-beef-steak-or-rump-steak-on-a-steel-tray-dark-background-top.jpg?s=612x612&w=is&k=20&c=-m_Op5FJBS5Qor2qcnWg_zL-f33aMPfIn5gnu7IYesI="
    if (e.src == img1) {
        e.src = img2

    }
    else {
        e.src = img1
    }
}