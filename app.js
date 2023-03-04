// let arr1=[1,2,3,4]
// let arr2 =[3,4,5]
// let arr4 =["4",3,4,5]
// let arr3 =[...arr1,"next",...arr2,...arr4]

// let obj1={
//     name:"asad",
//     class:3
// }

// let obj2={
//     class:4,
//     school:"abc"
// }

// let obj3={...obj1,...obj2}

// let arr1=[1,2,3,4,7]

// // let a= arr1[0]
// let c =arr1[]
// // let [a,b,d,...c]=arr1
// // console.log(a,b)
// // console.log(c)
// let [,,b]= arr1

// let obj1= {
//     name :"ali",
//     class1:3

// }
// let a = obj1["name"]
// let b = obj1.class
// let {name,class1}= obj1


// filter => array 

// let arr_data =  [0,1,2,3,-4,5,-6,7]
// let b = arr_data.filter((v)=>v>0)
// console.log(b)
// arr_data.map((v,i)=>{
//     console.log(v)
// })

// for(let i=0;i<arr_data.length;i++){
//     if(arr_data[i]>5){
//         console.log(arr_data[i])
//     }
// }
// for(let i of arr_data){
//     if(i>5){
//         console.log(i)
//     }
// }


// let arr = ["ali","smit","react","asad","baber"]
// let b = arr.filter((v)=>v[0]=="a")


// let data = [
//     {
//         id:"3",
//         name:"asad",
//         status:"true",
//         department:"hr"

//     },
//     {
//         id:"1",
//         name:"asad",
//         department:"web"
//     },
//     {
//         id:"2",
//         name:"ali",
//         status:"true",
//         department:"hr"
//     },
//     {
//         id:"3",
//         name:"smit",
//         department:"admin"
//     }
// ]
// let b = data.filter((v)=>v.department=="hr")
// for(var j of b){
//     console.log(j.name)
// }


// let sel = document.getElementById("select")//select kei value get 
// let div = document.getElementById("name")//data set
// let getdata = ()=>{
//     div.innerHTML=""
//     console.log(sel.value)
//     let filter_data = data.filter((v)=>v.department==sel.value)
//     console.log(filter_data)
//     filter_data.map((v,i)=>{
//         div.innerHTML+=`
//         <h1>${v.name}</h1>
//         `

//     })
   
// }



// set=>multiply value =>unique(()

// let set1 = new Set()
// set1.add(1)
// set1.add(2)
// set1.add(3)
// set1.add(1)

// console.log(set1)

// let set1 = ([1,2,3,5])
// let set2 = ([3,4])
// let set3 = new Set([...set1,...set2])
// console.log(set3)

instersetcion,difference







