// var getdocode = document.getElementById("getcode")
// var verifycode = document.getElementById("verifycode")

// var verification_Id="";

// if(getdocode!=null){

// getdocode.addEventListener("click",function(){
//     // window.open(heigh)
//     var phone_no = document.getElementById("number1").value
//     console.log(phone_no)
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//         'size': 'normal',
//         'callback': function (response) {
         
//         },
//         'expired-callback': function () {
           
//         }
//     });

//     var cverify = window.recaptchaVerifier;//store result 
//     firebase.auth().signInWithPhoneNumber(phone_no, cverify)
//         .then((confirmationResult) => {
//             console.log(confirmationResult)//return vef_id=>code 
//              verification_Id= confirmationResult.verificationId
//              localStorage.setItem("verification_Id", verification_Id)
//              window.location.replace("verify_code.html")
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// })
// }

// if(verifycode!=null){

// verifycode.addEventListener("click",function(){
//     var code = document.getElementById("code1").value
//     var verification_Id=   localStorage.getItem("verification_Id")
//     const credential = firebase.auth.PhoneAuthProvider.credential(verification_Id, code);

//     // Sign in the user with the credential
//     firebase.auth().signInWithCredential(credential)
//         .then((userCredential) => {
//             // User successfully signed in
//             const user = userCredential.user;
//             console.log('User signed in:', user);
//         })
//         .catch((error) => {
//             // An error occurred while signing in the user
//             console.error('Error signing in:', error);
//         });

// })
// }

console.log(firebase.firestore())

const add_Data=()=>{


    // var key = localStorage.getItem("Data_key")
    // console.log(key)

    // firebase.firestore().collection("users").doc(key).delete()

    // var id = firebase.database().ref("users").push().getKey()//data realtime
   
    // var obj ={
    //     name:"aldfgdfgdi",
    //     phone_no:"118gfdgdf2918",
    //     id_key:id
    // }

    // console.log(id)
    // firebase.firestore().collection("users").doc(id).set(obj)


    // .then((docRef) => {
    //     // console.log("Document written with ID: ",docRef);
    //     localStorage.setItem("Data_key",id)
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });





}