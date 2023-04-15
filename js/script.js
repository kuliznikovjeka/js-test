const btn = document.getElementById('button');

btn.addEventListener('click', check);
function check() {
	let result = 0;

	let answer1 = document.getElementById('answer1').value;
	if (answer1 === '2') {
		result++;
	}
	let answer2 = document.getElementById('answer2').value;
	if (answer2 === '15') {
		result++;
	}
	let answer3 = document.getElementById('answer3').value;
	if (answer3 === '5') {
		result++;
	}
	let answer4 = document.getElementById('answer4').value;
	if (answer4 === '28') {
		result++;
	}
	let answer5 = document.getElementById('answer5').value;
	if (answer5 === '21') {
		result++;
	}
	alert('Выполнено правильных ответов: ' + result);
	if (result == '5') {
		alert('Ты молодец');
	} else if (result == '4') {
		alert('Неплохо, но нужно лучше!');
	} else if (result == '3') {
		alert('Ты троечник!');
	} else {
		alert('Всё плохо, пора вызывать родителей');
	}
}