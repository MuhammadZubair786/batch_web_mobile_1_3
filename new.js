var email = document.getElementById("email")
var password = document.getElementById("password")
var signin = document.getElementById("signin")

signin.addEventListener("click", function () {
    console.log(email.value)
    console.log(password.value)
    firebase.auth().signInWithEmailAndPassword("aehan2@gmail.com", "123456")
        .then((userdata) => {
            console.log(userdata.user.uid)
            //admin 
            firebase.database().ref("Admin/").child(userdata.user.uid)
            .once("value", (snap) => {
              
                if(snap.toJSON()==null){
                    firebase.database().ref("user/").child(userdata.user.uid)
                    .once("value", (snap) => {
                        console.log("user panel :",snap.toJSON())
                        localStorage.setItem("Uid",userdata.user.uid)
                        window.location.replace("user_panel.html")
                    })


                }
                else{
                    console.log("admin panel :",snap.toJSON())
                    window.location.replace("Admin_panel.html")

                }
                
            })
        })
        .catch((err) => {
            // console.log(err)
            alert(err)
        })
})

