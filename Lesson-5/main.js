//Задача 1 
/*var str = prompt("Введите строку:");
var len = str.length;
palindrome(str, len);
function palindrome(str, len) {
	for (var i = len-1; i >= 0; i--) {
		for (var j = 0; j < len; ++j) {
			if (str[i] === str[j]) {
				if(i == 0 && j == len-1) {
					alert(str + " - является палиндромом");
				}
				--i;
				
			}
			else {
				break;
			}
		}
		break;
	}
}*/

//Задача 2
/*var str = prompt("Введите слово:");
var word = prompt("Введите второе слово:");
if (!str || !word || str === word || str.length > word.length || word.length > str.length) {
	alert ("Не анограмма");
} else if (str.length == word.length) {
	console.log(anagramm (str, word));
}
function anagramm (str, word) {
	var arr1 = [];
	var arr2 = [];
	for (var i = 0; i < str.length; i++) {
		arr1[i] = str[i];
		arr2[i] = word[i];
	}
	var arr1_sort = arr1.sort();
	var arr2_sort = arr2.sort();
	for (var j = 0; j < arr1_sort.length; j++) {
		if (arr1_sort[j] != arr2_sort[j]) {
			return false;
		} 
	}
	return true;
}*/

//Задача 3
/*var str = prompt("Введите строку:");
var num = countVowels(str);
alert(num);
function countVowels(str)
{
	var arr = new Array("а", "e", "ё", "и", "о", "у", "ы", "э", "ю", "я", "А", "Е", "Ё", "И", "О", "У", "Ы", "Э", "Ю", "Я", "A", "E", "I", "O", "U", "a", "i:", "i", "o", "u");
	var len = str.length;
	var arrLen = arr.length;
	var vowels = new Array();
	for (var j = 0; j < len; j++) {
		for (var i = 0; i < arrLen; i++) {
			if (str[j] == arr[i]) {
				vowels.push(str[j]);
			}
		}
	}
	return vowels.length;
}*/

//Задача 4
/*var str = "Криптовалютой называются цифровые деньги, зашифрованные и защищенные с помощью специальных алгоритмов. Главное отличие от тех же вебмани-в абсолютной децентрализации, независимости от любой финансовой и государственной системы, банковских структур. Она достигается благодаря принципу работы на технологии блокчейн, которая позволяет последовательно криптографировать проведенные операции. На сегодня в мире существуют сотни разных криптовалют, но главной остается биткоин. В чем же его преимущества перед традиционными валютами?";
console.log(str_count(str));
function str_count(str) {
	var arr = [];
	var num = [];
	var res = [];
	arr = str.split(/[.!?]+/);
	for(var i = 0; i < arr.length; i++) {
		num[i] = (arr[i].replace(/\s/g,'').replace(/\,/g,'').replace(/\-/g,'')).length;
		res[i] = arr[i] + " - " + num[i];
	}
	return res;
}*/

//Задача 5
var mas = [1,2,3,4,10,6,7,8,9,5];
console.log(sort_puz(mas));
function sort_puz(mas) {
	for (var i = 0; i < mas.length - 1; i++) {
		var minNum = mas[i];
		for(var j = i + 1; j < mas.length; j++) {
			if(mas[j] < minNum) {
				var dop = mas[i];
				minNum = mas[j];
				mas[i] = minNum;
				mas[j] = dop;
			}
		}
	}
	return mas;
}