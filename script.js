var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");

var grosor = 1.5;

var color_r = "blue";
var color_d = "red";
var color_l = "yellow";
var color_u = "green";

var point_x = canvas.width / 6;
var point_y = canvas.height / 4;

var xinicial_A = point_x * 1;
var xinicial_B = point_x * 3;
var xinicial_C = point_x * 5;

var yinicial_A = point_y * 1;
var yinicial_B = point_y * 3;

var step_one = 2;
var suma = 5;
var step_two, x, y;

var btn = document.getElementById("btn");
btn.addEventListener("click", call);

// esta funcion llama a las multiples espirales en multiples lugares
// pra crear el efecto de degradado
function call()
{
  // para que se marque bien
  for (var i = 0; i < 3; i++)
  {
    generar(xinicial_A, yinicial_A, step_one);
    generar(xinicial_B, yinicial_A, step_one);
    generar(xinicial_C, yinicial_A, step_one);
    generar(xinicial_A, yinicial_B, step_one);
    generar(xinicial_B, yinicial_B, step_one);
    generar(xinicial_C, yinicial_B, step_one);
  }
}

// esta funcion crea la primera vuelta
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
