// let count = 0;
// let countEl = document.getElementById("para");
// let inc = () => {
//   count += 1;
//   countEl.innerText = count;
// };

// let dec = () => {
//   count = count - 1;
//   countEl.innerText = count;
// };

// const save = () => {
//   let dataEl = document.getElementById("data");
//   dataEl.innerHTML += count + " - ";
// };


// let num1 = 8;
// let num2 = 2;
// let number1 = document.getElementById("num1").textContent = num1;
// let number2 = document.getElementById("num2").textContent = num2;

// function add() {
//   number1 = document.getElementById("num1").textContent = num1;
//   number2 = document.getElementById("num2").textContent = num2;
//   let add = num1 + num2;
//   document.getElementById("answer").innerHTML = "The sum found is "+add;
// }

// function sub() {
//   number1 = document.getElementById("num1").textContent = num1;
//   number2 = document.getElementById("num2").textContent = num2;
//   let sub = num1 - num2;
//   document.getElementById("answer").innerHTML = "The sum found is "+sub;
// }
// function mul() {
//   number1 = document.getElementById("num1").textContent = num1;
//   number2 = document.getElementById("num2").textContent = num2;
//   let mul = num1 * num2;
//   document.getElementById("answer").innerHTML = "The sum found is "+mul;
// }
// function div(){
//   number1 = document.getElementById("num1").textContent = num1;
//   number2 = document.getElementById("num2").textContent = num2;
//   let div = num1 / num2;
//   document.getElementById("answer").innerHTML = "The sum found is "+div;
// }

let card1=prompt("choose a number between 1-12 ")
let card2=prompt(" Again choose a number between 1-12 ")
card1=Number.parseInt(card1)
card2=Number.parseInt(card2)
let sumCards=card1+card2
hasBlackJack=false

function start(){
    document.getElementById('cards').innerHTML+= [card1] +" & "+[card2]
    document.getElementById('sum').innerHTML+= card1+card2
if(sumCards<21){
    document.getElementById("result").innerHTML=("<b>Its okay but work harder "+"Draw one more card.</b>")
}
else if(sumCards===21){
    document.getElementById("result").innerHTML=("<b>Conratulations! You have won.</b>")
    hasBlackJack=true
}
else{
    document.getElementById("result").innerHTML=("<b>Alas, You have lost.</b>")
}
}

