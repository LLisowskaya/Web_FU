alert("Первое задание");
alert("Начало");
let correct_guesses = 0;
alert("Отгадки: " + correct_guesses);
first_question = prompt('2x2?');
if (first_question === '4') {
    alert('Верно!');
    correct_guesses ++;
}  else {
    alert('Неверно!')
}
second_question = prompt('Висит груша, нельзя скушать?');
if (second_question === 'Лампочка') {
    alert('Верно!');
    correct_guesses ++;
} else {
    alert('Неверно!')
}
alert("Правильных ответов: " + correct_guesses)

alert("Второе задание");
let n = 0;
while (n <= 9) {
    n ++;
    alert(n);
}

alert("Третье задание");
do {
    alert("Ещё по одной?");
} while (prompt('Введите 1, чтобы выйти') !== '1');
alert("Всего хорошего!");

alert("Четвертое задание");
let f = 1;
let answer = 1;
while (f <= 13) {
    answer = answer * f;
    f ++;
}
alert("Факториал тринадцати равен: " + answer);

alert("Пятое задание");
let surname = "Довод";
surname = surname.toLowerCase();
if (surname === surname.split('').reverse().join('')) {
    alert('Палиндром!');
}  else {
    alert('Не палиндром!')
}
alert("Шестое задание");
let num = 8;
nextPrime:
    for (let i = 2; i <= num; i++) { // Для всех i...
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j === 0) continue nextPrime; // не подходит, берём следующее
        }
        alert(i + ' является простым числом'); // простое число
    }