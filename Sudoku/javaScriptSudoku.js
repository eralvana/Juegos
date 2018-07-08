function juego02() {
    var canvas = document.getElementById("canvasJuego02");
    var contexto = canvas.getContext("2d");
    var cuadro = [];
    for(c=0; c<9; c++) {
        cuadro[c] = [];
        for(r=0; r<9; r++) {
            cuadro[c][r] = { x: 0, y: 0};
        }
    }
    function cuadricula() {
        for(c=0; c<9; c++) {
            for(r=0; r<9; r++) {
                var cuadroPosiciónX = (c*(30+10))+5;
                var cuadroPosiciónY = (r*(30+10))+5;
                cuadro[c][r].x = cuadroPosiciónX;
                cuadro[c][r].y = cuadroPosiciónY;
                contexto.beginPath();
                contexto.rect(cuadroPosiciónX, cuadroPosiciónY, 30, 30);
                contexto.fillStyle = "#00FF00";
                contexto.fill();
                contexto.closePath();
            }
        }
    }
    function pintar(){
        cuadricula();
    }
    pintar();

    // var numeros = new Array(8);
    // var x,y,po,z;
    // var clave = new Array(8);
    // for(x=0;x<9;x++){
    //     numeros[x]=x+1;
    //     clave[x] = new Array(8);
    // }
    // x--;
    // z=0;
    // while(x>-1) {
    //     po=parseInt((x-0+1)*Math.random()+0);
    //     clave[0][z]=numeros[po];
    //     document.write(numeros[po]+"  ");
    //     or (y = po ; y < x ; y++ ) {
    //         numeros[y]=numeros[y+1];
    //     }
    //     x--;
    //     z++;
    // }
    // //1
    // clave[1][0]=clave[0][3];
    // clave[1][1]=clave[0][4];
    // clave[1][2]=clave[0][5];
    // //2
    // clave[2][0]=clave[0][6];
    // clave[2][1]=clave[0][7];
    // clave[2][2]=clave[0][8];
    // //3
    // clave[1][3]=clave[0][6];
    // clave[1][4]=clave[0][7];
    // clave[1][5]=clave[0][8];
    // //4
    // clave[2][3]=clave[0][0];
    // clave[2][4]=clave[0][1];
    // clave[2][5]=clave[0][2];
    // //5
    // clave[1][6]=clave[0][0];
    // clave[1][7]=clave[0][1];
    // clave[1][8]=clave[0][2];
    // //6
    // clave[2][6]=clave[0][3];
    // clave[2][7]=clave[0][4];
    // clave[2][8]=clave[0][5];
    // //7
    // clave[3][0]=clave[0][1];
    // clave[3][1]=clave[0][2];
    // clave[3][2]=clave[1][0];
    // //8
    // clave[4][0]=clave[1][1];
    // clave[4][1]=clave[1][2];
    // clave[4][2]=clave[2][0];
    // //9
    // clave[5][0]=clave[2][1];
    // clave[5][1]=clave[2][2];
    // clave[5][2]=clave[0][0]; 
    // //10
    // clave[3][3]=clave[4][0];
    // clave[3][4]=clave[4][1];
    // clave[3][5]=clave[4][2];
    // //11
    // clave[4][3]=clave[5][0];
    // clave[4][4]=clave[5][1];
    // clave[4][5]=clave[5][2];
    // //12
    // clave[5][3]=clave[3][0];
    // clave[5][4]=clave[3][1];
    // clave[5][5]=clave[3][2];
    // //13
    // clave[3][6]=clave[5][0];
    // clave[3][7]=clave[5][1];
    // clave[3][8]=clave[5][2];
    // //14
    // clave[4][6]=clave[3][0];
    // clave[4][7]=clave[3][1];
    // clave[4][8]=clave[3][2];
    // //15
    // clave[5][6]=clave[4][0];
    // clave[5][7]=clave[4][1];
    // clave[5][8]=clave[4][2];
    // //16
    // clave[6][0]=clave[3][1];
    // clave[6][1]=clave[3][2];
    // clave[6][2]=clave[4][0];
    // //17
    // clave[7][0]=clave[4][1];
    // clave[7][1]=clave[4][2];
    // clave[7][2]=clave[5][0];
    // //18
    // clave[8][0]=clave[5][1];
    // clave[8][1]=clave[5][2];
    // clave[8][2]=clave[3][0];
    // //19
    // clave[6][3]=clave[7][0];
    // clave[6][4]=clave[7][1];
    // clave[6][5]=clave[7][2];
    // //20
    // clave[7][3]=clave[8][0];
    // clave[7][4]=clave[8][1];
    // clave[7][5]=clave[8][2];
    // //21
    // clave[8][3]=clave[6][0];
    // clave[8][4]=clave[6][1];
    // clave[8][5]=clave[6][2];
    // //22
    // clave[6][6]=clave[8][0];
    // clave[6][7]=clave[8][1];
    // clave[6][8]=clave[8][2];
    // //23
    // clave[7][6]=clave[6][0];
    // clave[7][7]=clave[6][1];
    // clave[7][8]=clave[6][2];
    // //24
    // clave[8][6]=clave[7][0];
    // clave[8][7]=clave[7][1];
    // clave[8][8]=clave[7][2];
    // document.write("<center>")
    // for(y=0;y<9;y++){
    //     for(x=0;x<9;x++){
    //         document.write(clave[y][x]+"  ");
    //     }
    //     document.write("<br>")
    // }
    // document.write("</center>")
}