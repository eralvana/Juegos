var col;
var ren;
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



function genera_tabla() {
    ren = document.getElementById("renglones").value;
    col = document.getElementById("columnas").value;
    /*var contenedor = document.getElementsByClassName("wrapper");
    contenedor[0].setAttribute("grid-template-columns", '75px');
    contenedor[0].setAttribute("grid-template-rows", "75px");*/
    for(i=0;i< ren ;i++){
        for(j=0;j<col;j++){
            var midiv = document.createElement("div");
            midiv.setAttribute("id","c"+i+j);
            midiv.setAttribute("class","c0");
            midiv.addEventListener("click", function(){cambiaColor(this.id)});
            midiv.innerHTML = "c"+i+j;
            document.getElementById("tabla").appendChild(midiv);
            }
        }
    }