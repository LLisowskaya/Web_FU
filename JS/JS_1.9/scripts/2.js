const number = +prompt('Загадайте цифру до 9', '');

switch (number) {
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
    alert('Вы ввели число 2');
    break;
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
    // Обработка других цифр
    break;
  case 8:
  case 9:
    alert('Вы ввели число 8, а может и 9');
    break;
  default:
    // Обработка неверного ввода
    break;
}
