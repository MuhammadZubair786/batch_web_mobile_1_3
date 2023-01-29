var inp = document.getElementsByTagName("input")
console.log(inp[3].type)
var getfile
var upload = document.getElementById("upload")
var imgurl =""

var dishname = document.getElementById("dishname")
var price = document.getElementById("price")
var qty = document.getElementById("qty")


inp[3].addEventListener("click", function () {
    inp[3].onchange = e => {
        console.log(e.target.files[0])
        getfile = e.target.files[0]
        upload.removeAttribute("disabled")
    }
})

upload.addEventListener("click", async function () {
    event.preventDefault()
    console.log(getfile.name)
    var strg = firebase.storage().ref()
    var uploadTask = firebase.storage().ref().child(`images_smit/${getfile.name}`)
        .put(getfile)

    uploadTask.on('state_changed',
        (sna) => {

            var progress = (sna.bytesTransferred / sna.totalBytes) * 100;//percenatge
    console.log(progress)

            if (progress == 0) {

                alert("Upload Process Start\n Plz Wait For Upload Image In Data Base")
            }


            if (progress == 100) {

                alert("Upload Process Finish \n Successfully Upload Image In Data Base")
            }

        },
        (error) => {

        },
        () => {

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                imgurl = downloadURL;
                console.log('File available at', downloadURL);
                document.getElementById("submit").removeAttribute("disabled")

            });
        }
    );
})

async function submit1(){
    event.preventDefault()
    var key = firebase.database().ref("Dishes").push().getKey()

    var obj ={
        Dish_Name : dishname.value,
        Price:price.value,
        Qty:qty.value,
        img_Url:imgurl,
        Product_Key : key
    }

    console.log(obj)

   await  firebase.database().ref("Dishes").child(key.toString()).set(obj)
    // window.location.reload()
    window.location.href="Admin_panel.html"

}

