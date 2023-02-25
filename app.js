// let abc = ()=>{
//     console.log("Data")
// }

// function abc(){}

// let print_data = (_) => {
//   console.log("call function");
//   console.log("hello");
// };

// let get_par1 = (a) => {
//   console.log(a + 7);
// };

// let get_par = (a, b) => {
//   console.log(a + b);
// };

// '',``

// let  a=10
// "value of a is "+a;

// `value of a is ${a}`

// let promise = new Promise((resolv, rejec) => {
//   let a = 10;
//   if (a != undefined) {
//     resolv("Data get ");
//   } else {
//     rejec("not get");
//   }
// });

// // console.log(promise);
// promise.then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.log(`error ${e}`)
// })

let get_product_promise = new Promise((res, rej) => {
  fetch("https://fakestoreapi.com/products")
  .then((data) => {
    if (data) {
      res(data.json());
    } else {
      rej("not get ");
    }
  });
});

get_product_promise
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR"+e);
  });
