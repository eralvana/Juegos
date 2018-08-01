function encontrar() {
  var num = document.getElementById("numberFe").value;
  var term = (Math.pow(((1+Math.sqrt(5))/2),num) - Math.pow((1-Math.sqrt(5))/2,num))/Math.sqrt(5);
  alert(term)
}
function apata(){
	var num = document.getElementById("numberFp").value;
    var a0 = 0;
    var a1 = 1;
    for(i=0;i < num; i++){
    	var base = a0;
    	a0 = a1;
    	a1 = base + a1;
    }
    alert(a0)
}