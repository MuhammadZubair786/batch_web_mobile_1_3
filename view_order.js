var vieworder= document.getElementById("vieworder")
var main_data=[]
firebase.database().ref("Orders").once("value",async (snap)=>{
    // console.log(snap.toJSON())
    if(snap.toJSON()!=null){
    var value = Object.values(snap.toJSON())
    // console.log(value)
    for(var i of value){
        // console.log(i.User_Id)
       await  firebase.database().ref("user").child(i.User_Id).once("value",(db)=>{
            console.log(db.toJSON())
            var obj ={
                email:db.toJSON()["email"],
                username:db.toJSON()["username"],
                Dish_Name:i.Dish_Name,
                Order_Key:i.Order_Key,
                img_Url:i.img_Url,
                status:i.status,
                Price:i.Price,
                User_Id:i.User_Id,
                
            }
            // console.log(obj)
            main_data.push(obj)
        })
        
    }
    // console.log(main_data)
    main_data.map((v,i)=>{
        console.log(v)
        vieworder.innerHTML+=`
      
        <tr>
        <td>${i+1}</td>
        <td>${v.Dish_Name}</td>
        <td>${v.Price}</td>
        <td>${v.username}</td>
        <td>${v.email}</td>
       
        <td>
        <img src=${v.img_Url } style="width:200px;height:50px" alt="">
      </td>
      <td>${v.status}</td>
      <td id=${v.User_Id}>
      <select name="" id=${v.Order_Key} onChange=CHG(this)>
      <option value="" selected disabled >Select Status</option>
      <option value="Order">Order</option>
      <option value="Accept">Accept</option>
      <option value="Reject">Reject</option>
      <option value="Picked">Picked</option>
      <option value="Delievered">Delievered</option>



  </select>
      </td>
    </tr>
    
        `
    })
}
   
})

async function CHG(e){
    console.log("DATA")
    console.log("order"+e.id)
    console.log(e.parentNode.id)
    console.log(e.value)
    await firebase.database().ref("Orders").child(e.id).update({
        status:e.value
    })

    await firebase.database().ref("user").child(e.parentNode.id).child("MyOrders").child(e.id).update({
        status:e.value
    })

    window.location.reload()
    
}