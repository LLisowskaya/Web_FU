let users = [
    {
        name: "Миша",
        age: 34
    },
    {
        name: "Елена",
        age: 17
    },
    {
        name: "Олег",
        age: 25
    },
];
let orders = [
    {
        name: "Миша",
        cost: 6754
    },
    {
        name: "Елена",
        cost: 3567
    },
    {
        name: "Олег",
        cost: 13355
    },
];
let cafes = [
    {
        name: "MyBox",
        address: 'Новочерёмушкинская улица'
    },
    {
        name: "Много лосося",
        address: 'Проезд Черепановых'
    },
    {
        name: "Шашлыкoff",
        address: 'Первомайская'
    },
];
for (let el of users) {
    if (el.age < 18) {
        console.log('Меньше 18 лет ', el)
    }
}
for (let el of orders) {
    if (el.cost < 6000) {
        console.log('Заказ на сумму меньше 6000 ', el)
    }
}
for (let el of cafes) {
    if (el.address  === 'Проезд Черепановых') {
        console.log('Много лосося на проезде Черепановых: ', el)
    }
}