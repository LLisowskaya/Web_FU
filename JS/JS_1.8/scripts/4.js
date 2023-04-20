//Вычислите средний балл студентов.

const grades = [4, 5, 3, 2, 5, 5, 4, 3, 4, 5, 2, 4];

const sum = grades.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  
  const avg = sum / grades.length;
  
  console.log(avg); // Выводит: 3.9166666666666665
  