// var chk = document.getElementById("t1")
// console.log(chk.innerHTML)

var country = document.getElementById("country")
var province = document.getElementById("province")
var city = document.getElementById("city")
// country.innerHTML="<option>all</option>"
var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
var pkprovice = ["","sindh", "punjab", "kpk"]
var indprovice = ["sindh1", "punjab1", "kpk1"]
var sind_city = ["Hyderabad District",
    "karachi",
    "Bhiria City",
    "Bhiria Road",
    "Bhirkan",
    "Boriri",
    "Chak",
    "Dadu",
    "Daharki",
    "Daulatpur",
    "Digri",
    "Diplo",
    "Dokri",
    "Gambat",
    "Garhi Yasin",
    "Ghotki",
    "Guddu Barrage",
    "Hala",
    "Khairpur Mirs",
    "Hyderabad",
    "Islamkot",
    "Jacobabad",
    "Jamshoro",
    "Jam sahib",
    "Kandhkot",
    "Kandiaro",
    "Karachi",
    "Kashmore",
    "Keti Bandar",
    "Khadro",
    "Khairpur",
    "Khipro",
    "Kiamari",
    "Korangi",
    "Kot Diji",
    "Kotri",
    "Kunri",
    "Lakhi ghulam shah",
    "Larkana",
    "Madeji",
    "Malir",
    "Manjhand",
    "Maqsoodo Rind",
    "Matiari",
    "Mehar",
    "Mehrabpur",
    "Mian Sahib",
    "Miranpur",
    "Mirpur Khas",
    "Mirpur Mathelo",
    "Mithani",
    "Mithi",
    "Moro",
    "Mothparja",
    "Nagarparkar",
    "Nasirabad",
    "Naudero",
    "Naushahro Feroze",
    "Nawabshah",
    "Pir Jo Goth",
    "Piryaloi",
    "Qambar",
    "Qasimabad",
    "Qubo Saeed Khan",
    "Rajo Khanani",
    "Ranipur",
    "Ratodero",
    "Rohri",
    "Sakrand",
    "Samaro",
    "Sanghar",
    "Sann",
    "Sehwan Sharif",
    "Shahbandar",
    "Shahdadkot",
    "Shahdadpur",
    "Shahpur Chakar",
    "Shahpur jahania",
    "Shikarpaur",
    "Sijawal Junejo",
    "Sinjhoro",
    "Sita Road",
    "Sobho Dero",
    "Sukkur",
    "Tando Adam Khan",
    "Tando Allahyar",
    "Tando Bagho",
    "Tando Muhammad Khan",
    "Tangwani",
    "Thari Mirwah",
    "Tharushah",
    "Thatta",
    "Thul",
    "Ubauro",
    "Umerkot",
    "Warah",
]
var punjab_ctiy =

    ["Lahore",
        "Faisalabad",
        "Rawalpindi",
        "Gujranwala",
        "Multan",
        "Bahawalpur",
        "Sargodha",
        "Sialkot",
        "Sheikhupura",
        "Rahim Yar Khan",
        "Jhang",
        "Dera Ghazi Khan",
        "Gujrat",
        "Sahiwal",
        "Wah Cantonment",
        "Kasur",
        "Okara",
        "Chiniot",
        "Kamoke",
        "Hafizabad",
        "Sadiqabad",
        "Burewala",
        "Khanewal",
        "Muzaffargarh",
        "Mandi Bahauddin",
        "Jhelum",
        "Khanpur",
        "Pakpattan",
        "Daska",
        "Gojra",
        "Muridke",
        "Bahawalnagar",
        "Samundri",
        "Jaranwala",
        "Chishtian",
        "Attock",
        "Vehari",
        "Kot Abdul Malik",
        "Ferozewala",
        "Chakwal",
        "Gujranwala Cantonment",
        "Kamalia",
        "Ahmedpur East",
        "Kot Addu",
        "Wazirabad",
        "Layyah",
        "Taxila",
        "Khushab",
        "Mianwali",
        "Lodhran",
        "Hasilpur",
        "Bhakkar",
        "Arif Wala",
        "Sambrial",
        "Jatoi",
        "Haroonabad",
        "Narowal",
        "Bhalwal",
    ]

    var id=[
        'Arunachal Pradesh',
'Assam',
'Bihar',
'Chhattisgarh',
'Goa',
'Gujarat',
'Haryana',
'Himachal Pradesh',
'Jammu & Kashmir',
'Jharkhand',
'Karnataka',
'Kerala',
'Madhya Pradesh',
'Maharashtra',
'Manipur',
'Meghalaya',
'Mizoram',
'Nagaland',
'Odisha',
'Punjab',
'Rajasthan',
'Sikkim',
'Tamil Nadu',
'Tripura',
'Uttarakhand',
'Uttar Pradesh',
'West Bengal',
'Andaman & Nicobar',
'Chandigarh',
'Dadra and Nagar Hav',
'Daman & Diu',
'Delhi',
'Lakshadweep',
'Puducherry',

    ]


for (var i of country_list) {

    //   country.innerHTML +="<option value ="+i+" >"+i+"</option>"
    country.innerHTML += `<option value =${i}>${i}</option>`


}
function setcntry() {
    console.log(country.value)
    province.style.display = "inline"
    city.style.display="none"
    province.innerHTML = ""



    if (country.value == "Pakistan") {
        for (var j of pkprovice) {
            if(j==""){
            province.innerHTML += `<option value ="" disabled selected>Select Country</option>`

            }
            else{
            province.innerHTML += `<option value =${j}>${j}</option>`
            }
        }
    }
    if (country.value == "India") {
        for (var j of indprovice) {
            province.innerHTML += `<option value =${j}>${j}</option>`

        }
    }
}

function setcity(){
    console.log(province.value)
    city.style.display="inline"
    city.innerHTML=""
    if(province.value==pkprovice[1]){
        for(var j of sind_city){
            city.innerHTML += `<option value =${j}>${j}</option>`
        }
    }
    if(province.value==pkprovice[2]){
        for(var j of punjab_ctiy){
            city.innerHTML += `<option value =${j}>${j}</option>`
        }
    }

}
