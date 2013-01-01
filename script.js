var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");

var grosor = 5;
var color = "blue";
var xinicial = 250;
var yinicial = 250;

var btn = document.getElementById("btn");
btn.addEventListener("click", generar);

function generar()
{

}

// FUNCION PRINCIPAL PARA DIBUJAR
function dibujante(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.lineWidth = grosor;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.lineCap = "round";
  lienzo.closePath();
}
