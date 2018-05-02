var celula = 25;
var pontuacao = 0;
var snake = [];
snake[0] = {
	x: 9 * celula,
	y: 10* celula
};

var comida = {
	x: Math.floor(Math.random() * 19 + 0) * celula,
	y: Math.floor(Math.random() * 19 + 0) * celula
}

function desenhar(){

	var cvs = document.getElementById("canvas");
	var ctx = cvs.getContext("2d");

	ctx.fillStyle= "green";
	ctx.fillRect(snake[0].x, snake[0].y, celula, celula);	

	
	ctx.fillStyle= "red";
	ctx.fillRect(comida.x, comida.y, celula, celula);
}

setInterval(desenhar, 100);