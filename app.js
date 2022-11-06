// var vist =10
// alert("You vist "+(vist+1)+"Time")

// var inp=parseInt(prompt("Enter dob"))
// document.write("Brith Year "+inp)
// document.write("<br>type of brith year  "+typeof(inp))

// var name=prompt("enter name")
// var qty = prompt("enter qty")
// var p_title = prompt("enter p_title")

// document.write(name +" order  "+ qty+ " "+p_title+" on xyz store")


// var a=10,b=5,c=20;

// task 2
// legal variable
// abc1
// _abc
// hello$
// g$

// illelgal variable
// abc-1
// -abc
// ?jsjs

// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("Variable names can only contain alphabets, numbers,$ and _.")

// var inp1=parseInt(prompt("enter value"))
// var inp2=parseInt(prompt("enter value"))
// var sum = inp1+inp2

// document.write("sum of "+inp1+" and "+ inp2+ " is "+sum)

// // task 2
// var sub = inp1-inp2
// document.write("sub of "+inp1+" and "+ inp2+ " is "+sum)


// var a
// document.write(a)
// a=5
// document.write("<br>" + a)
// a=++a
// document.write("<br>" + a)
// a=a+7

// var ticket = 600
// var buy_ticket= prompt("enter ticket")
// var tprice= buy_ticket*ticket

// document.write("Total cost To Buy "+ buy_ticket+" tickets to move is "+tprice)

// var tabel = prompt("Enter table")
// document.write(tabel +" * "+1+"="+tabel*1)
// document.write("<br>"+tabel +" * "+2+"="+tabel*2)

// var cel = parseInt(prompt("Enter cel"))

// var res = (cel* 9/5)+32

// // console.log(res)
// document.write(res+"<sup>0</sup>")

// var fer =  parseInt(prompt("Enter fer"))

// var res1 = (fer-32)*5/9

// console.log(res1)

// var inp = parseInt(prompt("enter number"))
// var res = ((inp+5)*10)/2
// console.log(res)

var eng = parseInt(prompt("Enter Eng marks"))
if(eng>=0 && eng<=100){
    var urdu =parseInt(prompt("Enter urdu marks"))
    if(urdu>=0 && urdu<=100){
       var math =parseInt( prompt("Enter urdu marks"))

       if(math>=0 && math<=100){
        console.log("all good")

        var res = eng+urdu+math
        var per = res/300*100

        console.log(res)

        document.write("<table  class='c1'>")
        document.write("<tr class='c2'><th class='c2'>Subject</th>")
        document.write("<th class='c2'>Total marks</th>")
        document.write("<th class='c2'>Obt marks</th>")
        document.write("<th class='c2'>Percentage</th>")
        document.write("</tr>")

        document.write("<tr><th class='c2'>Eng</th>")
        document.write("<th class='c2'>100</th>")
        document.write("<th class='c2'>"+eng+"</th>")
        document.write("<th class='c2'>"+eng+"%</th>")
        document.write("</tr>")

        document.write("<tr><th>Urdu</th>")
        document.write("<th>100</th>")
        document.write("<th>"+urdu+"</th>")
        document.write("<th>"+urdu+"%</th>")
        document.write("</tr>")

        document.write("<tr><th>Math</th>")
        document.write("<th>100</th>")
        document.write("<th>"+math+"</th>")
        document.write("<th>"+math+"%</th>")
        document.write("</tr>")

        document.write("<tr><th></th>")
        document.write("<th>300</th>")
        document.write("<th>"+res+"</th>")
        document.write("<th>"+per+"%</th>")
        document.write("</tr>")



        document.write("</table>")







       }
       else{
        document.write("Enter math correct number")

       }

    }
    else{
        document.write("Enter urdu correct number")

    }
}
else{
    document.write("Enter eng correct number")
}






