const val = document.querySelector("#calc");
const clearButton = document.querySelector("#clearAll");
const delButton = document.querySelector("#delete");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");
const addButton = document.querySelector("#addition");
const subButton = document.querySelector("#subtraction");
const mulButton = document.querySelector("#multiply");
const divButton = document.querySelector("#divide");
const dotButton = document.querySelector("#dot");
const equButton = document.querySelector("#equalsTo");

clearButton.addEventListener("click", function() {
  val.innerHTML = "";
});

delButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  len = value.length;
  value = value.slice(0,len-1);
  val.innerHTML = value;
  resize()
});

oneButton.addEventListener("click", function() {  
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "1";
  resize()
});

twoButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "2";
  resize()
});

threeButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "3";
  resize()
});

fourButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "4";
  resize()
});

fiveButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "5";
  resize()
});

sixButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "6";
  resize()
});

sevenButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "7";
  resize()
});

eightButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "8";
  resize()
});

nineButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "9";
  resize()
});

zeroButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "0";
  resize()
});

addButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "+";
  resize()
});

subButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "-";
  resize()
});

mulButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "*";
  resize()
});

divButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + "/";
  resize()
});


dotButton.addEventListener("click", function() {
  value = val.innerHTML;
  if(value==="INVALID INPUT")value="";
  val.innerHTML = value + ".";
  resize()
});


equButton.addEventListener("click", function() {
  value = val.innerHTML;
  value = eval(value)
  val.innerHTML = value;
});


function resize(){
    len = val.innerHTML.length;
    if(len<25){
        val.style.fontSize = '25px';
    }
    else if(len>=25 && len<=32){
         val.style.fontSize = '20px';
    }
    else{
        val.innerHTML = "INVALID INPUT";
    }
};

