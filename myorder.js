var uid = localStorage.getItem("Uid")


firebase.database().ref("user").child(uid).child("Myorder").once("value", (snap) => {
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
        <p class="card-text"> ${val.status}</p>
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