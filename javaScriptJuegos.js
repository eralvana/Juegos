function juego01() {
	var canvas = document.getElementById("canvasJuego01");
	var contexto = canvas.getContext("2d");
	var radio = 10
	var x = canvas.width/2;
	var y = canvas.height-30;
	var dx = 2;
	var dy = -2;
	var tablaAlto = 10;
	var tablaAncho = 75;
	var tablaPosicion = (canvas.width - tablaAncho)/2;
	var pucharDerecho = false;
	var pucharIzquierdo = false;
	document.addEventListener("keydown", oprimir, false);
	document.addEventListener("keyup", nooprimir, false);
	function oprimir(e) {
		if(e.keyCode == 39) {
			pucharDerecho = true;
		}
		else if(e.keyCode == 37) {
        pucharIzquierdo = true;
    	}
    }
    function nooprimir(e) {
    	if(e.keyCode == 39) {
    		pucharDerecho = false;
    	}
    	else if(e.keyCode == 37) {
    		pucharIzquierdo = false;
    	}
    }
    function pelota() {
		contexto.beginPath();
    	contexto.arc(x, y, radio, 0, Math.PI*2);
    	contexto.fillStyle = "#FF0000";
    	contexto.fill();
    	contexto.closePath();
    }
    function tabla() {
    	contexto.beginPath();
    	contexto.rect(tablaPosicion, canvas.height - tablaAlto, tablaAncho, tablaAlto);
    	contexto.fillStyle = "#0000FF";
    	contexto.fill();
    	contexto.closePath();
    }
    function pintar() {
    	contexto.clearRect(0, 0, canvas.width, canvas.height);
    	pelota();
    	tabla();
    	if(x + dx > canvas.width-radio || x + dx < radio) {
    		dx = -dx;
    	}
    	if(y + dy < radio) {
    		dy = -dy;
    	}
    	else if(y + dy > canvas.height - radio) {
    		if(x > tablaPosicion && x < tablaPosicion + tablaAncho) {
    			dy = -dy;
    		}
    		else {
    			alert("¡Perdiste!");
    			document.location.reload();
    		}
    	}
    	if(pucharDerecho && tablaPosicion < canvas.width - tablaAncho) {
    		tablaPosicion += 8;
    	}
    	else if(pucharIzquierdo && tablaPosicion > 0) {
    		tablaPosicion -= 8;
    	}
    	x += dx;
    	y += dy;
    }
    setInterval(pintar, 10);
}