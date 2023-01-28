var product_data = document.getElementById("product_data")

firebase.database().ref("Dishes").once("value", (snap) => {
    if (snap.toJSON() != null) {
        console.log(snap.toJSON())
        var value = Object.values(snap.toJSON())
        console.log(value)
        value.map((val, ind) => {
            product_data.innerHTML += `
            <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card" >
      <img src=${val.img_Url} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${val.Dish_Name}</h5>
        <p class="card-text">Price : ${val.Price}</p>

        <a href="#" class="btn btn-primary" id=${val.Product_Key} onclick="setorder(this)">Order</a>
      </div>
    </div>
    </div>
            `
        })

    }
    else {
        console.log("no dishes")
    }
})

async function setorder(e) {
    console.log(e.id)
    var db = firebase.database()

    var get_id = localStorage.getItem("Uid")
    console.log(get_id)

    var check = false

    await firebase.database().ref("Orders").once("value", (snap) => {
        console.log(snap.toJSON())
        if (snap.toJSON() != null) {
            var value = Object.values(snap.toJSON())
            console.log(value)
            for (var i = 0; i < value.length; i++) {
                //    console.log(value[i].Product_Key)
                if (value[i].Product_Key == e.id) {
                    if (get_id == value[i].User_Id) {
                        // alert("Already Order ")
                        check = true
                        break;
                    }
                    else {
                        check = false

                    }
                }

            }
        }


    })

    if (check) {
        alert("Already order")
    }
    else {

        var key = db.ref("Orders").push().getKey()
        console.log(key)
        firebase.database().ref("Dishes").child(e.id).once("value", async function (snap) {
            console.log(snap.toJSON())

            await db.ref("Orders").child(key).set({
                "User_Id": get_id,
                Dish_Name: snap.toJSON()["Dish_Name"],
                Price: snap.toJSON()["Price"],
                Product_Key: e.id,
                Qty: "1",
                img_Url: snap.toJSON()["img_Url"],
                status:"Order",
                "Order_Key": key }
            )
            await db.ref("user").child(get_id).child("Myorder").child(key).set({
                "User_Id": get_id,
                Dish_Name: snap.toJSON()["Dish_Name"],
                Price: snap.toJSON()["Price"],
                Product_Key: e.id,
                Qty: "1",
                status:"Order",
                img_Url: snap.toJSON()["img_Url"],
                "Order_Key": key })
        })

        
    
    }




}