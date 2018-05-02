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

document.addEventListener("keydown", direcao);
var dir;
function direcao(event){
	if(event.keyCode== 37){
		//snakeX -= celula;
		dir = "esquerda";
	}
	else if(event.keyCode== 38){
		//snakeY -= celula;
		dir = "cima";
	}
	else if(event.keyCode== 39){
		//snakeX += celula;
		dir = "direita";
	}
	else if(event.keyCode== 40){
		//snakeY += celula;
		dir = "baixo";
	}
}

function desenhar(){

	var cvs = document.getElementById("canvas");
	var ctx = cvs.getContext("2d");


	for(var i = 0; i < snake.length; i++){
		ctx.fillStyle= "green";
		ctx.fillRect(snake[i].x, snake[i].y, celula, celula);	
	}
	ctx.fillStyle= "red";
	ctx.fillRect(comida.x, comida.y, celula, celula);

	
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if(dir == "esquerda"){
		snakeX -= celula;
	}
	if(dir == "cima"){
		snakeY -= celula;
	}
	if(dir == "direita"){
		snakeX += celula;
	}
	if(dir == "baixo"){
		snakeY += celula;
	}

	snake.pop();

	let novaPosSnake = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(novaPosSnake);

}

setInterval(desenhar, 100);