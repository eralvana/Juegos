var velocidad;
var radio;
var tablaAncho;
function juego01() {
    velocidad = document.getElementById("velocidad").value;
    radio = document.getElementById("tamPelota").value;
    tablaAncho = document.getElementById("tamTabla").value;
    var canvas = document.getElementById("canvasJuego01");
    var contexto = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-10;
    var dx = 2;
    var dy = -2;
    var tablaAlto = 10;
    var pucharDerecho = false;
    var pucharIzquierdo = false;
    var bloqueAncho = 55;
    var bloqueAlto = 15;
    var bloqueEspacio = 3;
    var bloqueMargenSuperior = 10;
    var bloqueMargenInferior = 10;
    var techoBloques = 5;
    var paredBloques = 10;
    var tablaPosicion = (canvas.width - tablaAncho)/2;
    var renglonesBloques = 5;
    var columnasBloques = 8;
    var puntos = 0;
    var oportunidades = 3;
    var bloques = [];
    for(c=0; c<columnasBloques; c++) {
        bloques[c] = [];
        for(r=0; r<renglonesBloques; r++) {
            bloques[c][r] = { x: 0, y: 0, estado: 1};
        }
    }
    document.addEventListener("keydown", oprimir, false);
	document.addEventListener("keyup", nooprimir, false);
    document.addEventListener("mousemove", moverRaton, false);
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
    function moverRaton(e) {
        var ratonPosicion = e.clientX - canvas.offsetLeft;
        if(ratonPosicion > 0 && ratonPosicion < canvas.width) {
            tablaPosicion = ratonPosicion - tablaAncho/2;
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
    function bloque() {
        for(c=0; c<columnasBloques; c++) {
            for(r=0; r<renglonesBloques; r++) {
                if (bloques[c][r].estado == 1) {
                var bloquePosiciónX = (c*(bloqueAncho+bloqueEspacio))+paredBloques;
                var bloquePosiciónY = (r*(bloqueAlto+bloqueEspacio))+techoBloques;
                bloques [c][r].x = bloquePosiciónX;
                bloques[c][r].y = bloquePosiciónY;
                contexto.beginPath();
                contexto.rect(bloquePosiciónX, bloquePosiciónY, bloqueAncho, bloqueAlto);
                contexto.fillStyle = "#00FF00";
                contexto.fill();
                contexto.closePath();
                }
            }
        }
    }
    function detectar() {
        for(c=0; c<columnasBloques; c++) {
        for(r=0; r<renglonesBloques; r++) {
            var b = bloques[c][r];
            if(b.estado == 1) {
                if(x > b.x && x < b.x+bloqueAncho && y > b.y && y < b.y+bloqueAlto) {
                    dy = -dy;
                    b.estado = 0;
                    puntos++;
                    if(puntos == renglonesBloques*columnasBloques) {
                        alert("¡Ganaste!");
                        document.location.reload();
                    }
                }
            }
        }
        }
    }
    function puntuacion() {
        contexto.font = "bold 16px verdana";
        contexto.fillStyle = "#000000";
        contexto.fillText("Puntuación: "+ puntos, canvas.width-200, 20);
    }
    function oportunidad() {
        contexto.font = "bold 16px verdana";
        contexto.fillStyle = "#000000";
        contexto.fillText("Oportunidades: "+oportunidades, 10, 20);
    }
    function pintar() {
    	contexto.clearRect(0, 0, canvas.width, canvas.height);
        bloque();
    	pelota();
    	tabla();
        detectar();
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
                oportunidades--;
                if(!oportunidades) {
                    alert("¡Perdiste! ¿Solamente pudiste con " + puntos + " bloques?");
                    document.location.reload();
                }
                else {
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = 2;
                    dy = -2;
                    tablaPosicion = (canvas.width-tablaAncho)/2;
                }
            }
    	}
    	if(pucharDerecho && tablaPosicion < canvas.width - tablaAncho) {
    		tablaPosicion += 8;
    	}
    	else if(pucharIzquierdo && tablaPosicion > 0) {
    		tablaPosicion -= 8;
    	}
    	x += dx*(1+velocidad/5);
    	y += dy*(1+velocidad/5);
        requestAnimationFrame(pintar);
        var rotos = document.getElementById("rotos")
        rotos.innerHTML = puntos;
        var restan = columnasBloques*renglonesBloques - puntos
        var faltantes = document.getElementById("faltan")
        faltantes.innerHTML = restan;
        var vida = document.getElementById("vidas")
        vida.innerHTML = oportunidades
    }
    pintar();
}