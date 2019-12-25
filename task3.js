function myFunction(id){
  document.calc.result.value+=id;
}
function clearscreen()
{
document.calc.result.value="";  
}
function calculate() {
  if (document.calc.result.value) 
  {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
  } catch(err){
      document.calc.result.value="Syntax Error";
    }
  }
  else
  {
   document.calc.result.value=""; 
  }
}
function changeSign() {
  if(calc.result.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, calc.result.value.length)
  else
    calc.result.value = "-" + calc.result.value
}
function deleteChar()
 {
 calc.result.value = calc.result.value.substring(0, calc.result.value.length - 1)
}


function cosfun(){
  let val = document.calc.result.value;
  document.calc.result.value = Math.cos(val)
}

function sinfun(){
  let val = document.calc.result.value;
  document.calc.result.value = Math.sin(val)
}

function tanfun(){
  let val = document.calc.result.value;
  document.calc.result.value = Math.tan(val)
}

function logfun(){
  let val = document.calc.result.value;
  document.calc.result.value = Math.log(val)
}
function expfun(){
  let val = document.calc.result.value;
  document.calc.result.value = Math.exp(val)
}
function sqrtfun(){
  let val = document.calc.result.value;
  document.calc.result.value = Math.sqrt(val)
}
function square(){
 let val = document.calc.result.value;
  document.calc.result.value = eval(val)*eval(val) 
}
// function pifun(){
//   let val = document.calc.result.value;
//   document.calc.result.value = eval(calc.result.value)

// }