// let arr1 =[1,2,3,4]
// let arr2 =[5,6,7,8]
// let arr3 =[5,6,7,8]

//spread op =>combing array of element 
// let c = [arr1,arr2]
// let c =[...arr1,"call",...arr3,"das",...arr2]
// console.log(c)
      
// let obj1 ={
//     name :"asad",
//     class:6
// }
// let obj2 = {
//     class:4,
//     department:"hr",
//     status :true
// }
// let obj3 = {obj1,obj2}
// console.log(obj3)

// let obj3 = {...obj2,...obj1}
// console.log(obj3)

// destructing =>

// let arr1 =[1,2,3,4,6,7,8]

// let a = arr1[0]
// let b = arr1[1]



// let [a,...b]= arr1
// console.log(a,b)

// let admin_record = {
//     fee_status:"true",
//     roll_no:12,
//     sem:2

// }

// let depart = {
//     math:100,
//     roll_no:12,
//     name:"asad",
//     attandance :'100%'
// }

// let join_rec = {...admin_record,...depart}
// console.log(join_rec)

//carshow:
//admin=>
//con1,con2,con3


// let a1 = [1,2,3]

// let [a,...c]=a1

// console.log(a,c)

// destructing obj 
// let admin_record = {
//     fee_status:"true",
//     roll_no:12,
//     sem:2
// }
// let admin_record1 = {
//     fee_status:"true",
//     roll_no:12,
//     sem:2
// }

// let a1 = admin_record.fee_status
// let b1 = admin_record.roll_no
// let c1 = admin_record.sem

// console.log(a1,c1)
// let admin_record = {
//     fee_status:"true",
//     roll_no:12,
//     sem:2
// }
// let admin_record1 = {
//     fee_status:"true",
//     roll_no:12,
//     sem:2
// }
// let {fee_status,roll_no}= admin_record1
// console.log(fee_status,roll_no)


// var obj3=
// [
//     {
//     result:{
//         name:"exam1",
//         // marks:"100",
//         status:"pass",
//         marks:[100,20,40]
//     },
//     fee:{
//         fees : 1000
//     }
// }
// ]

// var add:[
//     provinc:sindh,
//     street:{
//         postcode:,
//         address:{

//         }
//     }
// ]

// map=>array ,
// filter=>

// let a=[1,2,10,3,4,5,6,7,8]
// let b = a.filter((v)=>v>5)
// console.log(b)

// let a=[1,2,10,3,4,5,6,7,8]
// let b = a.filter((v)=>v%2==0)
// console.log(b)


// for(let j of a){
//     if(j>5)
//     {
//         console.log(j)
//     }
// }
// for(let i=0;i<=a.length;i++){
//     if(i>5){
//         console.log(i)
//     }
// }

let admin_record=[
    {
        fee_status:"true",
        roll_no:12,
        sem:2  ,
        name:"baber",
        
    },
    {
        fee_status:"false",
        roll_no:13,
        sem:4,
        name:"asad" 
    },
    {
        fee_status:"true",
        roll_no:14,
        sem:2  ,
        name:"saqib"
    },
    {
        fee_status:"false",
        roll_no:15,
        sem:2 ,
        name:"ali"
    },
    {
        fee_status:"false",
        roll_no:16,
        sem:4,
        name:"smit" 
    },
]

let sel = document.getElementById("sel")
let sel1 = document.getElementById("sel1")
let getrecord1 = ()=>{
    let data = document.getElementById("data")//data
    data.innerHTML=""
  
    let b = admin_record.filter((v)=>v.fee_status==sel.value && v.sem==sel1.value)//data filter
    console.log(b)



    b.map((v,i)=>{
        data.innerHTML+=`
        <h1>${v.roll_no} ${v.name}</h1>
        `
    })
}

// getrecord()

// jst
// var obj = {
//     "hyderabad":{
//         [

//         ]
//     }
// }