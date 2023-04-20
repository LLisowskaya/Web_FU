let str = '12345'; // строка с цифрами
let phoneNum = '963631'; // номер телефона для поиска

// проверяем первый символ строки
switch(str.charAt(0)) {
  case '1':
  case '2':
  case '3':
    console.log('Первая цифра 1, 2 или 3');
    break;
  default:
    console.log('Нет');
    break;
}

// проверяем наличие номера телефона в строке
if(str.includes(phoneNum)) {
  console.log('Номер телефона найден');
} else {
  console.log('Номер телефона не найден');
}
