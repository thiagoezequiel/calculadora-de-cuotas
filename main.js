alert("Bienvenido a la calculadra de cuotas")
function calcularPagoCuotas(monto, cuotas) {
  const tasaInteres = 0.1; // Tasa de interés del 10%
  const pagoInteres = monto * tasaInteres;
  const pagoTotal = monto + pagoInteres;
  const cuotaMensual = pagoTotal / cuotas;
  return cuotaMensual;
}
const montoPrestamo = parseInt(prompt("Ingrese el monto del préstamo:"));
const numeroCuotas = parseInt(prompt("Ingrese el número de cuotas:"));

if (isNaN(montoPrestamo) || isNaN(numeroCuotas) || montoPrestamo <= 0 || numeroCuotas <= 0) {
  alert("Por favor ingrese valores válidos para el monto del préstamo y el número de cuotas.");
} else {
  const cuotaMensual = calcularPagoCuotas(montoPrestamo, numeroCuotas);
  alert(`Para un préstamo de $${montoPrestamo} a ${numeroCuotas} cuotas,\n
  la cuota mensual sería de $${cuotaMensual}.`);
}
