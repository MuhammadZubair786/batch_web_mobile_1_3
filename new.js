var inp = document.getElementById("text")
function showdata(e){
    console.log(e.innerText)
    inp.value += e.innerText


}

function getrest(){
    var res = eval(inp.value)
    inp.value=res
}

function clr(){
    inp.value=""
}

function bksp(){
    inp.value= inp.value.substring(0,inp.value.length-1)
}

function sqrt(){
    inp.value= Math.sqrt(inp.value)
}

function sqr(){
    inp.value =inp.value*inp.value
}