let sumaBotones = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function aleatorio(num) {

  let num2 = getRandomInt(100);
  if (num == 1) {
    document.getElementById("b1").innerText = num2;
    document.getElementById("b1").onmouseover.innerText="4565"
 
  } else if (num == 2) {
    document.getElementById("b2").innerText = num2;
  } else if (num == 3) {
    document.getElementById("b3").innerText = num2;
  } else if (num == 4) {
    document.getElementById("b4").innerText = num2;
  } else if (num == 5) {
    document.getElementById("b5").innerText = num2;
  } else if (num == 6) {
    document.getElementById("b6").innerText = num2;
  } else if (num == 7) {
    document.getElementById("b7").innerText = num2;
  } else if (num == 8) {
    document.getElementById("b8").innerText = num2;
  } else if (num == 9) {
    document.getElementById("b9").innerText = num2;
  }
  sumaBotones += num2;
  document.getElementById("idResultado").innerText = 'Sumatoria: '+sumaBotones;
}

