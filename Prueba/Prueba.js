var col;
var ren;
function genera_tabla() {
  ren = document.getElementById("renglones").value;
  col = document.getElementById("columnas").value;
  var elemento = document.getElementById("botoncito");
  while (elemento.firstChild) {elemento.removeChild(elemento.firstChild)};
  var otrodiv = document.createElement("div");
  otrodiv.setAttribute("id", "btn")
  document.getElementById("botoncito").appendChild(otrodiv);
  var boton = document.createElement("input");
  boton.setAttribute("id","revisar")
  boton.setAttribute("type","button");
  boton.setAttribute("value","Validar");
  boton.addEventListener("click",comprobar);
  document.getElementById("btn").appendChild(boton);
  var dimension = document.getElementById("aquivalochido");
  dimension.setAttribute("style", "width:" + col*80 + "px");
  var contenedor = document.createElement("div");
  contenedor.setAttribute("class","wrapper");
  contenedor.setAttribute("id","tabla");
  contenedor.setAttribute("style","grid-template-columns: repeat(" + col + ", 75px)");
  document.getElementById("aquivalochido").appendChild(contenedor);
  for(i=0;i< ren ;i++){
    for(j=0;j<col;j++){
      var midiv = document.createElement("div");
      midiv.setAttribute("id","c"+i+j);
      midiv.setAttribute("class","c0");
      midiv.setAttribute("style", "grid-template-columns: repeat(" + col + ", 75px)");
      midiv.setAttribute("style","height: 75px");
      //midiv.setAttribute("style", "grid-template-rows: repeat("+ ren + ", 75px)");
      midiv.addEventListener("click", function(){cambiaColor(this.id)});
      midiv.innerHTML = "Casilla "+i+j;
      document.getElementById("tabla").appendChild(midiv);
      }
    }
}
function cambiaColor(id) {
  var colorActual = document.getElementById(id).getAttribute("class");
  var color = ["c0", "c1", "c2", "c3","c4"]
  var i = 0;
  while (color[i] != colorActual){i++};
    i++;
  if (i == 5){i = 0}
  document.getElementById(id).setAttribute("class", color[i]);
}
function comprobar(){
  alert("Prueba de que jala dos trenzas el botón.")
  /*for(i=0;i< ren ;i++){
    for(j=0;j<col;j++){
      var cas = document.getElementById("c"+i+j).getAttribute("class");
      while(cas !== "c0"){};
      alert("La Casilla "+  i + "," + j + "  está en blanco")

      }
    }*/
}