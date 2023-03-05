// let abc = (...c1)=>{
//     console.log(a,b,d,c1)
//     console.log("rest parameters")
// }
// abc(23,45,56,78,978,45)


// let largest_func=(...d)=>{
//     let largest_value = d[0] //first save 
//     for(var j of d ){
//         // console.log(j)
//         if(largest_value<j){
//             largest_value=j

//         }
//     }
//     console.log(largest_value)
// }

// largest_func(34,45,67,45,345,67,34,56)


// var arr =[1,34,56,789]
// for(var j of arr){
//     console.log(j)   //=>j
// }

// var arr =[1,34,56,789]
// for(var j in arr){
//     console.log(arr[j])//index =>arr[j]
// }



// let country=[
//     "pakistan","india","Africa","China"
// ]

// let B = country.filter((v)=>v[v.length-2]=="a")
// console.log(B)



// class Smit{
//     constructor(name,course,age){
//         this.name=name
//         this.course=course
//         this.age=age
//     }
//     getdetail(){
//         console.log(this.name)
//     }
// }

// var std1 = new Smit("asad","SMIT",20)
// std1.getdetail()
// console.log(std1.name)

// var std2 = new Smit("Ali","SMIT web",20)
// console.log(std2.name)


// class Smit{
//     constructor(center,course){
//         this.center=center
//         this.course=course
//     }
//  getdata(a,b){
//         // console.log(`center name is : ${this.center}  course  : ${this.course}`)
//         return a*b
//     }

// }

// class Batch extends Smit {
//     constructor(center,course,Batch){
//         super(center,course)//
//         this.Batch=Batch
       
//     }
    
//     getdata(a,b){
//       console.log(a+b)
//         // console.log(`center name is : ${this.center}  course  : ${this.course} batch anme  ${this.Batch}`)

//     }

//     getcalldata(a1,b1){
//        let a =  super.getdata(a1,b1)
//        console.log(a)
//     }
   
// }


// let center1 = new Batch("SMIT","WEB & APP",2)
// // center1. getcalldata(4,5)
// center1.getdata(4,6)//call child function 
// center1.getcalldata(4,5)
// Smit.getdata()

// arrow function,let ,fetch,map,filter

// let b = new Smit("dhjhd","jdhjhd")
// console.log(b.getdata(4,5))

// fetch 
// data =>Array
// cat=>
// button

// fetch data all and store in two diffe array 
let all_product=[]
let cat=new Set()
var btn = document.getElementById("btn1")
let fetch_data = ()=>{
    let data_promise = new Promise(async(res,rej)=>{
   await  fetch("https://fakestoreapi.com/products")
    .then((data)=>{
        if(data){
            res(data.json())

        }
        else{
            rej("not get ")
        }
        
           
        })
    })
    data_promise.then((result)=>{
        result.map((v,i)=>{
            console.log(v)
            all_product.push(v)
            cat.add(v.category)

        })
        console.log(cat)
        console.log(all_product)
        abc()
        let data = Array.from(cat);
        data.map((v,i)=>{
            btn.innerHTML+=`
            <button>${v}</button>
            `
        })
    })
    .catch((e)=>{
        console.log(e)
    })

}

 fetch_data()
 

 let abc=()=>{
    console.log(all_product)
 }


