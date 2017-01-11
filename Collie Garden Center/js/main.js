document.getElementById("esPlant").onmouseover = function() {mouseOver()};
document.getElementById("esPlant").onmouseout = function() {mouseOut()};
document.getElementById("esCare").onmouseover = function() {mouseOver1()};
document.getElementById("esCare").onmouseout = function() {mouseOut1()};
document.getElementById("esMix").onmouseover = function() {mouseOver2()};
document.getElementById("esMix").onmouseout = function() {mouseOut2()};
document.getElementById("esPot").onmouseover = function() {mouseOver3()};
document.getElementById("esPot").onmouseout = function() {mouseOut3()};
document.getElementById("dropDown").onclick= function() {dropDown()};

function mouseOver() {
  document.getElementById("txtPlant").style.color = "#9bff8d";
}
function mouseOut() {
  document.getElementById("txtPlant").style.color = "white";
}
function mouseOver1() {
  document.getElementById("txtCare").style.color = "#9bff8d";
}
function mouseOut1() {
  document.getElementById("txtCare").style.color = "white";
}
function mouseOver2() {
  document.getElementById("txtMix").style.color = "#9bff8d";
}
function mouseOut2() {
  document.getElementById("txtMix").style.color = "white";
}
function mouseOver3() {
  document.getElementById("txtPot").style.color = "#9bff8d";
}
function mouseOut3() {
  document.getElementById("txtPot").style.color = "white";
}
function dropDown() {
  var x = document.getElementById("heroTitle");
  var y = document.getElementById("heroP");
  var z = document.getElementById("heroA");
  var a = document.getElementById("heroA2");
  var b = document.getElementById("logo");
  var c = document.getElementById("hero");
  var d = document.getElementById("repNav");
  var e = document.getElementById("repNav2");
  var f = document.getElementById("repNav3");
  var g = document.getElementById("heroDiv");
  x.classList.toggle("hide");
  y.classList.toggle("hide");
  z.classList.toggle("hide");
  a.classList.toggle("hide");
  b.classList.toggle("center");
  c.classList.toggle("darkenExtend");
  d.classList.toggle("show");
  e.classList.toggle("show");
  f.classList.toggle("show");
  g.classList.toggle("hide");
}
