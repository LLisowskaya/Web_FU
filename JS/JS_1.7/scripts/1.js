// Калькулятор в виде стрелочных функций

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculator = (operator, a, b) => operator(a, b);

// Пример использования:
console.log(calculator(add, 2, 3)); // Выводит 5
console.log(calculator(subtract, 5, 2)); // Выводит 3
console.log(calculator(multiply, 4, 6)); // Выводит 24
console.log(calculator(divide, 10, 2)); // Выводит 5
