var product= document.getElementById("product")


firebase.database().ref("Dishes").once("value",(snap)=>{
    // console.log(snap.toJSON())
if(snap.toJSON()!=null){
    var value = Object.values(snap.toJSON())//object to array 
    // console.log(value)

    value.map((v,i)=>{
        console.log(v)
        product.innerHTML+=`
        <tr>
            <td>${i+1}</td>
            <td>${v.Dish_Name}</td>
            <td>${v.Price}</td>
            <td>${v.Qty}</td>
            <td>
            <img src=${v.img_Url} style="width:200px;height:50px" alt="">
          </td>
        </tr>`
    })
}
})