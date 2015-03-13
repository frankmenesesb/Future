/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");



    y = 10;
    z = 10;
    for (x = 0; x < 200; x++) {

        var resultado = parImpar(x);

        //LINEA
        context.beginPath();
        context.moveTo(y + 5, 10);
        context.lineTo(y + 5, 160);
        context.lineWidth = 2;
        context.strokeStyle = 'black';
        context.stroke();
        //CUADRO
        context.beginPath();
        context.rect(y, z, 10, 20);
        context.fillStyle = resultado;
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = 'black';
        context.stroke();

        y = y + 30;
        z = Math.floor((Math.random() * 140) + 20);


    }



    function parImpar(numero) {
        if (numero % 2 === 0) {
            return "red";
        }
        else {
            return "blue";
        }
    }


    // Se dibuja un texto
    /*context.beginPath();
     context.font = "italic 40pt Calibri";
     context.fillStyle = "black";
     context.fillText("El mercado de valores", 150, 100); */
};