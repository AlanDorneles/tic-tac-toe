const tabela = document.getElementById('table')
const simbolos = ["X","O",'x','o']
const jogador1 = document.getElementById('jogador1')
const jogador2 = document.getElementById("jogador2");
const celulas = document.getElementsByTagName('td')
const input = document.querySelectorAll(".char");
const jogadas = ['00','01','02','10','11','12','20','21','22']

const playerOne = {
  jogador: "",
  pontos: [],
};
const playerTwo = {
  jogador: "",
  pontos: [],
};

jogador1.addEventListener('focusout', function(){
  playerOne.jogador = jogador1.value;

})

jogador2.addEventListener("focusout", function () {
  playerTwo.jogador = jogador2.value;
});

input.forEach(function(e){
  e.addEventListener('keydown', function(e){
  if(!simbolos.includes(e.key)){
    e.currentTarget.setAttribute("value",e.key=" ")

  }else{
    if(e.key ==='x' || e.key==='X'){
      playerOne.pontos.push(e.target.parentNode.cellIndex.toString()+ e.target.parentNode.parentNode.rowIndex);
      e.currentTarget.setAttribute("value", e.key = 'X')
      e.currentTarget.setAttribute("disabled", "disabled");
      
    }
    if(e.key ==='o' || e.key ==='O'){
      playerTwo.pontos.push(e.target.parentNode.cellIndex.toString() + e.target.parentNode.parentNode.rowIndex);
      e.currentTarget.setAttribute("value", e.key = 'O')
      e.currentTarget.setAttribute("disabled", "disabled");
    }
  }
verifica()})
})
function verifica() {
  if(playerOne.pontos.length + playerTwo.pontos.length ===9){
    alert( 'empate')
    
  }
  if (
    playerOne.pontos.includes("00") === true &&
    playerOne.pontos.includes("10") === true &&
    playerOne.pontos.includes("20") === true
  ) {
    alert(playerOne.jogador + " ganhou a partidaA");
    
    input[0].classList.add('win')
    input[1].classList.add("win");
    input[2].classList.add("win");
  }
  if (
    playerOne.pontos.includes("01") === true &&
    playerOne.pontos.includes("11") === true &&
    playerOne.pontos.includes("21") === true
  ) {
    alert(playerOne.jogador + " ganhou a partida");
    input[3].classList.add("win");
    input[4].classList.add("win");
    input[5].classList.add("win");
  }
  if (
    playerOne.pontos.includes("02") === true &&
    playerOne.pontos.includes("12") === true &&
    playerOne.pontos.includes("22") === true
  ) {
    alert(playerOne.jogador + " ganhou a partida");
    input[6].classList.add("win");
    input[7].classList.add("win");
    input[8].classList.add("win");
  }
  if (
    playerOne.pontos.includes("00") === true &&
    playerOne.pontos.includes("11") === true &&
    playerOne.pontos.includes("22") === true
  ) {
    alert(playerOne.jogador + " ganhou a partida");
    input[0].classList.add("win");
    input[4].classList.add("win");
    input[8].classList.add("win");
  }
  if (
    playerOne.pontos.includes("02") === true &&
    playerOne.pontos.includes("11") === true &&
    playerOne.pontos.includes("20") === true
  ) {
    alert(playerOne.jogador + " ganhou a partida");
    input[6].classList.add("win");
    input[4].classList.add("win");
    input[2].classList.add("win");
  }
  if (
    playerOne.pontos.includes("00") === true &&
    playerOne.pontos.includes("01") === true &&
    playerOne.pontos.includes("02") === true
  ) {
    alert(playerOne.jogador + " ganhou a partida");
    input[0].classList.add("win");
    input[3].classList.add("win");
    input[6].classList.add("win");
  }
  if (
    playerOne.pontos.includes("10") === true &&
    playerOne.pontos.includes("11") === true &&
    playerOne.pontos.includes("12") === true
  ) {
    alert(playerOne.jogador + " ganhou a partida");
    input[1].classList.add("win");
    input[4].classList.add("win");
    input[7].classList.add("win");
  }
  if (
    playerOne.pontos.includes("20") === true &&
    playerOne.pontos.includes("21") === true &&
    playerOne.pontos.includes("22") === true
  ) {
    alert(playerOne.jogador + " ganhou a partida");
    input[2].classList.add("win");
    input[5].classList.add("win");
    input[8].classList.add("win");
  }

 // player dois verificações
 if (
   playerTwo.pontos.includes("00") === true &&
   playerTwo.pontos.includes("10") === true &&
   playerTwo.pontos.includes("20") === true
 ) {
   alert(playerTwo.jogador + " ganhou a partidaA");

   input[0].classList.add("win");
   input[1].classList.add("win");
   input[2].classList.add("win");
 }
 if (
   playerTwo.pontos.includes("01") === true &&
   playerTwo.pontos.includes("11") === true &&
   playerTwo.pontos.includes("21") === true
 ) {
   alert(playerTwo.jogador + " ganhou a partida");
   input[3].classList.add("win");
   input[4].classList.add("win");
   input[5].classList.add("win");
 }
 if (
   playerTwo.pontos.includes("02") === true &&
   playerTwo.pontos.includes("12") === true &&
   playerTwo.pontos.includes("22") === true
 ) {
   alert(playerTwo.jogador + " ganhou a partida");
   input[6].classList.add("win");
   input[7].classList.add("win");
   input[8].classList.add("win");
 }
 if (
   playerTwo.pontos.includes("00") === true &&
   playerTwo.pontos.includes("11") === true &&
   playerTwo.pontos.includes("22") === true
 ) {
   alert(playerTwo.jogador + " ganhou a partida");
   input[0].classList.add("win");
   input[4].classList.add("win");
   input[8].classList.add("win");
 }
 if (
   playerTwo.pontos.includes("02") === true &&
   playerTwo.pontos.includes("11") === true &&
   playerTwo.pontos.includes("20") === true
 ) {
   alert(playerTwo.jogador + " ganhou a partida");
   input[6].classList.add("win");
   input[4].classList.add("win");
   input[2].classList.add("win");
   
 }
 if (
   playerTwo.pontos.includes("00") === true &&
   playerTwo.pontos.includes("01") === true &&
   playerTwo.pontos.includes("02") === true
 ) {
   alert(playerTwo.jogador + " ganhou a partida");
   input[0].classList.add("win");
   input[3].classList.add("win");
   input[6].classList.add("win");
 }
 if (
   playerTwo.pontos.includes("10") === true &&
   playerTwo.pontos.includes("11") === true &&
   playerTwo.pontos.includes("12") === true
 ) {
   alert(playerTwo.jogador + " ganhou a partida");
   input[1].classList.add("win");
   input[4].classList.add("win");
   input[7].classList.add("win");
 }
 if (
   playerTwo.pontos.includes("20") === true &&
   playerTwo.pontos.includes("21") === true &&
   playerTwo.pontos.includes("22") === true
 ) {
   alert(playerTwo.jogador + " ganhou a partida");
   input[2].classList.add("win");
   input[5].classList.add("win");
   input[8].classList.add("win");
 }

  
}
document.getElementById('reiniciar').addEventListener('click', function()     
  {document.querySelectorAll('.char').forEach(function(elem){
    elem.setAttribute('value','')
    elem.disabled = false
    elem.setAttribute('class', 'char')
    

  })
  playerOne.pontos = []
  playerTwo.pontos = []

})
