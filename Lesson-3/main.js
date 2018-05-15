// Задание 1
/*var login = prompt("Введите ЛОГИН:");
if (login === "admin") {
	var pass = prompt("Введите пароль:");
	if (pass === "Чёрный Властелин") {
		alert("Добро пожаловать!");
	}
	else if (+pass === 0) {
		alert("Вход отменен");
	}
	else {
		alert("Пароль неверен");
	}
} else if (+login === 0) {
	alert("Вход отменен");
}
else {
	alert("Я вас незнаю");
}*/

// Задание 2
/*var message;
var login = 'Вася';
login === 'Вася' ? message = 'Привет' : login === 'Директор' ? message = 'Здравствуйте' : login === '' ? message = 'Нет логина' : message = '';
alert(message);*/

// Задание 3
/*for (var i = 2; i<=10; i++) {
	if(i%2 == 0) {
		alert(i);
	}
}*/

// Задание 4
var arr = [];
var sum = 0;
do {
	var num = prompt("Введите число:");
	if (num === '' || num === null || num === ' ') {
		break;
	}
	if ( +num || +num === 0) {
		var arrCount = arr.push(Number(num));
	}
} while (+num || +num === 0)
for (var i = 0; i < arrCount; i++) {
	sum += arr[i];
}
alert(sum);
