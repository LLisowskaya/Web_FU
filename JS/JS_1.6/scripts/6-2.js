let surname = "Довод";
surname = surname.toLowerCase();
if (surname === surname.split('').reverse().join('')) {
    alert('Палиндром!');
}  else {
    alert('Не палиндром!')
}