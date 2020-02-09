var css = document.getElementById("copyText")
var colorPicker1 = document.getElementById("color1")
var colorPicker2 = document.getElementById("color2")
var hex1 = document.body.style
var hex2 = document.body.style


function displayHex(event){
   
          hex1.background = "linear-gradient(to right, "+colorPicker1.value+", "+colorPicker2.value+")"
       css.value= document.body.style.background

       hex2.background = "linear-gradient(to right,"+colorPicker1.value+" , "+colorPicker2.value+")"
       css.value= document.body.style.background;
 
}





colorPicker1.addEventListener("mouseout",displayHex)
colorPicker2.addEventListener("mouseout",displayHex)