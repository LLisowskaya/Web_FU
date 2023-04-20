//1
let array = []
    for (let i = 0; i < 15; i++) {
        array.push(Math.round(-10 + Math.random() * ((30 - (-10)) + 1)))
    }
    console.log(array);
    let sum = 0
    let n = 0
    for (let i = 0; i < 15; i++) {
        if (array[i] > 0) {
            sum += array[i]
            n += 1
        }
    }
    console.log('Cреднее арифметическое положительных элементов = ', Math.round(sum/n));



