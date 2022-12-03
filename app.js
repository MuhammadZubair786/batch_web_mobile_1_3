var email = document.getElementById("email")
var password = document.getElementById("password")
var emailtxt = document.getElementById("emailtxt")
var passwordtxt = document.getElementById("passwordtxt")
var submittxt = document.getElementById("submittxt")
var selectcntry = document.getElementById("selectcntry")
var setcode = document.getElementById("setcode")
var pkprovince = document.getElementById("pkprovince")
var indprovince = document.getElementById("indprovince")

// var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

var coutry =["pak","ind","na","sa"]
var code =["+922","+91","+333","+966"]


function setcntry(){
    console.log(selectcntry.value)
    for(var i in coutry){
        if(selectcntry.value==coutry[i]){
            setcode.value=code[i]
            if(coutry[i]=="pak"){
                pkprovince.className="show"
                indprovince.className="hide"                
            }
            else if(coutry[i]=="ind"){
                pkprovince.className="hide"
                indprovince.className="show"                
            }
            else{
                indprovince.className="hide" 
                pkprovince.className="hide"

            }
            
        }
    }
    // for(var i of coutry){
    //     if(i==selectcntry.value){
    //         console.log(i) 
    //     }

    // }
//     if(selectcntry.value=="pak"){
//         setcode.value="+92"
        
//     }
//    else  if(selectcntry.value=="ind"){
//         setcode.value="+93"
        
//     }
}

function getdata(){
    event.preventDefault()//form
    if(email.value==""){
        emailtxt.className="show red"
    }
  else  if(password.value==""){
        emailtxt.className="hide red"
        passwordtxt.className="show red"
    }
    else{
        emailtxt.className="hide red"
        passwordtxt.className="hide red"
        submittxt.className="show"
        console.log(email.value)
        console.log(password.value)
        // console.log(emailtxt.className)

        setTimeout(()=>{
            email.value=""
            password.value=""
            submittxt.className="hide"
        },500)
    }
}

// setTimeout(()=>{
//     email.value=""
//     password.value=""
//     submittxt.className="hide"
// },500)

// function chk(){
//     console.log("data ")

// }
//  setInterval(()=>{
//    chk()
// },2000)

// function setemail(){
//     if(email.value!=""){
//         emailtxt.className="hide"
//         if(password.value!=""){
//             passwordtxt.className="hide"
//         }
//         else{
//             passwordtxt.className="show"
//         }
//     }
//     else{

//         emailtxt.className="show" 
//     }
  
// }





