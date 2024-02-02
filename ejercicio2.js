var validado = true;

var a = prompt("ingrese el primer numero");
if (isNaN(a)) {
  validado = false;
  alert("Esto no es un número");
}

if (validado) {
  var b = prompt("ingrese el segundo numero");

  if (isNaN(b)) {
    validado = false;
    alert("Esto no es un número");
  }
}

if (validado) {
  if (a === b) alert("son iguales");
  if (a > b) alert("el numero mayor es : " + a);
  if (b > a) alert("el numero mayor es : " + b);
}
