//2
let array = []
    for (let i = 0; i < 15; i++) {
        array.push(Math.round(-10 + Math.random() * ((30 - (-10)) + 1)))
    }
    console.log(array);

    for (let i = 0; i < 15; i++) {
        if (array[i] < 0) {
            array[i] = array[i] * array[i]
        }
    }
    console.log('Заменить отрицательные элементы их квадратами, остальные без изменений = ', array);