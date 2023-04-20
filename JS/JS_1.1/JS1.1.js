alert("Первое задание");
let num = prompt("Введите число: ");
alert("Число которое вы ввели: " + num);

alert("Второе задание");
let a = parseInt(prompt("Введите первое число: "));
let b = parseInt(prompt("Введите второе число: "));

alert("Сумма чисел равна: " + (a + b));
alert("Разность чисел равна: " + (a - b));
alert("Произведение чисел равно: " + (a * b));
alert("Частное чисел равно: " + (a / b));

alert("Третье задание");
let n = parseInt(prompt("Введите полученный результат: "));
alert("Вы загадали число: " + ((n-7) / 2));

alert("Четвертое задание");
let name = prompt("Введите свое имя: ");
let age = parseInt(prompt("Введите год рождения: "))
document.write(name + ": " + (2022 - age) + ".");