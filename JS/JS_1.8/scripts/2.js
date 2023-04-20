//Имеется массив «год рождения». Необходимо вывести их возраст.

const birthYears = [1990, 1985, 1995, 2000];
const currentYear = new Date().getFullYear();

const ages = birthYears.map(year => currentYear - year);

console.log(ages);