let customer = {
    name: "Гордан",
    surname: "Фримен",
    age: 42,
    country: 'Россия',
    city: 'Москва'   
};
customer.sayHi = function () {
    alert('Name ' + customer.name + '\nSurname ' + customer.surname + '\nCity ' + customer.city);
};

customer.sayHi();