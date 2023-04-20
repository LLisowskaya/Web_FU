//3
let array = []
    for (let i = 0; i < 15; i++) {
        array.push(Math.round(-10 + Math.random() * ((30 - (-10)) + 1)))
    }
    console.log(array);
    let sum = 0
    let n = 0
    let sum_neg = 0
    let n_neg = 0
    let n_nul = 0
    for (let i = 0; i < 15; i++) {
        if (array[i] > 0) {
            sum += array[i]
            n += 1
        } else if (array[i] < 0) {
            sum_neg += array[i]
            n_neg += 1
        } else if (array[i] === 0) {
            n_nul += 1
        }
    }
    console.log('Cреднее арифметическое положительных чисел = ', Math.round(sum/n));
    console.log('Cреднее арифметическое отрицательных чисел = ', Math.round(sum_neg/n_neg));
    console.log('число нулей = ', n_nul);