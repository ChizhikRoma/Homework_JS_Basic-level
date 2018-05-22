//Задача 1
/*var obj = new Object();
isEmpty(obj);
function isEmpty(obj) {
	for (prop in obj) {
		console.log("False");
		return false;
	}	
	console.log("True");
	return true;;
}*/

//Задача 2
/*var x = +prompt("Введите число:");
if (!(+x)) {
	do {
		alert("В поле число должно введено быть только число!");
		var x = +prompt("Введите число:");
	} while (!(+x))
}
var n = +prompt("Введите степень:");
if (n < 1 || !(+n)) {
	do {
		alert("В поле степень должно введено быть только натуральное значение, т.е. целое от 1 и выше");
		var n = +prompt("Введите степень:");
	} while (n < 1 || !(+n))
}

var res = 1;
alert(pow(x, n));

function pow(x, n) {
	for (var i = 0; i < n; i++) {
		if (n == 1) {
			return x;
		}
		res *= x;
	}
	return res;
}*/

//Задача 3
/*var n = +prompt("Введите число:");
if (n < 1 || !(+n)) {
	alert("Число должно быть больше 0!");
}
else {
	//var j = n;
	alert(sumTo(n));
}*/
//1 вариант  (2-ой по скорости)
/*function sumTo(n) {
	var res = 0;
	for (var i = 1; i < n; i++) {
		j = j - 1;
		res = j + res;
	}
	return res + n;
}*/
//2 вариант (3 по скорости)
/*function sumTo(n) {
	if(n == 1) {
		return 1;
	}
	return n + sumTo(n-1);
}*/
// Посчитать на sumTo(100000) нельзя, выдает ошибку "Maximum call stack size exceeded"(Имеют ограничение на вложенность)
//3 вариант (1 по скорости) Sn=(a^1+a^n)/2 * n , где a^1 — первый член прогрессии, a^n — член с номером n, n — количество суммируемых членов.
function sumTo(n) {
	return (1 + n)/2 * n;
}