var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");

var grosor = 1;
var color_r = "blue";
var color_d = "red";
var color_l = "yellow";
var color_u = "green";

var xinicial_A = 125;
var xinicial_B = 375;
var xinicial_C = 625;

var yinicial = 125;

var step_one = 2;
var step_two, x, y;
var suma = 4;

var btn = document.getElementById("btn");
btn.addEventListener("click", call);

function call()
{
  generar(xinicial_A, yinicial, step_one);
  generar(xinicial_B, yinicial, step_one);
  generar(xinicial_C, yinicial, step_one);
}

function generar(xinicial, yinicial, step_one)
{
  for (var i = 0; i < 100; i++)
  {
    // a la derecha
    step_one = step_one + suma;
    x = xinicial + step_one;
    y = yinicial;
    dibujante(color_r, xinicial, yinicial, x, y);

    xinicial = x;
    yinicial = y;

    // hacia abajo
    step_one = step_one + suma;
    y = yinicial + step_one;
    dibujante(color_d, xinicial, yinicial, x, y);

    xinicial = x;
    yinicial = y;

    // hacia la izquierda
    step_one = step_one + suma;
    x = xinicial - step_one;
    dibujante(color_l, xinicial, yinicial, x, y);

    xinicial = x;
    yinicial = y;

    // hacia arriba
    step_one = step_one + suma;
    y = yinicial - step_one;
    dibujante(color_u, xinicial, yinicial, x, y);

    xinicial = x;
    yinicial = y;
  }
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
