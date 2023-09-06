// let Celsius = document.getElementById('Celsius')
// let Fahrenheit = document.getElementById('Fahrenheit')
// let Kelvin = document.getElementById('Kelvin')
// let btn =document.getElementById('btn')

// function tempConvert(Celsius)

//     var num= parseFloat(document.forms[0].celsius.value)
//     document.forms[0].far.value= (1.8*num)+32
//     document.forms[0].kel.value= (1.8*num)+273;
// }

let celsius = document.getElementById("Celsius");
let fahrenheit = document.getElementById("Fahrenheit");
let kelvin = document.getElementById("Kelvin");
let btn =document.getElementById('btn')


    celsius.oninput  = function () {
        let far = (parseFloat(celsius.value) * 9) / 5 + 32;
        fahrenheit.value = parseFloat(far.toFixed(2));
        let kel = parseFloat(celsius.value) + 273.15;
        kelvin.value = parseFloat(kel.toFixed(2));
      };
      
      fahrenheit.oninput = function () {
        let cel = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
        celsius.value = parseFloat(cel.toFixed(2));
        let kel = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 + 273.15;
        kelvin.value = parseFloat(kel.toFixed(2));
      };
      kelvin.oninput = function () {
        let far = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;
        fahrenheit.value = parseFloat(far.toFixed(2));
        let cel = parseFloat(kelvin.value) - 273.15;
        celsius.value = parseFloat(cel.toFixed(2));
      };
      btn.addEventListener('click',()=>{
        celsius.value=" ";
        fahrenheit.value=" ";
        kelvin.value=" ";
      })