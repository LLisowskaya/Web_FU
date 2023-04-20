function Student(name, surname, group) {
    this.name = name;
    this.surname = surname;
    this.group = group;
    this.sayHi = function () {
        alert("Меня зовут: " + this.name +". Фамилия " + this.surname + ". Группа: " + this.group);
    };
}

let first = new Student("Олеся", "Полякова", 'Пи19-1в');
first.sayHi();
