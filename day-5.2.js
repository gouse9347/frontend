function print(){
    let x=document.getElementById('inp1').value
    let y=document.getElementById('inp2').value
    let z=parseInt(x)+parseInt(y)
    document.getElementById("res1").value=z
    document.getElementById("res2").value=x-y
    document.getElementById("res3").value=x*y
    document.getElementById("res4").value=x/y

}