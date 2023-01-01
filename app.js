// console.log(firebase.auth())
var email= document.getElementById("email")
var password= document.getElementById("password")
var signup= document.getElementById("signup")
var signin= document.getElementById("signin")

signup.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
        console.log(user)
        var obj = {
            email:email.value,
            password:password.value,
            name: "smit hyderabad",

        }

        firebase.database().ref("users/").push(obj)
    })
    .catch((e)=>{
        console.log(e.code)
        console.log(e.message)
        alert(e.message)


    })
})

signin.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().signInWithEmailAndPassword(email.value,password.value)
    .then((user1)=>{
        console.log(user1.user.uid)
        console.log(user1.user.displayName)

    })
    .catch((e)=>{
        console.log(e.code)
        console.log(e.message)
        alert(e.message)


    })
})