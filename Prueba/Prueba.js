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
  boton.setAttribute("type","button");
  boton.setAttribute("value","Validar");
  boton.setAttribute("click",comprobar());
  document.getElementById("btn").appendChild(boton);
  var contenedor = document.createElement("div");
  contenedor.setAttribute("class","wrapper");
  contenedor.setAttribute("id","tabla");
  document.getElementById("aquivalochido").appendChild(contenedor);

  
  for(i=0;i< ren ;i++){
    for(j=0;j<col;j++){
      var midiv = document.createElement("div");
      midiv.setAttribute("id","c"+i+j);
      midiv.setAttribute("class","c0");
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
 
}