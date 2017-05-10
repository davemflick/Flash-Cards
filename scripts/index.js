console.log('Connected')

const flashCard = document.getElementById("fcard");
const button = document.getElementById("flipBtn");

button.addEventListener('click',function(){flashCard.classList.toggle("flipped")})  

document.querySelector(".answerSide").addEventListener("click",function(){console.log("this")} )