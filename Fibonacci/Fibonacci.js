function encontrar() {
  var num = document.getElementById("numberF").value;
  var term = (Math.pow(((1+Math.sqrt(5))/2),num) - Math.pow((1-Math.sqrt(5))/2,num))/Math.sqrt(5);
  alert(term)
}