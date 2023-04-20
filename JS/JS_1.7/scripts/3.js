//Реализуйте в виде стрелочной функции функцию, проверяющую вашу фамилию на полиндром.

const isSurnamePalindrome = (surname) => {
    const reversedSurname = surname.split('').reverse().join('');
    return surname.toLowerCase() === reversedSurname.toLowerCase();
  };
  
  // Пример использования:
  console.log(isSurnamePalindrome('Abba')); // Выводит true
  console.log(isSurnamePalindrome('Madam')); // Выводит true
  console.log(isSurnamePalindrome('Smith')); // Выводит false
  