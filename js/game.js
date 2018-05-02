$(document).ready(function(){
	Comida.gerar();
});


let Grid = {	
	tamanhoDaCelula: 25,
	minCelulasX: 0,
	maxCelulasX: 19,
	minCelulasY: 0,
	maxCelulasY: 19
}

let Snake = {
	x: 0,
	y: 0,
	velocidadeX: 0,
	velocidadeY: 0,
	largura: 25,
	altura: 25,

	mostrar : function() {
    return this.largura;
  }
}

let Comida = {
	x: 0,
	y: 0,
	largura: 25,
	altura: 25,
	tamanho: 25,

	gerar: function(){
		this.x = Math.floor(Math.random()* Grid.maxCelulasX + Grid.minCelulasX) * this.tamanho;
		this.y = Math.floor(Math.random()* Grid.maxCelulasY + Grid.minCelulasY) * this.tamanho;
		return "X: "+ this.x +"   Y: "+this.y;
	}
}

function mostrarDistancia(xA, yA, xB, yB){
	return Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
}

function atualizar(){
	desenhar();
}

function desenhar(){
	var cvs = document.getElementById("canvas");
	var ctx = cvs.getContext("2d");

	ctx.fillStyle = "green";
	ctx.fillRect(0, 0, Snake.largura, Snake.altura);

	//inserido comida
	ctx.fillStyle = "red";
	ctx.fillRect(Comida.x, Comida.y, Comida.largura, Comida.altura);
}


setInterval(atualizar, 100);
