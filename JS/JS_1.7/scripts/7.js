//Создайте массив и напишите стрелочные функции для него: суммирование всех элементов, выявить все четные, умножить каждый элемент на 2. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const evenArray = (arr) => arr.filter((num) => num % 2 === 0);

const multiplyArray = (arr) => arr.map((num) => num * 2);

console.log(sumArray(numbers)); // Выводит 55
console.log(evenArray(numbers)); // Выводит [2, 4, 6, 8, 10]
console.log(multiplyArray(numbers)); // Выводит [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
