function cambiaColor(id) {
  var colorActual = document.getElementById(id).getAttribute("class");
  var color = ["c0", "c1", "c2", "c3","c4"]
  var i = 0;
  while (color[i] != colorActual){i++};
    i++;
  if (i == 5){i = 0}
  document.getElementById(id).setAttribute("class", color[i]);
}