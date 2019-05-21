// создание поля
let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

// создание 16 клеток
for (let i = 1; i < 17; i++) {
	let cell = document.createElement('div');
	field.appendChild(cell);
	cell.classList.add('cell');
};

var min = 0;

function start () {
		min++;
		document.getElementById('timer').innerHTML = min;
		setTimeout("start()", 1000);
};