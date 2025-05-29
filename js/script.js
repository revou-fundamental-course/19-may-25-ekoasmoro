// Button untuk konversi
function konversi() {
  let c = parseFloat(document.getElementById("Celsius").value);
  if (isNaN(c)) return alert("Masukkan angka yang valid!");
  let f = (c * 9) / 5 + 32;
  document.getElementById("Fahrenheit").value = f;
  document.getElementById("cara").value = `${c}°C * (9/5) + 32 = ${f}°F`;
}
// Button untuk reverse
function reverse() {
  let f = parseFloat(document.getElementById("Fahrenheit").value);
  if (isNaN(f)) return alert("Masukkan angka yang valid!");
  let c = ((f - 32) * 5) / 9;
  document.getElementById("Celsius").value = c.toFixed(2);
  document.getElementById("cara").value = `(${f}°F - 32) * 5/9 = ${c.toFixed(
    2
  )}°C`;
}
// Button untuk reset
function reset() {
  document.getElementById("Celsius").value = "";
  document.getElementById("Fahrenheit").value = "";
  document.getElementById("cara").value = "";
}
