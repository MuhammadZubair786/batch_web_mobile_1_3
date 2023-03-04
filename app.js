let baseurl = "https://fakestoreapi.com"
let product_url = "products"
let categories = "categories"
let maindata =[]
let product_data = document.getElementById("product_data")
let btn = document.getElementById("btn")
let loader = document.getElementById("loading")
let promise = new Promise((res, rej) => {
    fetch(`${baseurl}/${product_url}`)
        .then((data) => {
            if (data) {
                res(data.json())
            }
            else {
                rej("Not get data")
            }
        })
})

promise
    .then((data) => {
        document.getElementById("loading").style.display = "none"
        // console.log(data)
        maindata=data
        data.map((v, i) => {

            console.log(v)
            product_data.innerHTML += `
        <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
        <div class="card" style="height:400px;overflow:hidden" >
  <img src=${v.image} class="card-img-top" alt="..." style="object-fit: contain;height:200px">
  <div class="card-body">
    <h5 class="card-title">${v.title}</h5>
    <p class="card-text">${v.description}</p>

  </div>
</div>
</div>
        `
        })

    })
    .catch((E) => console.log(E))


let categories_promise = new Promise((res, rej) => {
    fetch(`${baseurl}/${product_url}/${categories}`)
        .then((data) => {
            if (data) {
                res(data.json())
            }
            else {
                rej("Not get data")
            }
        })
})

categories_promise.then((data1) => {
    console.log(data1)
    data1.map((v, i) => {
        btn.innerHTML += `
        <button  type="button" class="col-lg-2 btn btn-success" onclick="get_cat_product(this)"  >${v}</button>`
    })
})
    .catch((e) => {
        console.log(e)

    })

let get_cat_product = (p) => {
    product_data.innerHTML = ""//PRODUCT EMPTY
    console.log(loader)
    loader.style.display = "inline"
    // console.log(maindata)
    let calldata = maindata.filter((v)=>v.category==p.innerText)
    console.log(calldata)
    loader.style.display = "none"
    calldata.map((v, i) => {
                    product_data.innerHTML += `
                <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
                <div class="card" style="height:400px;overflow:hidden" >
          <img src=${v.image} class="card-img-top" alt="..." style="object-fit: contain;height:200px">
          <div class="card-body">
            <h5 class="card-title">${v.title}</h5>
            <p class="card-text">${v.description}</p>
        
          </div>
        </div>
        </div>
                `
        
                })



    // console.log(p.innerText)
//     let get_product_cat_promise = new Promise((res, rej) => {
//         fetch(`${baseurl}/${product_url}/category/${p.innerText}`)
//             .then((data) => {
//                 if (data) {
//                     res(data.json())
//                 }
//                 else {
//                     rej("not get data")
//                 }
//             })
//     })
//     get_product_cat_promise.then((data) => {
//         console.log(data)
//         loader.style.display = "none"
//         data.map((v, i) => {
//             product_data.innerHTML += `
//         <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
//         <div class="card" style="height:400px;overflow:hidden" >
//   <img src=${v.image} class="card-img-top" alt="..." style="object-fit: contain;height:200px">
//   <div class="card-body">
//     <h5 class="card-title">${v.title}</h5>
//     <p class="card-text">${v.description}</p>

//   </div>
// </div>
// </div>
//         `

//         })
//     })
//         .catch((e) => {
//             console.log(e)
//         })



}

let ALL_PRODUCT = () => {
    product_data.innerHTML = ""
    loader.style.display = "inline"

    let promise = new Promise((res, rej) => {
        fetch(`${baseurl}/${product_url}`)
            .then((data) => {
                if (data) {
                    res(data.json())
                }
                else {
                    rej("Not get data")
                }
            })
    })

    promise
        .then((data) => {
            document.getElementById("loading").style.display = "none"
            // console.log(data)
            data.map((v, i) => {
                console.log(v)
                product_data.innerHTML += `
            <div class="col col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div class="card" style="height:400px;overflow:hidden" >
      <img src=${v.image} class="card-img-top" alt="..." style="object-fit: contain;height:200px">
      <div class="card-body">
        <h5 class="card-title">${v.title}</h5>
        <p class="card-text">${v.description}</p>
    
      </div>
    </div>
    </div>
            `
            })

        })
        .catch((E) => console.log(E))


}
