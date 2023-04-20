//4
let arr = []
    for (i = 0; i <= 1000000; i++) {
        arr[i] = Math.round(Math.random() * 2);
    }
    let n = 0
    for (i = 0; i <= 1000000; i++) {
        if (arr[i] === 0) {
            n += 1
        }
    }
    console.log('Красное значение выпадало', n, 'раз')

