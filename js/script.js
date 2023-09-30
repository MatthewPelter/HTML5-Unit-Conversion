function cToF() {
  var celsius = document.getElementById("c").value;
  var convert = (celsius * 9) / 5 + 32;
 document.getElementById("f") = convert;
}

function kgTolb() {
  var kg = document.getElementById("kg").value;
  var convert = kg * 2.2;

  document.getElementById("lb").value = convert;
}

function kmTOmi() {
  var km = document.getElementById("km").value;
  var convert = km * 0.62137;

  document.getElementById("mi").value = convert;
}
