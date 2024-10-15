alert("Bienvenido al carrito de compra.")


function validarUsuario(user, pass) {
  const usuario = "pablo";
  const contraseña = "pass1234";
  
  return user === usuario && pass === contraseña;
}

let user = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");

while (!validarUsuario(user, pass)) {
  alert("El usuario o la contraseña son incorrectos, vuelva a ingresarlos por favor.");
  user = prompt("Ingrese su usuario");
  pass = prompt("Ingrese su contraseña");
}


alert("El usuario y la contraseña son correctos. Bienvenido.");

function solicitarCantidadProducto(nombreProducto) {
  let cantidad = parseInt(prompt(`Elija la cantidad que desea del ${nombreProducto}`));
  if (isNaN(cantidad) || cantidad < 0) {
    alert("Cantidad no válida. Por favor, ingrese un valor positivo.");
    return solicitarCantidadProducto(nombreProducto);
  }
  return cantidad;
}


let cantidadprod1 = solicitarCantidadProducto("Producto n°1");
let cantidadprod2 = solicitarCantidadProducto("Producto n°2");
let cantidadprod3 = solicitarCantidadProducto("Producto n°3");
let cantidadprod4 = solicitarCantidadProducto("Producto n°4");
let cantidadprod5 = solicitarCantidadProducto("Producto n°5");
let cantidadprod6 = solicitarCantidadProducto("Producto n°6");






function calcularTotal(precios, cantidades) {
  return (cantidades[0] * precios[0]) + (cantidades[1] * precios[1]) + 
         (cantidades[2] * precios[2]) + (cantidades[3] * precios[3]) + 
         (cantidades[4] * precios[4]) + (cantidades[5] * precios[5]);
}


let precios = [1.50, 1.50, 1.50, 2.00, 1.50, 2.00];
let cantidades = [cantidadprod1, cantidadprod2, cantidadprod3, cantidadprod4, cantidadprod5, cantidadprod6];

let resultado = calcularTotal(precios, cantidades);

if (resultado > 0 && !isNaN(resultado)) {
  alert("El total de la compra será " + resultado + " euros.");
} else {
  alert("No ha ingresado los valores correctamente. Por favor, recargue la página.");
}
